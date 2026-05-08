 Métriques Dashboard — SénSanté v0.6

## Métriques patients
- Nombre total de patients enregistrés
- Répartition par région (carte ou graphique à barres)
- Répartition par sexe (M / F)
- Tranche d'âge (0-15, 16-30, 31-60, 60+)

## Métriques consultations
- Nombre total de consultations
- Consultations par jour / semaine / mois
- Statut des consultations (en_cours / terminé)

## Métriques IA
- Nombre de diagnostics IA générés
- Taux d'urgence : % faible / % moyen / % urgent
- Niveau de confiance moyen (ex: 74%)
- Top 5 des diagnostics les plus fréquents

## Sources de données (Prisma)
- Table `Consultation` → champs `diagnosticIa`, `confiance`, `statut`, `urgence`
- Table `Patient` → champs `region`, `sexe`, `dateNaissance`

## Composants à créer (v0.6)
- `StatCard` — carte avec un chiffre clé
- `UrgenceChart` — camembert faible/moyen/urgent
- `RegionMap` — répartition géographique
- `ConfianceMoyenne` — jauge ou barre de progression