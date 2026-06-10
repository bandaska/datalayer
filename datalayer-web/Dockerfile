# ---- Build + runtime image pro Google Cloud Run ----
FROM node:20-slim AS base
RUN apt-get update -y && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Instalace závislostí.
COPY package.json package-lock.json* ./
RUN npm ci

# Zdrojové kódy + build.
COPY . .
RUN npm run build && npm prune --omit=dev

ENV NODE_ENV=production
# Cloud Run předává PORT (default 8080); server.js ho respektuje.
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
