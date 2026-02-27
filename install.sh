#!/usr/bin/env bash
#
# OpenGork Installer
#

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}"
echo "╔═══════════════════════════════════════╗"
echo "║       OpenGork Installer              ║"
echo "╚═══════════════════════════════════════╝"
echo -e "${NC}"

# Check dependencies
echo -e "${YELLOW}Checking dependencies...${NC}"

check_dep() {
    if command -v "$1" &> /dev/null; then
        echo -e "  ${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "  ${YELLOW}✗${NC} $1 (missing)"
        return 1
    fi
}

MISSING=0
check_dep "curl" || MISSING=1
check_dep "jq" || MISSING=1
check_dep "bash" || MISSING=1

if [ $MISSING -eq 1 ]; then
    echo ""
    echo -e "${YELLOW}Install missing dependencies:${NC}"
    echo "  Ubuntu/Debian: sudo apt install curl jq"
    echo "  macOS: brew install curl jq"
    echo "  Arch: sudo pacman -S curl jq"
fi

# Make executable
chmod +x gork

# Offer to install to PATH
echo ""
echo -e "${YELLOW}Install to /usr/local/bin? (requires sudo)${NC}"
read -p "[y/N] " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    sudo cp gork /usr/local/bin/gork
    echo -e "${GREEN}✓ Installed to /usr/local/bin/gork${NC}"
    echo "  Run from anywhere: gork \"your prompt\""
else
    echo -e "${GREEN}✓ Run locally: ./gork \"your prompt\"${NC}"
fi

# Setup prompt
echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}Choose your backend:${NC}"
echo ""
echo "  Option 1 - Local Ollama (100% Uncensored):"
echo "    curl -fsSL https://ollama.com/install.sh | sh"
echo "    ollama pull dolphin-mixtral:8x7b"
echo "    export OLLAMA_MODEL=\"dolphin-mixtral:8x7b\""
echo ""
echo "  Option 2 - xAI API (Partial Censorship):"
echo "    Get key: https://console.x.ai"
echo "    export XAI_API_KEY=\"xai-your-key\""
echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}Installation complete!${NC}"
