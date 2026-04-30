# Plan IA — L'Oracle

## Compte Groq
- Compte créé sur console.groq.com
- Clé API obtenue et stockée dans .env (GROQ_API_KEY)
- Clé testée avec curl — réponse reçue

## Plan d'intégration
1. Appel à l'API Groq avec les symptômes du patient
2. System prompt médical en français
3. Affichage du résultat avec niveau de gravité (vert/orange/rouge)
4. Disclaimer obligatoire affiché sous chaque résultat IA