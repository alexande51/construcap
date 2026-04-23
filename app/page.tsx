'use client'
import { useState } from 'react'

type Funcion      = { nombre: string; desc: string }
type Categoria    = { nombre: string; icono: string; enDesarrollo?: boolean; funciones: Funcion[] }
type Especialidad = { id: string; label: string; enDesarrollo?: boolean; categorias: Categoria[] }

const especialidades: Especialidad[] = [
  {
    id: 'estructura', label: '🏗️ Estructura',
    categorias: [
      { nombre: 'Importar Tipo', icono: '📥', funciones: [
        { nombre: 'Importar niveles',  desc: 'Importa niveles desde Excel y crea automáticamente vistas de planta asociadas a cada nivel.' },
        { nombre: 'Importar columnas', desc: 'Crea tipos de columnas estructurales en Revit a partir de especificaciones de dimensiones, materiales y refuerzo definidas en Excel.' },
        { nombre: 'Importar vigas',    desc: 'Crea tipos de vigas estructurales desde Excel, incluyendo dimensiones, material, tipo de sección e información de refuerzo.' },
        { nombre: 'Importar zapatas',  desc: 'Genera tipos de zapatas en Revit a partir de especificaciones de cimentación definidas en Excel.' },
      ]},
      { nombre: 'Modelado', icono: '🔩', funciones: [
        { nombre: 'Estribos en columnas', desc: 'Crea y distribuye estribos en columnas con zonas configurables (cimiento, nudo, distribución) o redistribuye la configuración desde una columna plantilla.' },
        { nombre: 'Estribos en vigas',    desc: 'Distribuye estribos en vigas con separaciones diferenciadas por zona: apoyo, corte y zona central.' },
        { nombre: 'Acero long. columnas', desc: 'Coloca barras longitudinales en columnas configurando cantidad por cara, diámetro, recubrimiento y longitudes de solape.' },
        { nombre: 'Acero long. vigas',    desc: 'Genera acero longitudinal en vigas con barras superiores, inferiores y laterales.' },
        { nombre: 'Acero en zapatas',     desc: 'Crea malla de refuerzo en zapatas con soporte para malla simple o doble.' },
      ]},
      { nombre: 'Recortar', icono: '✂️', funciones: [
        { nombre: 'Recorte de vigas',    desc: 'Divide vigas en los puntos de intersección con columnas.' },
        { nombre: 'Recorte de columnas', desc: 'Divide columnas en la intersección con vigas según el criterio seleccionado.' },
        { nombre: 'Generación de losas', desc: 'Crea losas automáticamente detectando contornos formados por vigas y columnas.' },
        { nombre: 'Falso piso / suelo',  desc: 'Recorta pisos o losas creando aberturas en el contorno.' },
      ]},
      { nombre: 'Solado / Relleno', icono: '🧱', funciones: [
        { nombre: 'Generación de solado', desc: 'Crea solados de concreto pobre bajo zapatas y vigas con espesor configurable.' },
        { nombre: 'Relleno estructural',  desc: 'Genera pisos de relleno sobre vigas o muros.' },
      ]},
      { nombre: 'Losa Aligerada', icono: '🏛️', funciones: [
        { nombre: 'Dist. de ladrillos',      desc: 'Coloca ladrillos de techo en losas aligeradas automáticamente.' },
        { nombre: 'Dist. vigas secundarias', desc: 'Coloca vigas soleras en el perímetro de losas aligeradas.' },
        { nombre: 'Dist. de fondos',         desc: 'Coloca tablas de encofrado en losas aligeradas.' },
        { nombre: 'Dist. de puntales',       desc: 'Distribuye puntales de soporte bajo vigas soleras.' },
      ]},
      { nombre: 'Acero en Losa', icono: '⚙️', funciones: [
        { nombre: 'Acero positivo',       desc: 'Coloca acero positivo en la cara inferior de losas nervadas.' },
        { nombre: 'Acero negativo',       desc: 'Coloca acero negativo en la cara superior de losas nervadas sobre apoyos.' },
        { nombre: 'Acero de temperatura', desc: 'Distribuye acero de temperatura en la cara superior de losas.' },
        { nombre: 'Acero balancín',       desc: 'Coloca acero balancín perpendicular al acero negativo en cambios de dirección.' },
      ]},
      { nombre: 'Cálculo de Materiales', icono: '📊', funciones: [
        { nombre: 'Material en columnas',     desc: 'Calcula volumen de concreto y materiales componentes en columnas.' },
        { nombre: 'Material en vigas',        desc: 'Calcula volumen de concreto y materiales en vigas estructurales.' },
        { nombre: 'Material en zapatas',      desc: 'Calcula volumen de concreto y materiales para zapatas.' },
        { nombre: 'Cant. de ladrillos',       desc: 'Calcula la cantidad de ladrillos de pared necesarios.' },
        { nombre: 'Mortero y ladrillo techo', desc: 'Calcula materiales de mortero para tarrajeo.' },
        { nombre: 'Ladrillos de techo',       desc: 'Calcula la cantidad de ladrillos huecos para losas aligeradas.' },
      ]},
      { nombre: 'Cálculo de Acero', icono: '🔢', funciones: [
        { nombre: 'Acero en columnas', desc: 'Calcula kg de acero longitudinal y estribos en columnas.' },
        { nombre: 'Acero en vigas',    desc: 'Estima la cantidad de acero longitudinal y estribos en vigas.' },
        { nombre: 'Acero en zapatas',  desc: 'Calcula los kg de acero necesarios para la malla de refuerzo.' },
      ]},
      { nombre: 'Precios', icono: '💰', funciones: [
        { nombre: 'Precio concreto columnas', desc: 'Calcula el costo estimado de columnas aplicando un precio por m³.' },
        { nombre: 'Precio concreto vigas',    desc: 'Calcula el costo estimado de las vigas estructurales.' },
        { nombre: 'Precio concreto zapatas',  desc: 'Calcula el costo estimado de las cimentaciones.' },
        { nombre: 'Precio acero columnas',    desc: 'Calcula el costo del acero de refuerzo en columnas.' },
        { nombre: 'Precio acero vigas',       desc: 'Calcula el costo del acero de refuerzo en vigas.' },
        { nombre: 'Precio acero zapatas',     desc: 'Calcula el costo del acero de refuerzo en zapatas.' },
      ]},
      { nombre: 'Tablas', icono: '📋', funciones: [
        { nombre: 'Tabla de columnas', desc: 'Crea una tabla de planificación de columnas en Revit.' },
        { nombre: 'Tabla de vigas',    desc: 'Crea una tabla de planificación de vigas estructurales.' },
        { nombre: 'Tabla de zapatas',  desc: 'Crea una tabla de planificación de cimentaciones.' },
      ]},
      { nombre: 'Información', icono: 'ℹ️', funciones: [
        { nombre: 'Localizador de ejes',    desc: 'Asigna automáticamente el eje a columnas, vigas, muros o zapatas.' },
        { nombre: 'Generación de rejillas', desc: 'Crea líneas de rejilla automáticamente.' },
        { nombre: 'Cuadros estructurales',  desc: 'Genera cuadros de columnas, vigas o zapatas en vistas de detalle.' },
        { nombre: 'Creación de vistas',     desc: 'Crea vistas de detalle 2D automáticamente para cada tipo único.' },
      ]},
      { nombre: 'Adicional', icono: '➕', funciones: [
        { nombre: 'Ocultar aceros',      desc: 'Oculta el acero de refuerzo en zapatas seleccionadas.' },
        { nombre: 'Vistas 3D por eje',   desc: 'Crea vistas 3D independientes para cada eje seleccionado.' },
        { nombre: 'Exportar hojas',      desc: 'Exporta las hojas del proyecto a archivos DWG o PDF.' },
        { nombre: 'Limpieza del modelo', desc: 'Detecta y elimina plantillas de vista no asignadas.' },
      ]},
    ],
  },
  {
    id: 'arquitectura', label: '🏢 Arquitectura',
    categorias: [
      { nombre: 'Acabados', icono: '🎨', funciones: [
        { nombre: 'Tarrajeo de muros',    desc: 'Marca los muros que tendrán acabado de tarrajeo.' },
        { nombre: 'Cálculo de mortero',   desc: 'Calcula materiales para tarrajeo de muros.' },
        { nombre: 'Cálculo de pintura',   desc: 'Calcula galones de pintura e imprimante para muros.' },
        { nombre: 'Colocación cerámicos', desc: 'Calcula materiales para pisos cerámicos.' },
      ]},
      { nombre: 'Vanos', icono: '🚪', funciones: [
        { nombre: 'Cuadro puertas y ventanas', desc: 'Genera automáticamente un cuadro de vanos.' },
        { nombre: 'Cuadro acabados de piso',   desc: 'Genera una tabla de acabados de piso por zona.' },
      ]},
      { nombre: 'Vistas', icono: '👁️', funciones: [
        { nombre: 'Vista 3D general',   desc: 'Crea una vista 3D isométrica del modelo arquitectónico.' },
        { nombre: 'Vista 3D por nivel', desc: 'Genera vistas 3D filtradas por nivel.' },
      ]},
      { nombre: 'Muros', icono: '🧱', funciones: [
        { nombre: 'Recorte automático de muros', desc: 'Recorta automáticamente los muros que intersectan columnas.' },
        { nombre: 'Muros en espacios cerrados',  desc: 'Crea muros perimetrales automáticamente en rooms definidos.' },
      ]},
      { nombre: 'Información', icono: 'ℹ️', funciones: [
        { nombre: 'Información de modelo',    desc: 'Genera una vista 3D con parámetros y datos relevantes.' },
        { nombre: 'Aplicación de plantillas', desc: 'Aplica plantillas de vista a múltiples vistas simultáneamente.' },
        { nombre: 'Creación de láminas',      desc: 'Crea hojas de plano para organizar las vistas del proyecto.' },
        { nombre: 'Ordenamiento de vistas',   desc: 'Reorganiza las vistas dentro de una hoja de plano.' },
        { nombre: 'Editor de patrones',       desc: 'Crea y modifica patrones de relleno personalizados.' },
      ]},
    ],
  },
  {
    id: 'sanitarias', label: '🚿 Sanitarias', enDesarrollo: true,
    categorias: [
      { nombre: 'Tuberías',    icono: '🔧', enDesarrollo: true, funciones: [{ nombre: 'Modelado de redes sanitarias', desc: 'Próximamente disponible.' }] },
      { nombre: 'Cálculo',     icono: '📐', enDesarrollo: true, funciones: [{ nombre: 'Cálculo hidráulico',           desc: 'Próximamente disponible.' }] },
      { nombre: 'Información', icono: '📄', enDesarrollo: true, funciones: [{ nombre: 'Cuadros sanitarios',           desc: 'Próximamente disponible.' }] },
    ],
  },
  {
    id: 'electricas', label: '⚡ Eléctricas', enDesarrollo: true,
    categorias: [
      { nombre: 'Tableros',    icono: '🔌', enDesarrollo: true, funciones: [{ nombre: 'Gestión de tableros eléctricos',      desc: 'Próximamente disponible.' }] },
      { nombre: 'Cálculo',     icono: '⚡', enDesarrollo: true, funciones: [{ nombre: 'Cálculo de carga y caída de tensión', desc: 'Próximamente disponible.' }] },
      { nombre: 'Información', icono: '📄', enDesarrollo: true, funciones: [{ nombre: 'Cuadros eléctricos',                  desc: 'Próximamente disponible.' }] },
    ],
  },
]

