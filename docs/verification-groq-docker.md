# Vérification Groq dans Docker — L'Oracle

## Variables d'environnement nécessaires
- GROQ_API_KEY : clé API Groq (dans .env, jamais dans docker-compose.yml)
- Les variables sont passées via ${GROQ_API_KEY} dans docker-compose.yml

## Tests effectués dans Docker
1. docker compose up --build
2. npx prisma db push
3. Connexion sur http://localhost:3000/login
4. Création d'une consultation avec symptômes
5. Lancement du diagnostic IA — résultat obtenu ✓

## Observations
- L'appel Groq fonctionne depuis le conteneur Docker
- Le disclaimer s'affiche correctement
- La clé API n'apparaît pas dans Git