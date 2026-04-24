import ConsultationCard from "../../components/ConsultationCard";

export default function ConsultationsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        Consultations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ConsultationCard
          patient="Aminata Sow"
          date="18 mars 2025"
          symptomes="Fièvre, toux, fatigue"
          statut="termine"
        />
        <ConsultationCard
          patient="Ibrahima Ba"
          date="20 mars 2025"
          symptomes="Maux de tête, vertiges"
          statut="en_attente"
        />
      </div>
    </main>
  );
}