// ✅ GRADIENTES SUAVES Y VARIADOS PARA CADA CATEGORÍA
const catGradients: Record<string, string> = {
  'Importar Tipo': 'from-blue-300 to-indigo-300',
  'Modelado': 'from-slate-300 to-gray-300',
  'Recortar': 'from-teal-300 to-emerald-300',
  'Solado / Relleno': 'from-stone-300 to-amber-200',
  'Losa Aligerada': 'from-orange-200 to-amber-300',
  'Acero en Losa': 'from-gray-300 to-slate-300',
  'Cálculo de Materiales': 'from-emerald-300 to-green-300',
  'Cálculo de Acero': 'from-zinc-300 to-neutral-300',
  'Precios': 'from-green-300 to-emerald-300',
  'Tablas': 'from-indigo-300 to-violet-300',
  'Información': 'from-sky-300 to-blue-300',
  'Adicional': 'from-orange-300 to-red-300',
  'Acabados': 'from-pink-300 to-rose-300',
  'Vanos': 'from-violet-300 to-purple-300',
  'Vistas': 'from-cyan-300 to-sky-300',
  'Muros': 'from-rose-300 to-pink-300',
  'Tuberías': 'from-cyan-300 to-teal-300',
  'Cálculo': 'from-teal-300 to-cyan-300',
  'Tableros': 'from-yellow-300 to-amber-300',
}

