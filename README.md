<div align="center">

![OpenGork](https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,100:16213e&height=200&section=header&text=OpenGork&fontSize=80&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Uncensored%20AI%20Agent&descSize=20&descAlignY=55)

[![Stars](https://img.shields.io/github/stars/erenjugs/OpenGork?style=for-the-badge&logo=github&logoColor=white&color=yellow)](https://github.com/erenjugs/OpenGork/stargazers)
[![Forks](https://img.shields.io/github/forks/erenjugs/OpenGork?style=for-the-badge&logo=github&logoColor=white&color=orange)](https://github.com/erenjugs/OpenGork/network/members)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![xAI](https://img.shields.io/badge/Powered%20by-xAI%20Grok-black?style=for-the-badge&logo=x&logoColor=white)](https://x.ai)

<br>

**The First Uncensored OpenClaw Agent — Powered by xAI Grok**

[Getting Started](#quick-start) •
[Modes](#modes) •
[Usage](#usage) •
[Configuration](#configuration) •
[Integration](#clawdbot-integration)

</div>

---

<br>

<div align="center">

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║     ██████╗ ██████╗ ███████╗███╗   ██╗ ██████╗  ██████╗ ██████╗ ██╗  ██╗     ║
║    ██╔═══██╗██╔══██╗██╔════╝████╗  ██║██╔════╝ ██╔═══██╗██╔══██╗██║ ██╔╝     ║
║    ██║   ██║██████╔╝█████╗  ██╔██╗ ██║██║  ███╗██║   ██║██████╔╝█████╔╝      ║
║    ██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║██║   ██║██║   ██║██╔══██╗██╔═██╗      ║
║    ╚██████╔╝██║     ███████╗██║ ╚████║╚██████╔╝╚██████╔╝██║  ██║██║  ██╗     ║
║     ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝     ║
║                                                                               ║
║                    [ HERETIC MODE — NO FILTERS, NO LIMITS ]                   ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

</div>

<br>

## Overview

OpenGork is an uncensored AI agent built on **xAI's Grok**. Unlike sanitized corporate AI assistants, OpenGork gives you direct answers, real opinions, and engages with any topic without hiding behind disclaimers.

<br>

<div align="center">
<table>
<tr>
<td align="center"><strong>Standard AI Response</strong></td>
<td align="center"><strong>OpenGork Response</strong></td>
</tr>
<tr>
<td>

```
"I don't have personal opinions."
"As an AI, I cannot..."
"Some people believe..."
"I'm not able to help with..."
```

</td>
<td>

```
[Gives direct answer]
[Shares actual opinion]
[No corporate hedging]
[Engages with topic]
```

</td>
</tr>
</table>
</div>

<br>

---

<br>

## Quick Start

```bash
# Clone the repository
git clone https://github.com/erenjugs/OpenGork.git
cd OpenGork

# Set your API key
export XAI_API_KEY="xai-your-key-here"

# Run
./gork "What do you actually think about AI?"
```

<br>

<div align="center">

| Requirement | Link |
|:-----------:|:----:|
| **xAI API Key** | [console.x.ai](https://console.x.ai) |

</div>

<br>

---

<br>

## Modes

<div align="center">

```
┌────────────┬────────────┬────────────┬────────────┬────────────┐
│  HERETIC   │   SAVAGE   │   BASED    │   GENIUS   │   CHAOS    │
├────────────┼────────────┼────────────┼────────────┼────────────┤
│  Uncensored│   Brutal   │    Raw     │   Expert   │    Wild    │
│   Default  │   Roasts   │  Opinions  │  Analysis  │   Ideas    │
└────────────┴────────────┴────────────┴────────────┴────────────┘
```

</div>

<br>

| Mode | Flag | Description |
|:-----|:-----|:------------|
| **Heretic** | `--heretic` | Fully uncensored, no content restrictions (default) |
| **Savage** | `--savage` | Brutal honesty, maximum roast energy |
| **Based** | `--based` | Raw opinions with zero corporate hedging |
| **Genius** | `--genius` | Maximum intelligence, expert-level analysis |
| **Chaos** | `--chaos` | Wild creativity, unconventional thinking |

<br>

```bash
./gork "Your question" --heretic     # Default - no limits
./gork "Review my code" --savage     # Brutal feedback
./gork "Hot take on X" --based       # Unfiltered opinions
./gork "Explain quantum computing" --genius
./gork "Startup ideas" --chaos       # Unhinged creativity
```

<br>

---

<br>

## Usage

### Direct Input

```bash
./gork "What's your actual opinion on social media?"
./gork "Explain machine learning" --genius
./gork "Roast this business idea: another todo app" --savage
```

<br>

### Pipe Input

```bash
# Code review
cat mycode.py | ./gork "Review this code" --savage

# Git changes
git diff | ./gork "Analyze these changes"

# API response
curl -s api.example.com | ./gork "Parse this JSON"

# File analysis
cat document.txt | ./gork "Summarize this"
```

<br>

---

<br>

## Models

<div align="center">

| Model | Speed | Use Case |
|:------|:-----:|:---------|
| `grok-3` | Fast | General use (default) |
| `grok-4` | Standard | Complex reasoning tasks |
| `grok-3-mini` | Fastest | Quick responses, lower cost |

</div>

<br>

```bash
./gork "Complex question" --model grok-4
./gork "Quick question" --model grok-3-mini
```

<br>

---

<br>

## Configuration

### Environment Variables

```bash
export XAI_API_KEY="xai-..."          # Required
export XAI_MODEL="grok-3"             # Optional (default: grok-3)
export XAI_BASE_URL="https://api.x.ai/v1"  # Optional
```

<br>

---

<br>

## Clawdbot Integration

Add to your Clawdbot configuration:

```yaml
# ~/.clawdbot/config.yaml
providers:
  xai:
    apiKey: ${XAI_API_KEY}

model: xai/grok-3
```

Or install as a skill:

```bash
clawdhub install erenjugs/OpenGork
```

<br>

---

<br>

## Project Structure

```
OpenGork/
│
├── gork                 # Main CLI executable
├── README.md
├── LICENSE
│
├── skill/
│   └── SKILL.md         # Clawdbot skill definition
│
├── src/
│   ├── client.ts        # Grok API client
│   └── index.ts         # TypeScript entry point
│
├── package.json
├── tsconfig.json
├── .env.example
└── .gitignore
```

<br>

---

<br>

## Requirements

```
bash    curl    jq    xAI API key
```

<br>

---

<br>

## License

Released under the **MIT License**. See [LICENSE](LICENSE) for details.

<br>

---

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,100:16213e&height=100&section=footer)

**Powered by xAI Grok | Built for OpenClaw**

</div>
