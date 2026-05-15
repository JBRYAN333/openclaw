# 🥷 ClawSec Cloud — Resumo Executivo

## 📍 Situação Atual
- ✅ Fork `JBRYAN333/openclaw` clonado
- ✅ OpenClaw v2026.5.14 pronto
- ✅ 9router rodando em `protagrouter.squareweb.app`
- ✅ Config local funcionando (PC)

## 🎯 Objetivo
Gateway OpenClaw 100% na nuvem (SquareCloud), com PC como node opcional (portinha on/off).

## 📦 Arquivos Preparados
```
openclaw/
├── squarecloud.app          ← Config SquareCloud (512 MB, porta 80)
├── openclaw.cloud.json      ← Config gateway cloud (9router + Discord)
├── .squarecloudignore       ← Excluir node_modules, docs, etc
├── DEPLOY-CHECKLIST.md      ← Checklist completo fase por fase
└── CLAWDEPLOY.md            ← Plano arquitetural
```

## 🚀 Próximos Passos (em ordem)

### 1️⃣ Criar Novo Bot Discord (5 min)
- Discord Developer Portal → New Application
- Bot → Reset Token → copiar
- Intents: Presence, Server Members, Message Content
- OAuth2 → adicionar ao servidor ClawSecBR

### 2️⃣ Gerar Gateway Token (1 min)
```bash
openssl rand -hex 32
```

### 3️⃣ Deploy SquareCloud (10 min)
```bash
# Instalar CLI (se não tiver)
npm install -g @squarecloud/cli

# Autenticar
squarecloud auth login

# Deploy
cd C:\Users\Mimi\OneDrive\Desktop\Projetos\gits\openclaw
squarecloud upload
```

### 4️⃣ Configurar Env Vars (SquareCloud dashboard)
```
OPENCLAW_GATEWAY_TOKEN=<token_gerado_passo_2>
DISCORD_BOT_TOKEN=<token_bot_passo_1>
OPENCLAW_CONFIG_PATH=/app/openclaw.cloud.json
OPENCLAW_STATE_DIR=/app/.openclaw
OPENCLAW_WORKSPACE_DIR=/app/.openclaw/workspace
NODE_OPTIONS=--max-old-space-size=400
NODE_ENV=production
```

### 5️⃣ Testar (2 min)
```bash
# Health check
curl https://clawsec.squareweb.app/healthz

# Discord
@ClawSec Cloud oi
```

### 6️⃣ Node Pairing (opcional, depois)
```bash
# No PC
openclaw node --name thyryanpc --join https://clawsec.squareweb.app --token <gateway_token>
```

## ⚠️ Pontos de Atenção

### RAM (512 MB é apertado)
- OpenClaw consome ~300-400 MB em idle
- Se der `LACK_OF_RAM`, aumentar pra 1024 MB no dashboard
- `NODE_OPTIONS=--max-old-space-size=400` limita heap

### Porta
- SquareCloud website = porta 80 (não 18789)
- `gateway.bind = "lan"` (não loopback)
- `START=node openclaw.mjs gateway --bind lan --port 80`

### Secrets
- ❌ NÃO commitar tokens no git
- ✅ Usar env vars no SquareCloud dashboard
- ✅ `openclaw.cloud.json` usa `${DISCORD_BOT_TOKEN}` placeholder

### Node Pairing (Portinha)
- Opcional — só se precisar exec local no PC
- Tailscale recomendado (mais seguro que porta pública)
- Scripts `node-up.bat` / `node-down.bat` pra ligar/desligar

## 📊 Custos Estimados (SquareCloud)
- 512 MB RAM = ~R$ 10-15/mês
- 1024 MB RAM = ~R$ 20-30/mês
- Bandwidth 100 Mbps incluído (512 MB)

## 🔧 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| `LACK_OF_RAM` | Aumentar RAM no dashboard |
| Gateway não responde | Verificar porta 80, bind "lan" |
| Discord não conecta | Verificar token novo, intents |
| Build falha | Verificar `squarecloud.app` MAIN correto |

## 📚 Docs de Referência
- SquareCloud: https://docs.squarecloud.app
- OpenClaw: https://docs.openclaw.ai
- Checklist completo: `DEPLOY-CHECKLIST.md`

---

> **Status:** Pronto para deploy. Começar pelo passo 1 (criar bot Discord).
> **Tempo estimado total:** 20-30 minutos
> **Dificuldade:** Baixa (tudo automatizado)