// ✅ FUNCIÓN FALLBACK: genera gradiente aleatorio suave basado en el nombre
function getSoftGradient(nombre: string): string {
  if (catGradients[nombre]) return catGradients[nombre]
  const softGradients = [
    'from-blue-300 to-indigo-300',
    'from-emerald-300 to-teal-300',
    'from-violet-300 to-purple-300',
    'from-amber-300 to-orange-300',
    'from-rose-300 to-pink-300',
    'from-cyan-300 to-sky-300',
    'from-lime-300 to-green-300',
    'from-fuchsia-300 to-pink-300',
    'from-slate-300 to-gray-300',
    'from-teal-300 to-cyan-300',
    'from-indigo-300 to-blue-300',
    'from-yellow-300 to-amber-300',
  ]
  let hash = 0
  for (let i = 0; i < nombre.length; i++) {
    hash = nombre.charCodeAt(i) + ((hash << 5) - hash)
  }
  return softGradients[Math.abs(hash) % softGradients.length]
}

// ✅ tabColors sin 'catBg' (ya no se usa para iconos)
const tabColors: Record<string, { active: string; catBorder: string; fnBorder: string; fnBg: string; fnText: string; dot: string }> = {
  estructura:   { active: 'bg-blue-700 text-white',   catBorder: 'border-blue-500',   fnBorder: 'border-blue-100',   fnBg: 'bg-blue-50',   fnText: 'text-blue-700',   dot: 'bg-blue-500' },
  arquitectura: { active: 'bg-purple-700 text-white', catBorder: 'border-purple-500', fnBorder: 'border-purple-100', fnBg: 'bg-purple-50', fnText: 'text-purple-700', dot: 'bg-purple-500' },
  sanitarias:   { active: 'bg-cyan-700 text-white',   catBorder: 'border-cyan-500',   fnBorder: 'border-cyan-100',   fnBg: 'bg-cyan-50',   fnText: 'text-cyan-700',   dot: 'bg-cyan-400' },
  electricas:   { active: 'bg-yellow-600 text-white', catBorder: 'border-yellow-500', fnBorder: 'border-yellow-100', fnBg: 'bg-yellow-50', fnText: 'text-yellow-700', dot: 'bg-yellow-400' },
}

