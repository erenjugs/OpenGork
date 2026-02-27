.PHONY: install build test clean dev setup-local help

help:
	@echo "OpenGork - Available commands:"
	@echo ""
	@echo "  make install     Install dependencies"
	@echo "  make build       Build TypeScript"
	@echo "  make test        Run tests"
	@echo "  make dev         Run in development mode"
	@echo "  make setup-local Setup local Ollama"
	@echo "  make health      Run health check"
	@echo "  make clean       Clean build artifacts"
	@echo ""

install:
	npm install

build:
	npm run build

test:
	npm test

dev:
	npm run dev

setup-local:
	./scripts/setup-ollama.sh

health:
	./scripts/health-check.sh

clean:
	rm -rf dist/ node_modules/
