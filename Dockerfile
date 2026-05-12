FROM --platform=linux/amd64 node:20

RUN apt-get update && apt-get install -y openssl libssl-dev

WORKDIR /app

COPY package*.json ./

RUN npm ci --prefer-offline

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
