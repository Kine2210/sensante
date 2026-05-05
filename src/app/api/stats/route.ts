// KPI : count() = SELECT COUNT(*)
const totalPatients = await prisma.patient.count();
const totalConsultations = await prisma.consultation.count();

// Filtre : count({where}) = COUNT WHERE statut = 'termine'
const consultationsTerminees = await prisma.consultation.count({
  where: { statut: "termine" },
});

// Alertes : consultations terminées avec IA + confiance >= 60
const alertesUrgentes = await prisma.consultation.count({
  where: {
    statut: "termine",
    confiance: { gte: 60 },
    diagnosticIa: { not: null },
  },
});

// GROUP BY région
const parRegion = await prisma.patient.groupBy({
  by: ["region"],
  _count: { id: true },
  orderBy: { _count: { id: "desc" } },
});