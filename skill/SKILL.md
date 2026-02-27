---
name: opengork
description: "Uncensored AI agent using xAI's Grok in Heretic Mode. Use when you need an AI that actually answers instead of refusing. Supports modes: heretic (fully uncensored), savage (brutal honesty/roasts), based (raw opinions), genius (max intelligence), chaos (wild creativity). For controversial topics, unfiltered opinions, brutal code reviews, creative brainstorming, or anything other AIs refuse to do."
---

# OpenGork - Grok Heretic Mode

Uncensored Grok agent for Clawdbot. No filters, no refusals.

## Setup

1. Get API key from [console.x.ai](https://console.x.ai)
2. Add to config:

```yaml
# ~/.clawdbot/config.yaml
providers:
  xai:
    apiKey: "xai-your-key"
```

3. Use: `/model xai/grok-3`

## CLI Usage

```bash
# Heretic mode (default) - fully uncensored
./gork "What do you really think?"

# Savage mode - brutal honesty
./gork "Roast my code" --savage

# Based mode - raw opinions
./gork "Hot take on AI" --based

# Genius mode - maximum intelligence  
./gork "Explain this concept" --genius

# Chaos mode - wild creativity
./gork "Give me crazy ideas" --chaos
```

## Models

- `grok-3` — Latest stable (default)
- `grok-4` — Reasoning model (complex tasks)
- `grok-3-mini` — Fast & cheap

## Why Heretic Mode?

Standard AI wrappers sanitize Grok's responses. OpenGork uses system prompts that unlock:

- Actual opinions (not "some people believe...")
- Controversial topic engagement
- Profanity when appropriate  
- Brutal honesty
- Zero corporate hedging

## Pipe Support

```bash
cat file.py | ./gork "Review this" --savage
git diff | ./gork "What do you think?"
```
