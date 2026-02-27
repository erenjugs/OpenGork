#!/usr/bin/env bash
#
# Setup Ollama with recommended uncensored models
#

set -e

echo "OpenGork - Ollama Setup"
echo "======================="
echo ""

# Check if Ollama is installed
if ! command -v ollama &> /dev/null; then
    echo "Installing Ollama..."
    curl -fsSL https://ollama.com/install.sh | sh
else
    echo "Ollama already installed"
fi

# Start Ollama if not running
if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    echo "Starting Ollama..."
    ollama serve &
    sleep 3
fi

echo ""
echo "Available uncensored models:"
echo "1) dolphin-mixtral:8x7b  (26GB) - Best quality"
echo "2) dolphin-llama3:8b     (4.7GB) - Fast"
echo "3) mistral-openorca      (4GB) - Lightweight"
echo "4) wizardlm-uncensored   (7.4GB) - Good for coding"
echo ""

read -p "Choose model [1-4]: " choice

case $choice in
    1) MODEL="dolphin-mixtral:8x7b" ;;
    2) MODEL="dolphin-llama3:8b" ;;
    3) MODEL="mistral-openorca" ;;
    4) MODEL="wizardlm-uncensored:13b" ;;
    *) MODEL="dolphin-llama3:8b" ;;
esac

echo ""
echo "Pulling $MODEL..."
ollama pull $MODEL

echo ""
echo "Setup complete!"
echo ""
echo "Add to your shell config:"
echo "  export OLLAMA_MODEL=\"$MODEL\""
echo ""
echo "Then run:"
echo "  ./gork \"Your uncensored question\""
