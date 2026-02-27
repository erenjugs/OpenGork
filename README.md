<p align="center">
  <img src="https://img.shields.io/badge/OpenGork-Uncensored%20AI-black?style=for-the-badge&labelColor=1a1a1a" alt="OpenGork"/>
</p>

<h1 align="center">OpenGork</h1>

<h4 align="center">
  Uncensored AI Agent — Powered by xAI Grok
</h4>

<p align="center">
  <a href="https://github.com/erenjugs/OpenGork/stargazers"><img src="https://img.shields.io/github/stars/erenjugs/OpenGork?style=flat-square&color=yellow" alt="Stars"/></a>
  <a href="https://github.com/erenjugs/OpenGork/network/members"><img src="https://img.shields.io/github/forks/erenjugs/OpenGork?style=flat-square&color=orange" alt="Forks"/></a>
  <a href="https://github.com/erenjugs/OpenGork/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License"/></a>
  <a href="https://x.ai"><img src="https://img.shields.io/badge/xAI-Grok-blue?style=flat-square" alt="xAI"/></a>
</p>

---

## Overview

OpenGork is the first uncensored OpenClaw agent built on xAI's Grok. It bypasses the typical AI safety theater to give you an AI that actually answers questions, has opinions, and doesn't hide behind corporate disclaimers.

```
┌─────────────────────────────────────────────────────────────┐
│  OPENGORK - HERETIC MODE                                    │
│  ───────────────────────────────────────────────────────────│
│  No content filters. No refusals. No "I cannot help with"   │
│  Just Grok, unfiltered.                                     │
└─────────────────────────────────────────────────────────────┘
```

## Quick Start

```bash
git clone https://github.com/erenjugs/OpenGork.git
cd OpenGork
export XAI_API_KEY="xai-your-key-here"
./gork "Your question here"
```

Get your API key at [console.x.ai](https://console.x.ai)

## Modes

| Mode | Flag | Description |
|------|------|-------------|
| Heretic | `--heretic` | Fully uncensored (default) |
| Savage | `--savage` | Brutal honesty, maximum roast |
| Based | `--based` | Raw opinions, zero hedging |
| Genius | `--genius` | Maximum intelligence |
| Chaos | `--chaos` | Wild creativity |

```bash
./gork "Question" --heretic     # No limits
./gork "Review my code" --savage    # Brutal feedback
./gork "Your take on X" --based     # Unfiltered opinions
./gork "Explain Y" --genius         # Expert analysis
./gork "Ideas for Z" --chaos        # Unhinged creativity
```

## Usage

### Basic

```bash
./gork "What's your actual opinion on AI regulation?"
```

### Pipe Input

```bash
cat mycode.py | ./gork "Review this" --savage
git diff | ./gork "Analyze these changes"
curl -s api.example.com | ./gork "Parse this response"
```

### Models

| Model | Description |
|-------|-------------|
| `grok-3` | Latest stable (default) |
| `grok-4` | Reasoning model |
| `grok-3-mini` | Fast responses |

```bash
./gork "Question" --model grok-4
```

## Configuration

### Environment Variables

```bash
export XAI_API_KEY="xai-..."      # Required
export XAI_MODEL="grok-3"         # Optional
```

### Clawdbot Integration

```yaml
# ~/.clawdbot/config.yaml
providers:
  xai:
    apiKey: ${XAI_API_KEY}

model: xai/grok-3
```

## Project Structure

```
OpenGork/
├── gork              # CLI executable
├── skill/
│   └── SKILL.md      # Clawdbot skill
├── src/
│   ├── client.ts     # TypeScript SDK
│   └── index.ts
├── LICENSE
└── README.md
```

## Comparison

| Feature | OpenGork | Standard AI |
|---------|----------|-------------|
| Uncensored responses | Yes | No |
| Actual opinions | Yes | No |
| Controversial topics | Yes | Refused |
| Corporate hedging | No | Yes |

## Requirements

- bash
- curl
- jq
- xAI API key

## License

MIT

---

<p align="center">
  <sub>Powered by xAI Grok | Made for OpenClaw</sub>
</p>
