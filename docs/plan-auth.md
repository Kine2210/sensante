# Plan d'authentification — SénSanté (NextAuth.js v5)

## 1. Introduction — Pourquoi l'authentification ?
SénSanté gère des données de santé sensibles. On doit savoir qui utilise
l'application et ce qu'il a le droit de faire.

## 2. Flux d'authentification prévu
1. Formulaire de connexion (email + mot de passe)
2. NextAuth vérifie les credentials en comparant avec la BDD
3. Session créée → Cookie JWT dans le navigateur
4. Accès aux pages protégées (Patients, Consultations)
5. Rôle vérifié → AGENT / MEDECIN / ADMIN

## 3. Installation
npm install next-auth@beta

## 4. Fichiers à créer

### auth.ts (racine)
- Providers : Credentials (email + mot de passe)
- Session strategy : JWT
- Page de connexion : /login
- Callbacks : jwt et session pour transmettre le rôle

### app/api/auth/[...nextauth]/route.ts
- Exporter GET et POST depuis @/auth

### middleware.ts (racine)
- Protéger /patients, /consultations, /dashboard
- Redirection vers /login si pas de session

## 5. Pages à créer
- app/login/page.tsx — Formulaire de connexion
- app/register/page.tsx — Création de compte

## 6. Variables d'environnement
AUTH_SECRET=a_generer
AUTH_URL=http://localhost:3000

## 7. Rôles utilisateurs
- AGENT : lecture Patients et Consultations
- MEDECIN : lecture + écriture Patients et Consultations
- ADMIN : tout + gestion des utilisateurs

## 8. Ressources
- https://authjs.dev/reference/nextjs
- https://authjs.dev/getting-started/migrating-to-v5