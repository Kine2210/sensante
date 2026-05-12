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