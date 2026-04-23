export default function HeroAddinCap() {
  return (
    <section className="bg-gradient-to-br from-blue-50/70 via-white to-white py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          Add-in para Autodesk Revit · Compatible Revit 2025 y 2026
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
          Automatiza tu flujo<br /><span className="text-blue-700">BIM en Revit</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          CAP Tools organiza y automatiza el modelado, cálculo y documentación de proyectos BIM
          para estructuras, arquitectura, sanitarias y eléctricas — todo desde Revit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#funciones"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-700 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
            Explorar funciones →
          </a>
          <a href="https://wa.me/51900103641" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3.5 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            💬 Consultar por WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
          <p className="text-xs text-gray-400">✓ Licencia anual S/ 80 / $25</p>
          <p className="text-xs text-gray-400">✓ Soporte técnico incluido</p>
          <p className="text-xs text-gray-400">✓ Actualizaciones continuas</p>
        </div>
      </div>
    </section>
  )
}
