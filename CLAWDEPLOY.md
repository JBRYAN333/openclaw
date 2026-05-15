# ☁️ ClawDeploy — OpenClaw 100% Cloud (SquareCloud)

> **Fork:** `JBRYAN333/openclaw`
> **Base:** OpenClaw v2026.5.14
> **Plataforma:** SquareCloud (onde 9router já roda)
> **Vibe:** Gateway na nuvem, node no PC, auto-aprimoramento, restart seguro.

---

## 🧠 Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────┐
│                 ☁️ Cloud                     │
│  ┌─────────────────────────────────────┐   │
│  │         OpenClaw Gateway            │   │
│  │  ┌──────────┐  ┌────────────────┐   │   │
│  │  │ Discord  │  │ Providers      │   │   │
│  │  │ Channel  │  │ - 9router      │   │   │
│  │  └──────────┘  │ - OpenAI/etc   │   │   │
│  │                └────────────────┘   │   │
│  │  ┌──────────┐  ┌────────────────┐   │   │
│  │  │ Workspace│  │ State (volume) │   │   │
│  │  │ persist  │  │ persist        │   │   │
│  │  └──────────┘  └────────────────┘   │   │
│  │        ↕ Node Bridge (WS/HTTP)      │   │
│  └─────────────────────────────────────┘   │
│              ↕ Tailscale / Internet         │
└─────────────────────────────────────────────┘
                      │
┌─────────────────────┴──────────────────────┐
│                 💻 PC (Node)                │
│  ┌─────────────────────────────────────┐   │
│  │  openclaw node --join <gateway>     │   │
│  │  - screen / camera / canvas         │   │
│  │  - system.run (exec local)          │   │
│  │  - enable/disable on demand         │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

---

## 📋 Fases do Plano

### 🟢 Fase 1: Fork + CI/CD

**Objetivo:** Toda push na `main` do fork vai buildar Docker e publicar.

| # | Ação | Comando / Detalhe |
|---|------|-------------------|
| 1.1 | Add upstream oficial | `git remote add upstream https://github.com/openclaw/openclaw.git` |
| 1.2 | Criar GitHub Token (clássico) | repo + packages:write + workflow scopes |
| 1.3 | Configurar GitHub Secrets | `DOCKER_USERNAME`, `DOCKER_PASSWORD` (ghcr.io) |
| 1.4 | Criar GitHub Action `.github/workflows/deploy.yml` | Build + push p/ ghcr.io/jbryan333/openclaw:latest |
| 1.5 | Testar build | `docker build -t clawsec-cloud .` |

**GitHub Action `deploy.yml`:**

```yaml
name: Build & Deploy
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      - name: Login to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Build and push
        uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          tags: ghcr.io/jbryan333/openclaw:latest,ghcr.io/jbryan333/openclaw:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

---

### 🟢 Fase 2: SquareCloud Setup

**SquareCloud** — plataforma onde 9router já roda.

| Constraint | Valor |
|-----------|-------|
| **RAM mínima (website)** | 512 MB |
| **Storage** | 10 GB NVMe |
| **Bandwidth** | 100 Mbps (512 MB RAM) |
| **CPU** | 2 vCPUs (floor com ≥512 MB) |
| **Deploy** | Node.js app (não Docker) |
| **Config** | `squarecloud.app` file |

> **Decisão:** SquareCloud única plataforma. Não usar Docker, rodar `openclaw.mjs` direto.

---

### 🟢 Fase 3: Deploy do Gateway na SquareCloud

#### 3.1 Criar `squarecloud.app` config

```ini
DISPLAY_NAME=ClawSec Gateway
MAIN=openclaw.mjs
MEMORY=512
VERSION=recommended
START=node openclaw.mjs gateway --bind lan --port 80
SUBDOMAIN=clawsec
```

#### 3.2 Preparar zip para deploy

```bash
cd C:\Users\Mimi\OneDrive\Desktop\Projetos\gits\openclaw

