# ---- Build + runtime image pro Google Cloud Run ----
FROM node:20-slim AS base
# OpenSSL je potřeba pro Prisma engine.
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Instalace závislostí (postinstall spustí prisma generate).
COPY package.json package-lock.json* ./
RUN npm ci

# Zdrojové kódy + build.
COPY . .
RUN npx prisma generate \
  && npm run build \
  && npm prune --omit=dev

ENV NODE_ENV=production
# Cloud Run předává PORT (default 8080); server.js ho respektuje.
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
