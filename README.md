
# exercice-git-equipe
Projet Sensante GLSIA-ESP1 2026
Bienvenue dans mon premier dépôt Git !

## Objectif
Apprendre Git pas à pas.

## Auteur
Babacar Seck-L3 GLSI


## Authentification

NextAuth.js est configuré avec le provider Credentials (email + mot de passe).

### Variables d'environnement nécessaires

Copie `.env.example` vers `.env` et remplis les valeurs :

\`\`\`
NEXTAUTH_SECRET=générer avec: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000
\`\`\`

### Inscription

Va sur http://localhost:3000/register pour la création de compte.

## Auteur
Fatou Kine Camara
## 🐳 Lancer avec Docker

### Prérequis
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et lancé

### Configuration
Crée un fichier `.env` à la racine du projet :
```env
NEXTAUTH_SECRET=une_valeur_secrete
GROQ_API_KEY=ta_cle_groq
```

### Démarrage
```bash
# Construire et lancer tous les services (app + base de données)
docker compose up --build
```

Puis, **la première fois uniquement**, crée les tables :
```bash
docker compose exec app npx prisma db push
```

Ouvre http://localhost:3000 — c'est prêt ! 🎉

### Commandes utiles
| Commande | Description |
|---|---|
| `docker compose up` | Relancer l'application |
| `docker compose down` | Arrêter (données conservées) |
| `docker compose logs app` | Voir les logs de l'app |
| `docker compose exec app sh` | Terminal dans le conteneur |

> ⚠️ `docker compose down -v` supprime aussi les données. À éviter.
