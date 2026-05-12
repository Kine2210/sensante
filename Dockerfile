# Étape de build
FROM node:18

# Installer OpenSSL et libssl-dev
RUN apt-get update && apt-get install -y openssl libssl-dev

# Créer le dossier de l’app
WORKDIR /app

# Copier les fichiers
COPY package*.json ./
RUN npm install

COPY . .

# Compiler Next.js
RUN npm run build

# Exposer le port
EXPOSE 3000

CMD ["npm", "start"]
