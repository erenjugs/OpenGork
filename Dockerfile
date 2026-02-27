FROM node:20-alpine

WORKDIR /app

# Install dependencies
RUN apk add --no-cache bash curl jq

# Copy files
COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src/
COPY gork ./

# Install and build
RUN npm install && npm run build

# Make CLI executable
RUN chmod +x gork

ENTRYPOINT ["./gork"]
CMD ["--help"]
