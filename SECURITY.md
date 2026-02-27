# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please:

1. **Do not** open a public issue
2. Email the maintainers directly
3. Include detailed steps to reproduce
4. Allow reasonable time for a fix before disclosure

## Security Considerations

### API Keys

- Never commit API keys to version control
- Use environment variables for sensitive data
- The `.env` file is gitignored by default

### Local Models

- Local Ollama models run entirely on your machine
- No data is sent to external servers
- Full privacy for sensitive queries

### xAI API

- Requests are sent to xAI servers
- Subject to xAI's privacy policy
- API keys are transmitted over HTTPS
