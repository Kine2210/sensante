## Plan Dashboard — SénSanté
**Auteur :** Le Pilote  
**Lab :** v0.2 — Patients CRUD  
**Cible :** v0.6 — Dashboard  
**Date :** 2025–2026

---

## 1. Objectif du Dashboard

Le dashboard est la **vue centrale** de SénSanté. Il permet au personnel médical
d'avoir une vision globale et instantanée de l'activité de la clinique :
patients enregistrés, consultations récentes, diagnostics IA, et tendances
géographiques.

---

## 2. Métriques à afficher 

### 2.1 Métriques globales (cartes KPI en haut de page)

| Métrique | Description | Source de données |
|---|---|---|
| **Total patients** | Nombre total de patients enregistrés | `prisma.patient.count()` |
| **Consultations ce mois** | Nombre de consultations du mois en cours | `prisma.consultation.count()` avec filtre date |
| **Diagnostics IA réalisés** | Nombre d'analyses IA effectuées | `prisma.diagnostic.count()` |
| **Nouveaux patients (7 jours)** | Patients créés dans la dernière semaine | `prisma.patient.count()` avec `createdAt >= J-7` |

### 2.2 Répartition des patients

| Métrique | Type de graphique | Description |
|---|---|---|
| **Par région** | Graphique en barres horizontales | Nombre de patients par région du Sénégal |
| **Par sexe** | Graphique en camembert (pie chart) | Ratio Hommes / Femmes |
| **Par tranche d'âge** | Histogramme | 0–17, 18–35, 36–55, 56–70, 70+ |

### 2.3 Activité temporelle

| Métrique | Type de graphique | Description |
|---|---|---|
| **Inscriptions par mois** | Courbe (line chart) | Évolution des nouveaux patients sur 12 mois |
| **Consultations par semaine** | Barres (bar chart) | Activité hebdomadaire des 8 dernières semaines |

### 2.4 Tableau des dernières activités

- Les **5 derniers patients** enregistrés (nom, région, date)
- Les **5 dernières consultations** (patient, médecin, date)

---

## 3. Structure de la page Dashboard