# Remover node_modules e package-lock (SquareCloud reinstala)
rm -rf node_modules package-lock.json

# Criar zip (excluir .git, node_modules, etc)
# Incluir: squarecloud.app, openclaw.mjs, package.json, dist/, docs/, skills/
```

#### 3.3 Deploy via CLI

```bash
# Instalar CLI
npm install -g @squarecloud/cli

# Autenticar
squarecloud auth login

# Deploy
squarecloud upload
```

#### 3.4 Configurar variáveis de ambiente (SquareCloud dashboard)

```bash
OPENCLAW_GATEWAY_TOKEN=<gerar com openssl rand -hex 32>
OPENCLAW_GATEWAY_PORT=80
DISCORD_BOT_TOKEN=<novo bot token>
OPENCLAW_STATE_DIR=/app/.openclaw
OPENCLAW_WORKSPACE_DIR=/app/.openclaw/workspace
NODE_OPTIONS=--max-old-space-size=400
```

---

### 🟢 Fase 4: Config Otimizada pra Cloud

Criar `config/cloud.json` — baseado no `openclaw.json` local mas ajustado:

```json
{
  "models": {
    "providers": {
      "9router": {
        "baseUrl": "https://protagrouter.squareweb.app/api/v1",
        "apiKey": "clawsec_ninja_2026",
        "api": "openai-completions",
        "models": [
          { "id": "protagnix", "name": "protagnix" }
        ]
      }
    }
  },
  "gateway": {
    "mode": "cloud",
    "auth": {
      "mode": "token",
      "token": "${OPENCLAW_GATEWAY_TOKEN}"
    },
    "bind": "lan",
    "port": 8080
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "9router/protagnix"
      }
    }
  },
  "channels": {
    "discord": {
      "enabled": true,
      "token": "${DISCORD_BOT_TOKEN}"
    }
  }
}
```

**Diferenças do local:**
| Item | Local (PC) | Cloud |
|------|-----------|-------|
| gateway.mode | `local` | `cloud` |
| gateway.bind | loopback (default) | `lan` (0.0.0.0) |
| Secrets | hardcoded | env vars / secrets |
| gateway.auth.token | fixo | via Railway secret |
| workspace | pasta local | volume persistente |

---

### 🟢 Fase 5: A Portinha — PC como Node

Essa é a parte chave. O gateway na nuvem conversa com o PC local via **node pairing**.

#### 5.1 Opção A: Tailscale (recomendada)

```bash
# No PC (Windows):
# 1. Instalar Tailscale
# 2. Logar na mesma conta nos dois devices
# 3. PC fica acessível via Tailscale IP/MagicDNS

# No gateway cloud:
# O gateway descobre nodes via Tailscale
# Configurar no openclaw.json:
```

```json
{
  "nodes": {
    "thyryanpc": {
      "address": "http://thyryanpc.tailnet-name.ts.net:20128",
      "auth": {
        "token": "${NODE_AUTH_TOKEN}"
      },
      "autoConnect": true,
      "capabilities": ["exec", "screen", "camera", "canvas"]
    }
  }
}
```

#### 5.2 Opção B: WebSocket Reverse Tunnel

Se não quiser Tailscale, o PC abre um túnel pro gateway:

```bash
# No PC, conectar como node
openclaw node --name thyryanpc --join https://meugateway.railway.app
```

#### 5.3 Controle On/Off da Portinha

```bash
# Script pra ligar/desligar o node
# Ligar:
openclaw node start thyryanpc

# Desligar:
openclaw node stop thyryanpc