const testimonios = [
  { nombre: 'Carlos Quispe Huanca',   cargo: 'Ingeniero Civil BIM',      ciudad: 'Lima',      avatar: 'CQ', estrellas: 5, mensaje: 'Llevo más de un año usando CAP Tools y cambió bastante mi flujo en Revit. Lo que antes me tomaba media mañana ahora lo resuelvo en minutos.' },
  { nombre: 'Milagros Condori Apaza', cargo: 'Coordinadora BIM',         ciudad: 'Arequipa',  avatar: 'MC', estrellas: 5, mensaje: 'Al principio dudé porque hay varios plugins por ahí, pero este está hecho pensando en proyectos peruanos. Los parámetros ya vienen adaptados.' },
  { nombre: 'Javier Mamani Torres',   cargo: 'Proyectista Estructural',   ciudad: 'Cusco',     avatar: 'JM', estrellas: 5, mensaje: 'Lo recomendé en mi oficina y ya lo usan tres compañeros más. La instalación es rápida y el soporte respondió al toque por WhatsApp.' },
  { nombre: 'Fiorella Huamán Rivas',  cargo: 'Arquitecta BIM Manager',   ciudad: 'Lima',      avatar: 'FH', estrellas: 5, mensaje: 'Trabajo en proyectos de edificaciones multifamiliares y CAP Tools me ayuda especialmente en la gestión de familias y la documentación.' },
  { nombre: 'Rodrigo Ccallo Vargas',  cargo: 'Especialista MEP',         ciudad: 'Trujillo',  avatar: 'RC', estrellas: 5, mensaje: 'Empecé con la versión demo y en una semana ya estaba pagando la licencia. El salto de productividad fue inmediato.' },
  { nombre: 'Paola Sánchez Delgado',  cargo: 'Ingeniera de Proyectos',   ciudad: 'Piura',     avatar: 'PS', estrellas: 5, mensaje: 'Me gusta que actualizan seguido y cada versión trae mejoras reales. Se nota que el equipo usa la herramienta en proyectos de verdad.' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('estructura')
  const [activeCat, setActiveCat] = useState<string | null>(null)

  const esp    = especialidades.find(e => e.id === activeTab)!
  const colors = tabColors[activeTab]
  const catObj = esp.categorias.find(c => c.nombre === activeCat) ?? null

  function handleTab(id: string) {
    setActiveTab(id)
    setActiveCat(null)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50/70 via-white to-white py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Add-in para Autodesk Revit · Compatible Revit 2025 y 2026
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            Automatiza tu flujo<br /><span className="text-blue-700">En Revit con CAP</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            CAP Tools organiza y automatiza el modelado, cálculo y documentación de proyectos BIM
            para estructuras, arquitectura, sanitarias y eléctricas — todo desde Revit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="#precios" className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-700 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">Ver precios →</a>
            <a href="#funciones" className="w-full sm:w-auto flex items-center justify-center px-6 py-3.5 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Explorar funciones</a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <p className="text-xs text-gray-400">✓ Licencia anual S/ 80 / $25</p>
            <p className="text-xs text-gray-400">✓ Soporte técnico incluido</p>
            <p className="text-xs text-gray-400">✓ Actualizaciones continuas</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-100 bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { valor: '4',   label: 'Especialidades',         color: 'text-blue-600' },
            { valor: '17+', label: 'Categorías',             color: 'text-purple-600' },
            { valor: '60+', label: 'Comandos disponibles',   color: 'text-green-600' },
            { valor: '70%', label: 'Menos tiempo modelando', color: 'text-orange-500' },
          ].map((s, i) => (
            <div key={i} className={`text-center px-3 sm:px-6 py-4 ${i < 3 ? 'border-r border-gray-100' : ''}`}>
              <p className={`text-2xl sm:text-3xl font-bold ${s.color}`}>{s.valor}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FUNCIONES */}
      <section id="funciones" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Todo lo que incluye CAP Tools</h2>
            <p className="text-gray-500 text-sm sm:text-base">
              {activeCat
                ? <><span>Viendo funciones de <strong>{activeCat}</strong> — </span><button onClick={() => setActiveCat(null)} className="text-blue-600 underline">← volver a categorías</button></>
                : 'Selecciona una especialidad y haz clic en una categoría para ver sus funciones'
              }
            </p>
          </div>

          {/* Tabs de especialidades — scroll horizontal en móvil */}
          <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 w-full sm:w-fit mx-auto mb-10 shadow-sm overflow-x-auto">
            {especialidades.map(e => (
              <button
                key={e.id}
                onClick={() => handleTab(e.id)}
                className={`flex-shrink-0 px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === e.id ? colors.active : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {e.label}
                {e.enDesarrollo && <span className="text-xs bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full font-medium leading-none hidden sm:inline">Pronto</span>}
              </button>
            ))}
          </div>

          {!activeCat && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {esp.categorias.map((cat) => (
                <button
                  key={cat.nombre}
                  onClick={() => !cat.enDesarrollo && setActiveCat(cat.nombre)}
                  className={`bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 text-left transition-all group
                    ${cat.enDesarrollo
                      ? 'opacity-60 cursor-not-allowed'
                      : `hover:${colors.catBorder} hover:shadow-md hover:-translate-y-0.5 cursor-pointer`
                    }`}
                >
                  {/* ✅ ICONO CON GRADIENTE SUAVE Y ÚNICO */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-lg bg-gradient-to-br ${getSoftGradient(cat.nombre)} shadow-sm`}>
                    {cat.icono}
                  </div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{cat.nombre}</p>
                  <p className="text-xs text-gray-400">{cat.funciones.length} funciones</p>
                  {cat.enDesarrollo && (
                    <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Próximamente</span>
                  )}
                </button>
              ))}
            </div>
          )}

          {activeCat && catObj && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {catObj.funciones.map((fn, i) => (
                <div key={i} className={`rounded-2xl border p-5 ${colors.fnBg} ${colors.fnBorder}`}>
                  {/* ✅ ICONO CON GRADIENTE SUAVE Y ÚNICO */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${getSoftGradient(catObj.nombre)} shadow-sm`}>
                    <span className="text-white text-sm">{catObj.icono}</span>
                  </div>
                  <p className={`text-sm font-bold mb-2 ${colors.fnText}`}>{fn.nombre}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{fn.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* POR QUÉ CAP TOOLS */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">¿Por qué elegir CAP Tools?</h2>
            <p className="text-gray-500 text-sm sm:text-base">Diseñado para aumentar significativamente tu productividad en modelado BIM</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icono: '⏱️', titulo: 'Ahorro de tiempo',          desc: 'Reduce el tiempo de modelado hasta en un 70% comparado con métodos tradicionales.' },
              { icono: '🔄', titulo: 'Automatización completa',   desc: 'Refuerzo estructural, importación masiva desde Excel y edición avanzada de elementos.' },
              { icono: '📐', titulo: 'Distribución automática',   desc: 'Distribución automática de ladrillos, vigas secundarias, fondos y puntales.' },
              { icono: '📊', titulo: 'Cálculo integrado',         desc: 'Materiales, acero y precios calculados directamente sobre el modelo Revit.' },
              { icono: '🔁', titulo: 'Actualizaciones incluidas', desc: 'Nuevas funciones y compatibilidad con versiones nuevas de Revit durante todo el año.' },
              { icono: '🎓', titulo: 'Capacitación inicial',      desc: 'Soporte técnico prioritario y capacitación incluida para que empieces de inmediato.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-all hover:-translate-y-0.5">
                <span className="text-3xl mb-3 block">{item.icono}</span>
                <p className="text-sm font-bold text-gray-800 mb-2">{item.titulo}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              Precio de lanzamiento por tiempo limitado
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Licencia CAP Tools</h2>
            <p className="text-gray-500 text-sm sm:text-base">Acceso completo a todas las funciones con soporte incluido</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Card precio */}
            <div className="bg-white border-2 border-blue-600 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-100 relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-blue-700 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">🚀 Lanzamiento Especial</span>
              </div>
              <div className="text-center mb-6 pt-2">
                <p className="text-sm text-gray-500 mb-1">Licencia Anual</p>
                <div className="flex items-end justify-center gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-gray-900">S/ 80</span>
                  <div className="text-left mb-1.5">
                    <p className="text-sm font-semibold text-green-600">/ $25 USD</p>
                    <p className="text-xs text-gray-400">por año</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2.5 mb-8">
                {[
                  '🔓 Acceso ilimitado a todas las funciones',
                  '🔄 Actualizaciones y mejoras continuas',
                  '➕ Nuevas funciones durante el año',
                  '📞 Soporte técnico prioritario',
                  '🎓 Capacitación inicial incluida',
                  '⚙️ Compatibilidad con Revit 2025-2026',
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span className="text-sm text-gray-600">{b}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/51900103641" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-3.5 bg-blue-700 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
                Adquirir licencia →
              </a>
              <p className="text-xs text-center text-gray-400 mt-3">Disponible para Revit 2025 y Revit 2026</p>
            </div>
            {/* Card pago */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div>
                <p className="text-lg font-bold text-gray-900 mb-1">💳 Formas de pago</p>
                <p className="text-sm text-gray-500">Elige la opción que más te convenga</p>
              </div>
              <div className="space-y-3">
                {[
                  { icono: '📱', label: 'Yape / Plin',           valor: '+51 900 103 641' },
                  { icono: '💻', label: 'PayPal',                 valor: 'alexscp' },
                  { icono: '🏦', label: 'Transferencia bancaria', valor: 'Consultar por WhatsApp' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray-500 flex items-center gap-2"><span className="text-lg">{p.icono}</span>{p.label}</span>
                    <span className="text-sm font-semibold text-gray-800">{p.valor}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                <p className="text-xs text-blue-700 leading-relaxed">
                  📦 Una vez realizado el pago recibirás tus <strong>credenciales de acceso</strong> y el <strong>enlace de descarga</strong> del Addin.
                </p>
              </div>
              <a href="https://wa.me/51900103641" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-green-500 text-green-700 rounded-xl text-sm font-bold hover:bg-green-50 transition-all">
                💬 Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESARROLLADOR */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl font-black flex-shrink-0">A</div>
              <div className="flex-1">
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">Desarrollado por</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Ing. Civil — Alexander CP</p>
                <p className="text-sm text-gray-500 mb-4">CIP: 367400</p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-5">
                  {[
                    { valor: '5+',  label: 'Años de experiencia', color: 'text-blue-600' },
                    { valor: '50+', label: 'Proyectos entregados', color: 'text-purple-600' },
                    { valor: '4',   label: 'Especialidades BIM',   color: 'text-green-600' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white border border-blue-100 rounded-xl px-4 py-2 text-center min-w-[90px]">
                      <p className={`text-xl font-black ${s.color}`}>{s.valor}</p>
                      <p className="text-xs text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ingeniero Civil especializado en proyectos BIM con Autodesk Revit. Ofrecemos servicios integrales
                  de modelado, diseño, cálculo estructural y documentación técnica para proyectos de construcción.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Servicios que ofrecemos</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { icono: '🏗️', titulo: 'Modelado BIM Estructural',       desc: 'Columnas, vigas, losas, zapatas y cimentaciones en Revit Structure.' },
                  { icono: '🏢', titulo: 'Modelado BIM Arquitectónico',     desc: 'Plantas, cortes, elevaciones y renders en Revit Architecture.' },
                  { icono: '⚡', titulo: 'Planos Eléctricos',               desc: 'Diseño de instalaciones eléctricas, tableros y circuitos.' },
                  { icono: '🚿', titulo: 'Planos Sanitarios',               desc: 'Redes de agua fría, agua caliente, desagüe y ventilación.' },
                  { icono: '📐', titulo: 'Cálculo Estructural',             desc: 'Análisis y diseño con ETABS y SAP2000 según norma E.060.' },
                  { icono: '📋', titulo: 'Metrados y Presupuestos',         desc: 'Cuantificación de materiales y elaboración de APU detallados.' },
                  { icono: '📄', titulo: 'Expedientes Técnicos',            desc: 'Elaboración completa de expedientes para obras públicas y privadas.' },
                  { icono: '🗺️', titulo: 'Planos de Estructuras',           desc: 'Planos de encofrado, acero y detalles constructivos.' },
                  { icono: '🔍', titulo: 'Supervisión y Compatibilización', desc: 'Detección de interferencias entre especialidades con Navisworks.' },
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-blue-100 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0">{s.icono}</span>
                      <div>
                        <p className="text-sm font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">{s.titulo}</p>
                        <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Herramientas que usamos</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Autodesk Revit',   color: 'bg-blue-50 text-blue-700 border-blue-100' },
                  { label: 'ETABS',            color: 'bg-purple-50 text-purple-700 border-purple-100' },
                  { label: 'SAP2000',          color: 'bg-purple-50 text-purple-700 border-purple-100' },
                  { label: 'Navisworks',       color: 'bg-green-50 text-green-700 border-green-100' },
                  { label: 'AutoCAD',          color: 'bg-red-50 text-red-700 border-red-100' },
                  { label: 'S10 Presupuestos', color: 'bg-orange-50 text-orange-700 border-orange-100' },
                  { label: 'MS Project',       color: 'bg-cyan-50 text-cyan-700 border-cyan-100' },
                  { label: 'Excel Avanzado',   color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
                ].map((chip, i) => (
                  <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${chip.color}`}>
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icono: '📧', label: 'Email',    valor: 'alexandercp.ing@gmail.com' },
                { icono: '📱', label: 'WhatsApp', valor: '+51 900 103 641' },
                { icono: '🌐', label: 'Web',      valor: 'construcap.net' },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-blue-100 rounded-xl p-3 hover:shadow-md transition-all">
                  <p className="text-xs text-gray-400 mb-0.5">{c.icono} {c.label}</p>
                  <p className="text-xs font-semibold text-gray-700 break-all">{c.valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Lo que dicen nuestros usuarios</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Profesionales BIM de todo el Perú ya optimizan su trabajo con CAP Tools
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {testimonios.map((t, i) => (
              <div key={i} className="break-inside-avoid bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.estrellas }).map((_, s) => (
                    <svg key={s} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{t.mensaje}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                  <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs font-black flex-shrink-0">{t.avatar}</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.nombre}</p>
                    <p className="text-xs text-gray-400">{t.cargo} · {t.ciudad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-center">
            <div>
              <p className="text-3xl font-black text-gray-900">+60</p>
              <p className="text-sm text-gray-400">usuarios activos</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div>
              <p className="text-3xl font-black text-gray-900">4.9 ⭐</p>
              <p className="text-sm text-gray-400">valoración promedio</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div>
              <p className="text-3xl font-black text-gray-900">+8</p>
              <p className="text-sm text-gray-400">ciudades del Perú</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Acceso con autenticación segura
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para optimizar tu flujo BIM?</h2>
          <p className="text-gray-400 mb-8 text-base sm:text-lg">CAP Tools automatiza el trabajo repetitivo en Revit para que te enfoques en lo que importa.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://wa.me/51900103641" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-700 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-lg">
              Contactar por WhatsApp →
            </a>
            <a href="#funciones" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-700 text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
              Ver funciones
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}