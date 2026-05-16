export default function ProfilPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mon profil</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            FK
          </div>
          <div>
            <p className="font-bold text-gray-800 text-lg">Fatou Kiné Camara</p>
            <p className="text-teal-600 text-sm">L'Architecte & L'Oracle</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-teal-600">👤</span>
            <div>
              <p className="text-xs text-gray-500">Rôle</p>
              <p className="text-gray-800 font-medium">Agent de santé</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-teal-600">📍</span>
            <div>
              <p className="text-xs text-gray-500">Région</p>
              <p className="text-gray-800 font-medium">Dakar</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-teal-600">🎓</span>
            <div>
              <p className="text-xs text-gray-500">Formation</p>
              <p className="text-gray-800 font-medium">L3 GLSI — ESP/UCAD 2025–2026</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 italic mt-4 text-center">
          SénSanté n'est pas un outil médical. Consultez un professionnel.
        </p>
      </div>
    </div>
  );
}