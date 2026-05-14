"use client";

import { useEffect, useState } from "react";
import PatientForm from "@/components/PatientForm";

interface Patient {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  sexe: string;
  telephone: string | null;
  adresse: string | null;
  region: string;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [recherche, setRecherche] = useState("");

  async function chargerPatients() {
    const res = await fetch("/api/patients");
    const data = await res.json();
    setPatients(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => {
    chargerPatients();
  }, []);

  function calculerAge(dateNaissance: string): number {
    const naissance = new Date(dateNaissance);
    const today = new Date();
    let age = today.getFullYear() - naissance.getFullYear();
    const m = today.getMonth() - naissance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < naissance.getDate())) {
      age--;
    }
    return age;
  }

  const patientsFiltres = patients.filter((p) => {
    const q = recherche.toLowerCase();
    return (
      p.nom.toLowerCase().includes(q) ||
      p.prenom.toLowerCase().includes(q) ||
      p.region.toLowerCase().includes(q)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Patients</h1>
      <PatientForm onSuccess={chargerPatients} />

      {/* Barre de recherche */}
      <div className="mt-8 mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou région..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Liste des patients ({patientsFiltres.length})
      </h2>

      {loading ? (
        <p className="text-gray-500">Chargement...</p>
      ) : patientsFiltres.length === 0 ? (
        <p className="text-gray-500">Aucun patient trouvé.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patientsFiltres.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-teal-700">{p.prenom} {p.nom}</h3>
              <p className="text-gray-600">Région : {p.region}</p>
              <p className="text-gray-600">Âge : {calculerAge(p.dateNaissance)} ans</p>
              <p className="text-gray-600">Sexe : {p.sexe === "F" ? "Femme" : "Homme"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}