# 🚀 Deploy OpenClaw Dashboard na SquareCloud

## 📋 Passo a Passo

### 1️⃣ Gerar Gateway Token

```bash
# Windows PowerShell:
$token = -join ((48..57) + (97..102) | Get-Random -Count 64 | ForEach-Object {[char]$_})
echo $token

# Ou online: https://www.random.org/strings/?num=1&len=64&digits=on&loweralpha=on&unique=on&format=plain
```

**Guardar o token gerado.**

---

### 2️⃣ Preparar Zip para Upload

```bash
cd C:\Users\Mimi\OneDrive\Desktop\Projetos\gits\openclaw

# Criar zip (excluir node_modules, .git, etc)
# Incluir:
# - squarecloud.app
# - openclaw.cloud.json
# - openclaw.mjs
# - package.json
# - dist/
# - docs/
# - skills/
# - patches/
```

**Ou usar SquareCloud CLI (mais fácil):**

```bash
# Instalar CLI (se não tiver)
npm install -g @squarecloud/cli

# Autenticar
squarecloud auth login
# (vai pedir API key do dashboard SquareCloud)

# Deploy
squarecloud upload
```

---

### 3️⃣ Configurar Variáveis de Ambiente (SquareCloud Dashboard)

Depois do upload, ir no dashboard SquareCloud e adicionar:

```
OPENCLAW_GATEWAY_TOKEN=<token_gerado_passo_1>
OPENCLAW_CONFIG_PATH=/app/openclaw.cloud.json
OPENCLAW_STATE_DIR=/app/.openclaw
OPENCLAW_WORKSPACE_DIR=/app/.openclaw/workspace
NODE_OPTIONS=--max-old-space-size=400
NODE_ENV=production
```

---

### 4️⃣ Testar Dashboard

```bash
# Health check
curl https://clawsec.squareweb.app/healthz

# Abrir dashboard no navegador
https://clawsec.squareweb.app/
```

**Login:** Usar o token gerado no passo 1.

---

### 5️⃣ (Opcional) Configurar Discord Depois

Quando quiser adicionar Discord:

1. Criar bot Discord
2. Adicionar no `openclaw.cloud.json`:
   ```json
   "channels": {
     "discord": {
       "enabled": true,
       "token": "${DISCORD_BOT_TOKEN}"
     }
   }
   ```
3. Adicionar env var `DISCORD_BOT_TOKEN` no dashboard SquareCloud
4. Restart app

---

## ⚠️ Troubleshooting

### RAM insuficiente (LACK_OF_RAM)
- Aumentar RAM no dashboard (512 → 1024 MB)

### Gateway não responde
- Verificar logs: `squarecloud logs <app_id>`
- Verificar porta 80, bind "lan"

### Build falha
- Verificar `squarecloud.app` MAIN correto
- Verificar `NODE_OPTIONS=--max-old-space-size=400`

---

## 📊 Status

- ✅ Config files prontos
- ✅ WebSocket + HTTP mesma porta confirmado
- ✅ Dashboard-only (Discord opcional)
- 🚀 Pronto pra deploy

**Próximo comando:** `squarecloud upload`
