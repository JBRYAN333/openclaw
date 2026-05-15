# ✅ WebSocket + HTTP na Mesma Porta — Confirmado

## Resposta Direta

**Sim, o OpenClaw gateway expõe WebSocket e HTTP na mesma porta.**

---

## Como Funciona

### Arquitetura

```
Porta 80 (SquareCloud)
    ↓
HTTP Server (Node.js)
    ├── HTTP requests → Dashboard, API endpoints
    └── WebSocket upgrade → Node pairing, operator connections
```

### Código-Fonte (Confirmado)

**Arquivo:** `src/gateway/server-runtime-state.ts` (linha 220-253)

```typescript
// Create WebSocketServer first (with noServer: true) so we can attach upgrade handlers
// before HTTP servers start listening. This prevents a race condition where connections
// arrive before the upgrade handler is attached, which causes silent 1006 errors.
const wss = new WebSocketServer({
  noServer: true,  // ← NÃO cria servidor próprio
  maxPayload: MAX_PREAUTH_PAYLOAD_BYTES,
});

// ...

const httpServer = createGatewayHttpServer({
  // ... config HTTP
});

// Attach upgrade handler BEFORE listening to prevent race condition
attachGatewayUpgradeHandler({
  httpServer,  // ← Mesmo servidor HTTP
  wss,         // ← WebSocket usa o mesmo servidor
  // ...
});
```

**Arquivo:** `src/gateway/server-http.ts` (linha 803-933)

```typescript
export function attachGatewayUpgradeHandler(opts: {
  httpServer: HttpServer;
  wss: WebSocketServer;
  // ...
}) {
  opts.httpServer.on("upgrade", (req, socket, head) => {
    // ... auth checks ...
    
    // WebSocket upgrade na mesma porta HTTP
    wss.handleUpgrade(req, socket, head, (ws) => {
      // ... connection handling
    });
  });
}
```

---

## Como o Gateway Diferencia

### HTTP Request (Dashboard, API)
```
GET / HTTP/1.1
Host: clawsec.squareweb.app
```
→ Roteado para dashboard web ou API endpoints

### WebSocket Upgrade (Node Pairing)
```
GET / HTTP/1.1
Host: clawsec.squareweb.app
Upgrade: websocket
Connection: Upgrade
```
→ Roteado para WebSocket handler

**Código de detecção:**
```typescript
// src/gateway/server-http.ts linha 528-530
// Don't interfere with WebSocket upgrades; ws handles the 'upgrade' event.
if ((req.headers.upgrade ?? "").toLowerCase() === "websocket") {
  return;  // Deixa o WebSocket handler processar
}
```

---

## Paths Diferentes?

**Não precisa.** O OpenClaw usa o **header `Upgrade: websocket`** pra diferenciar, não paths diferentes.

### Requests HTTP normais:
- `/` → Dashboard
- `/healthz` → Health check
- `/v1/chat/completions` → OpenAI API
- `/api/...` → Outros endpoints

### WebSocket upgrade:
- Qualquer path com `Upgrade: websocket` → WebSocket handler
- Node pairing usa o mesmo endpoint raiz

---

## Implicação pro Deploy SquareCloud

### ✅ Funciona Out-of-the-Box

**SquareCloud website = porta 80 única**
- HTTP requests → Dashboard, API
- WebSocket upgrades → Node pairing

**Não precisa configurar nada especial.**

### Config `squarecloud.app`:
```ini
START=node openclaw.mjs gateway --bind lan --port 80
```

### Config `openclaw.cloud.json`:
```json
{
  "gateway": {
    "bind": "lan",
    "port": 80
  }
}
```

**Pronto.** WebSocket e HTTP coexistem na porta 80 automaticamente.

---

## Node Pairing na Prática

### No PC (conectar como node):
```bash
set OPENCLAW_GATEWAY_TOKEN=<token>
openclaw node run --host clawsec.squareweb.app --port 80 --display-name "THERYANPC"
```

**O que acontece:**
1. PC faz HTTP request pra `http://clawsec.squareweb.app:80/`
2. Envia header `Upgrade: websocket`
3. Gateway detecta upgrade e roteia pro WebSocket handler
4. WebSocket connection estabelecida na mesma porta 80

### No gateway (aprovar):
```bash
# Via Discord:
@ClawSec Cloud openclaw devices list
@ClawSec Cloud openclaw devices approve <requestId>
```

---

## Segurança

### Porta 80 = HTTP (não HTTPS)
- SquareCloud website usa HTTP na porta 80
- WebSocket vai sobre HTTP (`ws://`, não `wss://`)
- **Risco:** Tráfego não criptografado

### Mitigação:
1. **SquareCloud já tem DDoS protection** (camada de proxy)
2. **Opcional:** Tailscale pra túnel criptografado PC ↔ Cloud
3. **Allowlist de comandos** no node (approvals)

---

## Resumo Final

| Item | Status |
|------|--------|
| **WebSocket + HTTP mesma porta?** | ✅ Sim |
| **Precisa path diferente?** | ❌ Não (usa header `Upgrade`) |
| **Funciona na porta 80?** | ✅ Sim |
| **SquareCloud compatível?** | ✅ Sim |
| **Precisa configurar algo?** | ❌ Não (automático) |
| **Dashboard + Node pairing simultâneos?** | ✅ Sim |

---

## Próximo Passo

**Deploy na SquareCloud sem preocupação.** WebSocket e HTTP coexistem nativamente na porta 80.

1. Criar bot Discord
2. Deploy SquareCloud
3. Testar dashboard (`http://clawsec.squareweb.app/`)
4. Testar node pairing (`openclaw node run --host clawsec.squareweb.app --port 80`)

Tudo na mesma porta. Zero config extra.
