# ClawSec Cloud Deploy — Checklist

## ✅ Pré-requisitos
- [ ] Conta SquareCloud ativa com plano pago
- [ ] SquareCloud CLI instalado (`npm i -g @squarecloud/cli`)
- [ ] Novo bot Discord criado (não usar token atual)
- [ ] Gateway token gerado (`openssl rand -hex 32`)

## 📦 Fase 1: Preparar Deploy

### 1.1 Arquivos criados
- [x] `squarecloud.app` — config SquareCloud
- [x] `openclaw.cloud.json` — config gateway cloud
- [ ] `.squarecloudignore` — excluir arquivos desnecessários

### 1.2 Criar `.squarecloudignore`
```
node_modules/
.git/
.github/
.vscode/
*.log
*.map
.env
.env.*
package-lock.json
pnpm-lock.yaml
test/
qa/
docs/
.agents/
patches/
```

### 1.3 Otimizar RAM (512 MB é apertado)
- [ ] Desabilitar plugins não usados (ollama, etc)
- [ ] `NODE_OPTIONS=--max-old-space-size=400`
- [ ] Remover extensions não essenciais do build

## 🤖 Fase 2: Criar Novo Bot Discord

### 2.1 Discord Developer Portal
1. Ir em https://discord.com/developers/applications
2. New Application → nome: `ClawSec Cloud`
3. Bot → Add Bot
4. Reset Token → copiar token
5. Privileged Gateway Intents:
   - ✅ Presence Intent
   - ✅ Server Members Intent
   - ✅ Message Content Intent
6. OAuth2 → URL Generator:
   - Scopes: `bot`, `applications.commands`
   - Permissions: Administrator (ou mínimo necessário)
7. Copiar URL e adicionar bot ao servidor

### 2.2 Guardar token
```bash
# Não commitar! Usar apenas no SquareCloud dashboard
DISCORD_BOT_TOKEN=<novo_token_aqui>
```

## ☁️ Fase 3: Deploy SquareCloud

### 3.1 Autenticar CLI
```bash
squarecloud auth login
# Colar API key do dashboard
```

### 3.2 Testar build local (opcional)
```bash
cd C:\Users\Mimi\OneDrive\Desktop\Projetos\gits\openclaw
npm install
node openclaw.mjs gateway --bind lan --port 8080
# Ctrl+C pra parar
```

### 3.3 Upload
```bash
squarecloud upload
# Ou via dashboard: https://squarecloud.app/en/upload
```

### 3.4 Configurar env vars (SquareCloud dashboard)
```
OPENCLAW_GATEWAY_TOKEN=<gerar_com_openssl_rand_hex_32>
DISCORD_BOT_TOKEN=<token_do_bot_novo>
OPENCLAW_CONFIG_PATH=/app/openclaw.cloud.json
OPENCLAW_STATE_DIR=/app/.openclaw
OPENCLAW_WORKSPACE_DIR=/app/.openclaw/workspace
NODE_OPTIONS=--max-old-space-size=400
NODE_ENV=production
```

### 3.5 Verificar deploy
```bash
# URL esperada: https://clawsec.squareweb.app
curl https://clawsec.squareweb.app/healthz
# Deve retornar 200 OK
```

## 🔌 Fase 4: Testar Discord

### 4.1 Enviar mensagem no Discord
```
@ClawSec Cloud oi
```

### 4.2 Verificar logs
```bash
squarecloud logs <app_id>
```

## 🖥️ Fase 5: Node Pairing (Portinha PC ↔ Cloud)

### 5.1 No PC, conectar como node
```bash
openclaw node --name thyryanpc --join https://clawsec.squareweb.app --token <gateway_token>
```

### 5.2 Verificar conexão
```bash
# No Discord, pedir pro agente:
@ClawSec Cloud execute no PC: echo "teste portinha"
```

### 5.3 Scripts on/off
Criar `scripts/node-up.bat`:
```batch
@echo off
openclaw node --name thyryanpc --join https://clawsec.squareweb.app --token <gateway_token>
```

Criar `scripts/node-down.bat`:
```batch
@echo off
taskkill /F /IM openclaw.exe
```

## 🔧 Fase 6: Troubleshooting

### RAM insuficiente (LACK_OF_RAM)
- Aumentar RAM no dashboard (512 → 1024 MB)
- Reduzir `--max-old-space-size`
- Desabilitar mais plugins

### Gateway não responde
- Verificar logs: `squarecloud logs <app_id>`
- Verificar porta 80 (não 18789)
- Verificar `gateway.bind = "lan"`

### Discord não conecta
- Verificar token do bot novo
- Verificar intents habilitados
- Verificar bot adicionado ao servidor

## 📊 Monitoramento

### Logs em tempo real
```bash
squarecloud logs <app_id> --follow
```

### Status
```bash
squarecloud status <app_id>
```

### Restart
```bash
squarecloud restart <app_id>
```

## 🎯 Próximos Passos (Fase 7+)

- [ ] Auto-update via cron (git pull + restart)
- [ ] Backup automático do workspace
- [ ] Event handlers (crash → notify Discord)
- [ ] Monitoramento de RAM/CPU
- [ ] Tailscale para node pairing mais seguro

---

> **Status atual:** Preparação completa. Pronto para deploy.
> **Próximo comando:** Criar novo bot Discord → Deploy SquareCloud
