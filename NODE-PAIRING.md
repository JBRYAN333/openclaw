# Node Pairing — Respostas Técnicas

## ✅ OpenClaw JÁ TEM node pairing nativo

Baseado na documentação oficial (`docs/nodes/index.md`):

### 1. Como o nó se autentica com o gateway na nuvem?

**Resposta:** Via **WebSocket** com device pairing.

```bash
# No PC (node):
openclaw node run --host clawsec.squareweb.app --port 80 --display-name "THERYANPC"

# Ou instalar como serviço:
openclaw node install --host clawsec.squareweb.app --port 80 --display-name "THERYANPC"
openclaw node start
```

**Autenticação:**
- Usa o mesmo `OPENCLAW_GATEWAY_TOKEN` do gateway
- Node apresenta device identity durante `connect`
- Gateway cria device pairing request com `role: node`
- Você aprova via CLI:

```bash
# No gateway cloud (via Discord ou CLI):
openclaw devices list
openclaw devices approve <requestId>
```

**Token:** Env var `OPENCLAW_GATEWAY_TOKEN` no PC (mesmo token do gateway cloud).

---

### 2. Como o agente decide qual nó usar quando tem mais de um ativo?

**Resposta:** Por **nome, ID ou IP** — você especifica na hora.

```bash
# Listar nodes ativos:
openclaw nodes status

# Descrever node específico:
openclaw nodes describe --node THERYANPC

# Executar comando em node específico:
openclaw exec --host node --node THERYANPC "echo teste"
```

**No Discord:**
```
@ClawSec Cloud execute no PC: dir C:\
```

O agente roteia automaticamente pra `host=node` quando você pede "no PC" ou especifica o node.

**Múltiplos nodes simultâneos:**
- PC: `THERYANPC` (exec, arquivos, terminal)
- Android: `MeuAndroid` (câmera, GPS, notificações)
- Cada um com capacidades diferentes (`canvas.*`, `camera.*`, `device.*`, `system.*`)

---

### 3. Lógica já implementada ou precisa construir?

**Resposta:** ✅ **JÁ IMPLEMENTADA**.

**Arquitetura existente:**
- Gateway WebSocket (porta 18789 local, porta 80 na cloud)
- Node conecta via WS com `role: "node"`
- Device pairing com aprovação manual
- Comandos roteados via `node.invoke`
- Approvals por node (`~/.openclaw/exec-approvals.json` no node)

**Comandos disponíveis:**
- `system.run` — exec local no node
- `system.which` — verificar binários
- `canvas.*` — canvas/screen
- `camera.*` — câmera
- `device.*` — info do device
- `notifications.*` — notificações

**Allowlist de comandos (segurança):**
```bash
# No gateway, adicionar comandos permitidos pro node:
openclaw approvals allowlist add --node THERYANPC "C:\Windows\System32\cmd.exe"
openclaw approvals allowlist add --node THERYANPC "C:\Program Files\Git\bin\git.exe"
```

---

## 🎯 Implicações pro Deploy SquareCloud

### ✅ O que funciona out-of-the-box:
1. Gateway na cloud (SquareCloud) expõe WebSocket na porta 80
2. PC conecta como node via `openclaw node run --host clawsec.squareweb.app --port 80`
3. Você aprova o device pairing via Discord ou CLI
4. Agente na cloud pode executar comandos no PC via `host=node`

### ⚙️ O que precisa configurar:

#### No `openclaw.cloud.json` (gateway cloud):
```json
{
  "gateway": {
    "mode": "cloud",
    "bind": "lan",
    "port": 80,
    "ws": {
      "enabled": true
    }
  }
}
```

#### No PC (scripts on/off):

**`scripts/node-up.bat`:**
```batch
@echo off
set OPENCLAW_GATEWAY_TOKEN=<mesmo_token_do_gateway>
openclaw node run --host clawsec.squareweb.app --port 80 --display-name "THERYANPC"
```

**`scripts/node-down.bat`:**
```batch
@echo off
taskkill /F /IM node.exe /FI "WINDOWTITLE eq openclaw*"
```

#### Aprovação inicial (uma vez):
```bash
# Via Discord:
@ClawSec Cloud openclaw devices list
@ClawSec Cloud openclaw devices approve <requestId>
@ClawSec Cloud openclaw nodes status
```

---

## 🔐 Segurança

### Porta 80 (HTTP) vs WebSocket Seguro
- SquareCloud website = HTTP na porta 80
- WebSocket vai sobre HTTP (ws://, não wss://)
- **Risco:** Tráfego não criptografado

**Solução recomendada:**
1. **Tailscale** — túnel criptografado entre PC e gateway cloud
2. Ou aceitar HTTP (SquareCloud já tem DDoS protection)

### Allowlist de comandos
- Por padrão, node precisa de aprovação manual pra cada comando
- Adicionar allowlist pra comandos confiáveis:

```bash
openclaw approvals allowlist add --node THERYANPC "git"
openclaw approvals allowlist add --node THERYANPC "node"
openclaw approvals allowlist add --node THERYANPC "npm"
```

---

## 📊 Resumo Final

| Pergunta | Resposta |
|----------|----------|
| **Node pairing existe?** | ✅ Sim, nativo no OpenClaw |
| **Como autentica?** | WebSocket + device pairing + gateway token |
| **Como escolhe node?** | Por nome/ID/IP (`--node THERYANPC`) |
| **Múltiplos nodes?** | ✅ Sim, simultâneos (PC + Android + ...) |
| **Precisa construir?** | ❌ Não, só configurar |
| **Portinha on/off?** | ✅ Sim, `openclaw node start` / `taskkill` |
| **Segurança?** | Allowlist + approvals + (opcional) Tailscale |

---

## 🚀 Próximo Passo

Deploy do gateway na SquareCloud **primeiro**, depois configurar node pairing. A portinha é **opcional** — gateway funciona 100% sem ela (só não executa comandos locais).

**Ordem correta:**
1. Deploy gateway SquareCloud ✅
2. Testar Discord + 9router ✅
3. **Depois** configurar node pairing (se precisar exec local)

Quer seguir com o deploy agora ou tem mais dúvidas sobre node pairing?
