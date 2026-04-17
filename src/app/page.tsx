import PatientCard from "@/components/PatientCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        SénSanté
      </h1>

      <h2 className="text-xl font-semibold mb-4">
        Membres du groupe
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <PatientCard
          nom="Fatou Kine Camara"
          fonction="Architecte"
          groupe={1}
        />

        <PatientCard
          nom="Hamadouu Abdoulaye"
          fonction="Gardien"
          groupe={1}
        />

        <PatientCard
          nom="Lissa Boubacar Niang"
          fonction="Médecin"
          groupe={1}
        />

      </div>

      <p className="text-xs text-gray-400 italic mt-8">
        Ceci n'est pas un outil médical.
      </p>

    </main>
  );
}