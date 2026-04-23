'use client'

import { useState } from 'react'
import { especialidades, tabColors } from '@/data/addin-cap/funciones'

export default function FuncionesPanel() {
  const [activeTab,  setActiveTab]  = useState('estructura')
  const [openCat,    setOpenCat]    = useState<string | null>('Importar Tipo')
  const [activeFn,   setActiveFn]   = useState<{ cat: string; idx: number } | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false) // para móvil

  const esp    = especialidades.find(e => e.id === activeTab)!
  const colors = tabColors[activeTab]

  const catObj  = activeFn ? esp.categorias.find(c => c.nombre === activeFn.cat) ?? null : null
  const fnObj   = catObj ? catObj.funciones[activeFn!.idx] ?? null : null

  function handleTab(id: string) {
    setActiveTab(id)
    setOpenCat(null)
    setActiveFn(null)
  }

  function toggleCat(nombre: string) {
    setOpenCat(prev => prev === nombre ? null : nombre)
  }

  function handleFn(catNombre: string, idx: number) {
    setActiveFn({ cat: catNombre, idx })
    setSidebarOpen(false) // cierra sidebar en móvil al seleccionar
  }

  return (
    <section id="funciones" className="pt-8 pb-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Todo lo que incluye CAP Tools</h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Selecciona una especialidad, despliega una categoría y haz clic en cualquier función
          </p>
        </div>

        {/* Tabs especialidad — scroll horizontal en móvil */}
        <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 w-full sm:w-fit mx-auto mb-8 shadow-sm overflow-x-auto">
          {especialidades.map(e => (
            <button
              key={e.id}
              onClick={() => handleTab(e.id)}
              className={`flex-shrink-0 px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === e.id
                  ? tabColors[e.id].active
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {e.label}
              {e.enDesarrollo && (
                <span className="hidden sm:inline text-xs bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full font-medium leading-none">
                  Pronto
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Botón para abrir sidebar en móvil */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border font-semibold text-sm transition-all ${colors.catBg} text-white`}
          >
            <span>📂 Ver categorías</span>
            <span className={`transition-transform duration-200 ${sidebarOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── SIDEBAR acordeón ── */}
          <aside className={`w-full lg:w-72 lg:flex-shrink-0 bg-white border border-gray-200 rounded-2xl shadow-sm lg:sticky lg:top-24 flex flex-col
            ${sidebarOpen ? 'block' : 'hidden lg:flex'}`}>

            {/* Header sidebar */}
            <div className={`px-4 py-3 flex-shrink-0 rounded-t-2xl ${colors.catBg}`}>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                {esp.label} — Categorías
              </p>
            </div>

            {/* Lista */}
            <div className="py-1">
              {esp.categorias.map((cat) => {
                const isOpen   = openCat === cat.nombre
                const isLocked = cat.enDesarrollo ?? false

                return (
                  <div key={cat.nombre}>
                    <button
                      onClick={() => !isLocked && toggleCat(cat.nombre)}
                      className={`w-full text-left px-4 py-3 flex items-center justify-between gap-2 transition-all
                        ${isLocked
                          ? 'opacity-40 cursor-default text-gray-400'
                          : isOpen
                            ? `font-bold bg-gray-50 text-gray-800`
                            : `text-gray-600 font-medium cursor-pointer hover:bg-gray-50`
                        }`}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <span>{cat.icono}</span>
                        <span>{cat.nombre}</span>
                      </span>
                      <span className="flex items-center gap-1.5 flex-shrink-0">
                        {!isLocked && (
                          <span className="text-xs text-gray-300">{cat.funciones.length}</span>
                        )}
                        <span className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                          {isLocked ? '🔒' : '▶'}
                        </span>
                      </span>
                    </button>

                    {isOpen && !isLocked && (
                      <div className={`border-l-2 ml-4 ${colors.catBorder}`}>
                        {cat.funciones.map((fn, i) => {
                          const isActive = activeFn?.cat === cat.nombre && activeFn?.idx === i
                          return (
                            <button
                              key={i}
                              onClick={() => handleFn(cat.nombre, i)}
                              className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-2
                                ${isActive
                                  ? `font-semibold text-gray-900 bg-gray-100`
                                  : `text-gray-500 hover:text-gray-700 hover:bg-gray-50 font-normal`
                                }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? colors.dot : 'bg-gray-300'}`} />
                              {fn.nombre}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </aside>

          {/* ── PANEL derecho ── */}
          <div className="flex-1 min-w-0 w-full">

            {!fnObj && (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-16 text-center shadow-sm">
                <p className="text-4xl sm:text-5xl mb-4">👈</p>
                <p className="text-gray-600 font-semibold text-base sm:text-lg">Selecciona una función</p>
                <p className="text-gray-400 text-sm mt-2">
                  Despliega una categoría<br className="sm:hidden" /> y haz clic en cualquier función para ver su detalle
                </p>
              </div>
            )}

            {fnObj && catObj && (
              <div className={`rounded-2xl border p-6 sm:p-8 shadow-sm ${colors.fnBg} ${colors.fnBorder}`}>

                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${colors.catBg}`}>
                    <span className="text-white text-xl sm:text-2xl">{catObj.icono}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                      {esp.label} · {catObj.nombre}
                    </p>
                    <h3 className={`text-xl sm:text-2xl font-bold ${colors.fnText}`}>{fnObj.nombre}</h3>
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl p-5 sm:p-6 border border-white mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Descripción</p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{fnObj.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${colors.fnBg} ${colors.fnBorder} ${colors.fnText}`}>
                    {esp.label}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${colors.fnBg} ${colors.fnBorder} ${colors.fnText}`}>
                    {catObj.icono} {catObj.nombre}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500">
                    ⚙️ Revit 2025 / 2026
                  </span>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
