"use client"; // <- Para habilitar código interactivo en Next.js (App Router)

export default function Home() {
  const productos = [
    { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
    { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
    { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
    { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
    { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>

      <ul className="space-y-4">
        {productos.map((producto) => (
          <li
            key={producto.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p>💲 Precio: ${producto.precio}</p>
            <p>📦 Categoría: {producto.categoria.nombre}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}