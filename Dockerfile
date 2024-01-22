FROM node:lts-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY package*.json ./

COPY prisma ./

RUN npm install --production

RUN npm install -D @swc/cli @swc/core

COPY . .

RUN npx prisma generate

RUN npm run build
