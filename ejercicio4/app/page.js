import React from "react";

const blogs = [
  {
    id: 1,
    titulo: "Aprendiendo React",
    autor: { nombre: "Ana", pais: "Colombia" },
    categorias: ["JavaScript", "Frontend"],
    comentarios: [
      {
        usuario: "Luis",
        texto: "Muy útil",
        respuestas: [
          {
            usuario: "Marta",
            texto: "Totalmente de acuerdo",
            reacciones: [
              { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } },
              { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "Next.js SSR",
    autor: { nombre: "Luis", pais: "México" },
    categorias: ["JavaScript", "SSR"],
    comentarios: [
      {
        usuario: "Marta",
        texto: "Interesante",
        respuestas: [
          {
            usuario: "Ana",
            texto: "Lo probaré",
            reacciones: [
              { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    titulo: "Node.js API",
    autor: { nombre: "John", pais: "USA" },
    categorias: ["Backend", "API"],
    comentarios: [
      {
        usuario: "Pedro",
        texto: "Me sirvió mucho",
        respuestas: [
          {
            usuario: "Luis",
            texto: "Gracias por compartir",
            reacciones: [
              { tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    titulo: "Django ORM",
    autor: { nombre: "Marta", pais: "España" },
    categorias: ["Backend", "Python"],
    comentarios: [
      {
        usuario: "Ana",
        texto: "Claro y conciso",
        respuestas: [
          {
            usuario: "John",
            texto: "Lo usaré en mi proyecto",
            reacciones: [
              { tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    titulo: "Flutter Widgets",
    autor: { nombre: "Pedro", pais: "Portugal" },
    categorias: ["Mobile", "UI"],
    comentarios: [
      {
        usuario: "Luis",
        texto: "Genial explicación",
        respuestas: [
          {
            usuario: "Marta",
            texto: "Muy claro todo",
            reacciones: [
              { tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } }
            ]
          }
        ]
      }
    ]
  }
];

export default function BlogList() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Lista de Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-6 p-4 bg-gray-800 rounded-xl shadow">
          <h2 className="text-xl font-semibold">{blog.titulo}</h2>
          <p className="text-gray-400">
            Autor: {blog.autor.nombre} ({blog.autor.pais})
          </p>
          <p className="text-sm mt-1">
            Categorías: {blog.categorias.join(", ")}
          </p>

          <div className="mt-3">
            <h3 className="font-medium">Comentarios:</h3>
            {blog.comentarios.map((comentario, idx) => (
              <div key={idx} className="ml-4 mt-2 border-l pl-3 border-gray-600">
                <p>
                  <strong>{comentario.usuario}:</strong> {comentario.texto}
                </p>

                {comentario.respuestas.map((respuesta, ridx) => (
                  <div
                    key={ridx}
                    className="ml-6 mt-2 border-l pl-3 border-gray-700"
                  >
                    <p>
                      <strong>{respuesta.usuario}:</strong> {respuesta.texto}
                    </p>

                    <div className="ml-6 mt-2">
                      <h4 className="text-sm text-gray-300">Reacciones:</h4>
                      {respuesta.reacciones.map((r, reidx) => (
                        <p key={reidx} className="ml-4 text-sm text-gray-400">
                          {r.tipo} — {r.usuario.nombre} ({r.usuario.rol})
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
