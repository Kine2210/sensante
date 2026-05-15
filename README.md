# 🏥 SénSanté — v1.0

> Assistant de santé communautaire avec Intelligence Artificielle  
> Développé dans le cadre du cours **Ingénierie des Processus de Développement Logiciel (IPDL1)**  
> Licence 3 GLSIA — École Supérieure Polytechnique / UCAD — 2025–2026

---

## 📌 Description du projet

SénSanté est une application web full-stack de santé communautaire permettant :
- L'**inscription et la connexion** sécurisée des agents de santé
- La **gestion des patients** avec leurs informations et leur région au Sénégal
- La **saisie de consultations** avec sélection de symptômes
- Le **diagnostic automatique par IA** (Llama 3 via Groq API)
- La **visualisation des données** via un tableau de bord trés interactif.

---

## 🛠️ Stack technique

| Technologie | Rôle |
|---|---|
| **Next.js 14** | Framework React — routing, SSR |
| **Tailwind CSS** | Stylisation de l'interface |
| **Prisma + PostgreSQL** | Base de données et ORM |
| **NextAuth.js** | Authentification (sessions, rôles) |
| **Groq API (Llama 3)** | Diagnostic IA automatique |
| **Recharts** | Graphiques du dashboard |
| **Docker + Compose** | Conteneurisation et livraison |

---

## 👩‍💻 Mon rôle — Le Pilote 🛩️

**Seynabou Dia** — L3 GLSIA, ESP/UCAD

Dans ce projet collaboratif, j'ai occupé le rôle de **Le Pilote** 🛩️, responsable de la visualisation des données et de l'expérience utilisateur globale. Mon travail consistait à transformer les données brutes de l'application en informations visuelles claires et utiles pour les agents de santé.

> *"Le Pilote voit tout d'en haut — il donne du sens aux données."*

### 🎯 Fonctionnalités développées

#### 📊 Page Dashboard (`/dashboard`)
La page centrale de l'application — celle que l'agent de santé voit en premier après connexion.

- **4 cartes KPI** affichant en temps réel :
  - 👥 Nombre de patients enregistrés
  - 📋 Total des consultations
  - 🤖 Diagnostics IA terminés
  - 🚨 Alertes urgentes
- **Graphique en barres** — évolution des consultations par mois (`Recharts BarChart`)
- **Camembert** — répartition géographique des patients par région du Sénégal (`Recharts PieChart`)
- **Liste des derniers diagnostics IA** avec badges niveau d'urgence et taux de confiance

#### 👤 Page Profil (`/profil`)
- Affichage des informations personnelles de l'agent connecté
- Interface claire et accessible pour chaque utilisateur

### 🧪 Tests de validation effectués
En tant que Pilote, j'ai assuré les tests suivants :
- ✅ Vérification que les 4 KPI affichent des chiffres réels (non nuls)
- ✅ Contrôle de la cohérence des graphiques avec les données de la BDD
- ✅ Test du responsive design (mobile et desktop)
- ✅ Vérification que la liste des diagnostics IA se met à jour après chaque diagnostic
- ✅ Participation aux tests collectifs Docker sur plusieurs machines

---

## 🚀 Lancer l'application

### Prérequis
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et lancé
- Un fichier `.env` configuré à la racine

### ⚙️ Configuration `.env`
```env