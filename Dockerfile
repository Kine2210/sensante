# 1. Image de base
FROM node:20-alpine

# 2. Répertoire de travail
WORKDIR /app

# 3. Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# 4. Installer les dépendances
RUN npm ci

# 5. Copier le code source
COPY . .

# 6. Générer le client Prisma
RUN npx prisma generate

# 7. Compiler Next.js
RUN npm run build

# 8. Port
EXPOSE 3000

# 9. Démarrage
CMD ["npm", "start"]