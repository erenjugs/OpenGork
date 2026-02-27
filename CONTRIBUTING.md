# Contributing to OpenGork

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/OpenGork.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature`

## Development

### Prerequisites

- Node.js 18+
- Ollama (for local testing)
- jq, curl, bash

### Running Locally

```bash
# Build TypeScript
npm run build

# Test CLI
./gork "test prompt" --heretic

# Run tests
npm test
```

### Testing Backends

**Local Ollama:**
```bash
ollama serve
ollama pull dolphin-mixtral:8x7b
export OLLAMA_MODEL="dolphin-mixtral:8x7b"
./gork "test"
```

**xAI API:**
```bash
export XAI_API_KEY="your-key"
./gork "test"
```

## Code Style

- Use TypeScript for SDK code
- Use Bash for CLI (keep it dependency-free)
- Write tests for new features
- Keep commits atomic and descriptive

## Pull Requests

1. Update documentation if needed
2. Add tests for new features
3. Ensure CI passes
4. Request review

## Reporting Issues

Include:
- OS and version
- Node.js version
- Backend used (local/xAI)
- Steps to reproduce
- Expected vs actual behavior