# Status:
openclaw node status thyryanpc
```

Criar scripts no workspace:
- `scripts/node-up.bat` — conecta o PC ao gateway cloud
- `scripts/node-down.bat` — desconecta

---

### 🟢 Fase 6: Auto-Aprimoramento

O agente precisa conseguir melhorar o próprio deploy.

#### 6.1 Git-Based Self-Update

```json
{
  "cron": {
    "jobs": [
      {
        "id": "auto-update",
        "schedule": "0 4 * * 0",
        "action": "workspace",
        "task": "Verificar se há novos commits no fork. Se sim, fazer pull, rebuildar e restartar gateway via health check."
      }
    ]
  }
}
```

#### 6.2 Workspace Scripts de Auto-Melhoria

Criar pasta `scripts/` com:

- `update.sh` — `git pull && docker compose up -d --build`
- `health.sh` — health check + log
- `backup.sh` — backup do state + workspace pro GitHub

#### 6.3 Event Handlers

```json
{
  "events": {
    "handlers": {
      "system:restart": {
        "action": "exec",
        "command": "scripts/on-restart.sh"
      },
      "system:error": {
        "action": "notify",
        "channel": "discord",
        "message": "⚠️ Gateway crash detected. Reiniciando..."
      }
    }
  }
}
```

---

### 🟢 Fase 7: Resiliência & Restart

#### 7.1 Docker Restart Policy

No `docker-compose.yml` já tem `restart: unless-stopped`. Garantir que:
- Volume de dados é **persistente** (não morre no restart)
- Health check configurado
- `tini` como entrypoint (já configurado)

#### 7.2 Railway Auto-Restart

Railway já faz restart automático em crash. Só garantir:
- Volume persistente com state
- Config via variáveis de ambiente (não hardcoded)

#### 7.3 Logs

```bash
# Ver logs do gateway cloud
railway logs

# Ver logs localmente (se for VPS)
docker compose logs -f --tail=50
```

---

### 🟢 Fase 8: Segurança

| Item | Configuração |
|------|-------------|
| Gateway bind | `lan` + auth token |
| Discord token | Via secret, não hardcoded |
| Provider keys | Via Railway/Docker secrets |
| Node auth | Token próprio para cada node |
| HTTPS | Railway/Fly faz SSL automático |
| Firewall VPS | Só portas 80/443 + SSH |

---

## 🚀 Roadmap Execução

### Semana 1 — Fundação
- [x] Fork criado (`JBRYAN333/openclaw`)
- [ ] Add upstream remote
- [ ] GHCR build workflow configurado
- [ ] Deploy Railway inicial
- [ ] Gateway rodando na nuvem com Discord ativo

### Semana 2 — Node + Portinha
- [ ] Tailscale configurado PC+Cloud
- [ ] Node pairing ativo
- [ ] Script on/off da portinha
- [ ] Teste: agente cloud consegue executar comando no PC

### Semana 3 — Auto-Aprimoramento
- [ ] Cron jobs configurados
- [ ] Update automático funcional
- [ ] Event handlers ativos
- [ ] Backup automático

### Semana 4 — Polimento
- [ ] Monitoramento via Discord
- [ ] Logs centralizados
- [ ] Documentação do deploy
- [ ] Estratégia de rollback

---

## 📦 Estrutura de Arquivos do Fork

```
openclaw/
├── .github/workflows/
│   └── deploy.yml          ← Build + push GHCR
├── config/
│   ├── cloud.json          ← Config otimizada cloud
│   └── local.json          ← Config PC (referência)
├── scripts/
│   ├── node-up.bat         ← Liga portinha
│   ├── node-down.bat       ← Desliga portinha
│   ├── update.sh           ← Auto-update
│   └── backup.sh           ← Backup state
├── CLAWDEPLOY.md           ← Este plano
└── openclaw.json           ← Config atual (PC)
```

---

## 🔧 Comandos Rápidos

```bash
# Build local
docker build -t clawsec-cloud .

# Deploy Railway
railway up

# Conectar PC como node
openclaw node --name thyryanpc --join <gateway-url>

# Ver health
curl https://meugateway.railway.app/healthz

# Logs
railway logs
```

---

> **Próximo passo:** Qual plataforma preferida? Railway (mais fácil) ou VPS (mais controle)?
> A partir daí começamos a execução fase por fase.
