---
name: opengork
description: "Uncensored AI agent with dual backend support. Use Local Heretic mode (Ollama) for 100% uncensored responses, or xAI API for cloud-based inference with partial filtering. Modes: heretic (uncensored), savage (brutal honesty), based (raw opinions), genius (expert analysis), chaos (wild creativity)."
---

# OpenGork Skill

Uncensored AI agent for Clawdbot/OpenClaw.

## Backends

### Local Heretic (100% Uncensored)

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull uncensored model
ollama pull dolphin-mixtral:8x7b

# Configure
export OLLAMA_MODEL="dolphin-mixtral:8x7b"
```

### xAI API (Partial Filtering)

```bash
# Get key from console.x.ai
export XAI_API_KEY="xai-..."
```

**Note:** xAI API is NOT fully uncensored.

## Usage

```bash
./gork "prompt" --heretic    # Uncensored (default)
./gork "prompt" --savage     # Brutal honesty
./gork "prompt" --based      # Raw opinions
./gork "prompt" --genius     # Expert mode
./gork "prompt" --chaos      # Creative mode
```

## Clawdbot Config

```yaml
providers:
  xai:
    apiKey: ${XAI_API_KEY}

model: xai/grok-3
```

## Recommended Models

| Model | Backend | Censorship |
|-------|---------|------------|
| dolphin-mixtral:8x7b | Ollama | None |
| dolphin-llama3:8b | Ollama | None |
| grok-3 | xAI API | Partial |
