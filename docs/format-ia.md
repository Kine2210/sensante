# Format des données pour l'IA — L'Oracle

## Format d'entrée (symptômes envoyés à Groq)
Les symptômes sont stockés en JSON dans la table Consultation :
["Fièvre", "Toux", "Fatigue"]

## System prompt prévu
"Tu es un assistant médical pour agents de santé au Sénégal.
Analyse les symptômes suivants et propose un pré-diagnostic
en français simple avec un niveau de gravité (faible/moyen/urgent).
IMPORTANT: Toujours inclure le disclaimer:
Ce n'est pas un diagnostic médical."

## Format de sortie attendu
- diagnostic: string (description du pré-diagnostic)
- niveau: "faible" | "moyen" | "urgent"
- confiance: number (0-100)