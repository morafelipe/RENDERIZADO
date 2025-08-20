export default function Home() {
  const cursos = [
    { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
    { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
    { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
    { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
    { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Lista de Cursos</h1>

      <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left border-b border-gray-700">Curso</th>
            <th className="px-4 py-2 text-left border-b border-gray-700">Módulos</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id} className="hover:bg-gray-800">
              <td className="px-4 py-2 font-semibold border-b border-gray-700">
                {curso.nombre}
              </td>
              <td className="px-4 py-2 border-b border-gray-700">
                <ul className="list-disc list-inside text-gray-300">
                  {curso.modulos.map((modulo, index) => (
                    <li key={index}>{modulo.nombre}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
