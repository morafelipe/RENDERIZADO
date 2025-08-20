export default function Home() {
  const usuarios = [
    { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
    { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
    { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
    { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
    { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Lista de Usuarios</h1>

      <table className="table-auto w-full border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 border border-gray-700">ID</th>
            <th className="px-4 py-2 border border-gray-700">Nombre</th>
            <th className="px-4 py-2 border border-gray-700">Calle</th>
            <th className="px-4 py-2 border border-gray-700">Ciudad</th>
            <th className="px-4 py-2 border border-gray-700">País</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} className="hover:bg-gray-700">
              <td className="px-4 py-2 border border-gray-700">{usuario.id}</td>
              <td className="px-4 py-2 border border-gray-700">{usuario.nombre}</td>
              <td className="px-4 py-2 border border-gray-700">{usuario.direccion.calle}</td>
              <td className="px-4 py-2 border border-gray-700">{usuario.direccion.ciudad}</td>
              <td className="px-4 py-2 border border-gray-700">{usuario.direccion.pais}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}


