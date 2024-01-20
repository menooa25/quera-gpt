FROM node:lts-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN ["npm", "run", "build"]