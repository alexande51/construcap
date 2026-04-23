"use client";
import { useState } from "react";
import Link from "next/link";
import { posts, PostMeta } from "@/data/blog/index";

const CATEGORIAS = ["Todos", "Novedades", "Tutorial", "BIM", "Revit", "CAP"];

const CAP_KEYWORDS = ["cap", "cap tools", "cap tool"];

const ALTURAS = ["h-44", "h-56", "h-48", "h-64", "h-52", "h-60"];

const CATEGORIA_ESTILOS: Record<string, { bg: string; text: string; badge: string }> = {
  Novedades: { bg: "from-blue-100 to-blue-200",    text: "text-blue-600",   badge: "bg-blue-600" },
  Tutorial:  { bg: "from-green-100 to-green-200",  text: "text-green-600",  badge: "bg-green-600" },
  BIM:       { bg: "from-purple-100 to-slate-200", text: "text-purple-600", badge: "bg-purple-600" },
  Revit:     { bg: "from-orange-100 to-amber-200", text: "text-orange-600", badge: "bg-orange-600" },
  CAP:       { bg: "from-rose-100 to-pink-200",    text: "text-rose-600",   badge: "bg-rose-600" },
};

const ICONOS: Record<string, string> = {
  Novedades: "🚀",
  Tutorial:  "📖",
  BIM:       "🏗️",
  Revit:     "⚙️",
  CAP:       "🛠️",
};

function matchCAP(post: PostMeta): boolean {
  const haystack = [post.titulo, post.resumen, post.categoria].join(" ").toLowerCase();
  return CAP_KEYWORDS.some((kw) => haystack.includes(kw));
}

export default function BlogPage() {
  const [filtro, setFiltro] = useState("Todos");

  const visibles: PostMeta[] = (() => {
    if (filtro === "Todos") return posts;
    if (filtro === "CAP")   return posts.filter(matchCAP);
    return posts.filter((p) => p.categoria === filtro);
  })();

  return (
    <>
      <style>{`
        .card-root { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .card-root:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.12); transform: translateY(-4px); }

        .card-icon { transition: transform 0.4s ease; }
        .card-root:hover .card-icon { transform: scale(1.15) rotate(-4deg); }

        .card-img { transition: transform 0.5s ease; }
        .card-root:hover .card-img { transform: scale(1.06); }

        .card-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.05) 60%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card-root:hover .card-overlay { opacity: 1; }

        .card-info {
          transform: translateY(8px);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .card-root:hover .card-info { transform: translateY(0); opacity: 1; }

        .masonry { columns: 1; column-gap: 1.25rem; }
        @media (min-width: 640px)  { .masonry { columns: 2; } }
        @media (min-width: 1024px) { .masonry { columns: 3; } }
        .masonry-item { break-inside: avoid; margin-bottom: 1.25rem; }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-purple-50 pt-28 pb-16 px-6 text-center">
        <span className="inline-block bg-purple-600 text-white text-xs fontaddbold px-4 py-1.5 rounded-full mb-5 tracking-wide shadow-md shadow-purple-200">
          BIM · Revit · Ingeniería Civil
        </span>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-8">
          Tutoriales, novedades y recursos sobre BIM, Revit y flujos de trabajo
          para ingenieros civiles.
        </p>
        <div className="flex justify-center gap-10 mt-6">
          {[
            { valor: `${posts.length}`, label: "Artículos" },
            { valor: "4",              label: "Categorías" },
            { valor: "Free",           label: "Recursos y mas" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-extrabold text-purple-600">{s.valor}</p>
              <p className="text-xs text-gray-500 font-semibold mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTROS FIJOS ── */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-3">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                filtro === cat
                  ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200"
                  : "bg-white text-gray-600 border-gray-200 hover:border-purple-400 hover:text-purple-600"
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
              : `${visibles.length} artículo${visibles.length !== 1 ? "s" : ""} ${filtro !== "Todos" ? `en "${filtro}"` : ""}`}
          </p>

          {visibles.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-lg font-semibold">No hay artículos en esta categoría</p>
              <button
                onClick={() => setFiltro("Todos")}
                className="mt-4 text-purple-600 text-sm font-bold hover:underline"
              >
                Ver todos los artículos
              </button>
            </div>
          ) : (
            <div className="masonry">
              {visibles.map((post, i) => {
                const estilo = CATEGORIA_ESTILOS[post.categoria] ?? {
                  bg: "from-gray-100 to-gray-200",
                  text: "text-gray-600",
                  badge: "bg-gray-600",
                };
                const icono = ICONOS[post.categoria] ?? "📄";

                return (
                  <div key={post.slug} className="masonry-item">
                    <Link
                      href={`/blog/${post.slug}`}
                      onClick={(e) => e.preventDefault()}   // 👈 solo agrega esto
                      className="card-root block group rounded-2xl overflow-hidden shadow-sm bg-white"
                    >
                      {/* Banner */}
                      <div className={`relative overflow-hidden ${ALTURAS[i % ALTURAS.length]}`}>

                        {/* Imagen real si existe, si no → gradiente */}
                        {post.imagen ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={post.imagen}
                            alt={post.titulo}
                            className="card-img w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`card-icon w-full h-full bg-gradient-to-br ${estilo.bg} flex items-center justify-center`}>
                            <span className="text-7xl opacity-20 select-none">{icono}</span>
                          </div>
                        )}

                        <div className="absolute top-3 left-3">
                          <span className={`${estilo.badge} text-white text-xs font-black px-2.5 py-1 rounded-full shadow`}>
                            {post.categoria}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3">
                          <span className="bg-white/80 backdrop-blur-sm text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                            ⏱ {post.tiempo}
                          </span>
                        </div>

                        <div className="card-overlay absolute inset-0" />

                        <div className="card-info absolute bottom-0 left-0 right-0 p-4">
                          <h2 className="text-white font-bold text-sm leading-tight">
                            {post.titulo}
                          </h2>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-4 py-3">
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                          {post.resumen}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-xs">{post.fecha}</span>
                          <span className={`${estilo.text} text-xs font-bold group-hover:translate-x-1 transition-transform inline-block`}>
                            Leer →
                          </span>
                        </div>
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
