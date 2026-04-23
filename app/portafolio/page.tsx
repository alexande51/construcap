"use client";
import { useEffect, useState } from "react";
import { getProyectos } from "@/lib/proyectos";
import { Proyecto } from "@/types/proyecto";
import Link from "next/link";

const CATEGORIAS = ["Todos", "Residencial", "BIM", "Planos", "Supervisión", "Estructuras"];

const ALTURAS = ["h-48", "h-64", "h-56", "h-72", "h-52", "h-60"];

const CATEGORIA_ESTILOS: Record<string, { bg: string; badge: string }> = {
  Residencial: { bg: "from-blue-100 to-blue-200",    badge: "bg-blue-600" },
  BIM:         { bg: "from-purple-100 to-slate-200", badge: "bg-purple-600" },
  Planos:      { bg: "from-green-100 to-emerald-200",badge: "bg-green-600" },
  Supervisión: { bg: "from-orange-100 to-amber-200", badge: "bg-orange-600" },
  Estructuras: { bg: "from-rose-100 to-pink-200",    badge: "bg-rose-600" },
};

const ICONOS: Record<string, string> = {
  Residencial: "🏠",
  BIM:         "🏗️",
  Planos:      "📐",
  Supervisión: "🔍",
  Estructuras: "⚙️",
};

export default function PortafolioPage() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [filtro, setFiltro]       = useState("Todos");
  const [visibles, setVisibles]   = useState<Proyecto[]>([]);

  useEffect(() => {
    getProyectos().then((data) => {
      setProyectos(data);
      setVisibles(data);
    });
  }, []);

  useEffect(() => {
    if (filtro === "Todos") {
      setVisibles(proyectos);
    } else {
      setVisibles(
        proyectos.filter((p) =>
          p.categoria.toLowerCase().includes(filtro.toLowerCase()) ||
          p.tecnologias.some((t) => t.toLowerCase().includes(filtro.toLowerCase()))
        )
      );
    }
  }, [filtro, proyectos]);

  return (
    <>
      <style>{`
        .pin-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .pin-card:hover { box-shadow: 0 16px 48px -8px rgba(0,0,0,0.18); transform: translateY(-4px); }

        .pin-img { transition: transform 0.5s ease; }
        .pin-card:hover .pin-img { transform: scale(1.06); }

        .pin-icon { transition: transform 0.4s ease; }
        .pin-card:hover .pin-icon { transform: scale(1.15) rotate(-4deg); }

        .pin-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .pin-card:hover .pin-overlay { opacity: 1; }

        .pin-info {
          transform: translateY(10px);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .pin-card:hover .pin-info { transform: translateY(0); opacity: 1; }

        .masonry { columns: 1; column-gap: 1rem; }
        @media (min-width: 640px)  { .masonry { columns: 2; } }
        @media (min-width: 1024px) { .masonry { columns: 3; } }
        .masonry-item { break-inside: avoid; margin-bottom: 1rem; }

        .tag-pill {
          backdrop-filter: blur(6px);
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.3);
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-16 px-6 text-center">
        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide shadow-md shadow-blue-200">
          Proyectos · Piura, Perú
        </span>
        <h1 className="font-extrabold text-6xl text-gray-900 mb-4">Portafolio</h1>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-8">
          Proyectos de vivienda unifamiliar, bifamiliar, multifamiliar y condominios
          desarrollados con modelado BIM en Piura y alrededores.
        </p>
        <div className="flex justify-center gap-10 mt-6">
          {[
            { valor: "50+", label: "Proyectos" },
            { valor: "5+",  label: "Años exp." },
            { valor: "4",   label: "Especialidades" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-extrabold text-3xl text-blue-600">{s.valor}</p>
              <p className="text-xs text-gray-500 font-semibold mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTROS ── */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                filtro === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── GRILLA MASONRY ── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm text-gray-400 font-semibold mb-6">
            {visibles.length === 0
              ? "Sin resultados"
              : `${visibles.length} proyecto${visibles.length !== 1 ? "s" : ""}${filtro !== "Todos" ? ` en "${filtro}"` : ""}`}
          </p>

          {visibles.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-lg font-semibold">No hay proyectos en esta categoría</p>
              <button
                onClick={() => setFiltro("Todos")}
                className="mt-4 text-blue-600 text-sm font-bold hover:underline"
              >
                Ver todos los proyectos
              </button>
            </div>
          ) : (
            <div className="masonry">
              {visibles.map((proyecto, i) => {
                const estilo = CATEGORIA_ESTILOS[proyecto.categoria] ?? {
                  bg: "from-slate-100 to-slate-200",
                  badge: "bg-slate-500",
                };
                const icono = ICONOS[proyecto.categoria] ?? "🏠";

                return (
                  <div key={proyecto.slug} className="masonry-item">
                    <Link
                      href={`/portafolio/${proyecto.slug}`}
                      onClick={(e) => e.preventDefault()}   // 👈 solo agrega esto
                      className="pin-card block rounded-2xl overflow-hidden bg-white shadow-sm cursor-pointer"
                    >
                      {/* Imagen o gradiente */}
                      <div className={`relative overflow-hidden ${ALTURAS[i % ALTURAS.length]}`}>
                        {proyecto.portada ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={proyecto.portada}
                            alt={proyecto.titulo}
                            className="pin-img w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`pin-icon w-full h-full bg-gradient-to-br ${estilo.bg} flex items-center justify-center`}>
                            <span className="text-7xl opacity-20 select-none">{icono}</span>
                          </div>
                        )}

                        <div className="pin-overlay absolute inset-0" />

                        <div className="pin-info absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
                            {proyecto.categoria}
                          </p>
                          <h2 className="text-white font-extrabold text-base leading-snug">
                            {proyecto.titulo}
                          </h2>
                          <p className="text-white/60 text-xs mt-1 line-clamp-2">
                            {proyecto.descripcion}
                          </p>
                        </div>

                        {proyecto.destacado && (
                          <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-black px-2.5 py-1 rounded-full shadow">
                            ⭐ Destacado
                          </div>
                        )}

                        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                          {proyecto.tecnologias.slice(0, 2).map((tec, j) => (
                            <span key={j} className="tag-pill text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                              {tec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-4 py-3 flex items-center justify-between bg-white">
                        <div>
                          <p className="text-gray-800 font-bold text-sm leading-tight line-clamp-1">
                            {proyecto.titulo}
                          </p>
                          <p className="text-gray-400 text-xs mt-0.5">
                            {new Date(proyecto.fecha).toLocaleDateString("es-PE", {
                              year: "numeric",
                              month: "short",
                            })}
                          </p>
                        </div>
                        <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                          →
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
