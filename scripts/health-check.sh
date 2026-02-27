#!/usr/bin/env bash
#
# Check OpenGork backend status
#

echo "OpenGork Health Check"
echo "===================="
echo ""

# Check Ollama
echo -n "Ollama: "
if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    MODELS=$(curl -s http://localhost:11434/api/tags | jq -r '.models[].name' 2>/dev/null | tr '\n' ', ' | sed 's/,$//')
    echo "ONLINE"
    echo "  Models: ${MODELS:-none}"
else
    echo "OFFLINE"
fi

echo ""

# Check xAI
echo -n "xAI API: "
if [ -n "$XAI_API_KEY" ]; then
    if curl -s -H "Authorization: Bearer $XAI_API_KEY" https://api.x.ai/v1/models > /dev/null 2>&1; then
        echo "CONFIGURED & REACHABLE"
    else
        echo "KEY SET BUT UNREACHABLE"
    fi
else
    echo "NOT CONFIGURED (no XAI_API_KEY)"
fi

echo ""

# Check dependencies
echo "Dependencies:"
for cmd in bash curl jq; do
    if command -v $cmd &> /dev/null; then
        echo "  $cmd: OK"
    else
        echo "  $cmd: MISSING"
    fi
done

echo ""
echo "Environment:"
echo "  OLLAMA_MODEL: ${OLLAMA_MODEL:-not set}"
echo "  XAI_MODEL: ${XAI_MODEL:-not set}"
echo "  XAI_API_KEY: ${XAI_API_KEY:+set (hidden)}"
