FROM node:20-slim

RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npx prisma generate

ARG GROQ_API_KEY
ENV GROQ_API_KEY=$GROQ_API_KEY

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]