export default function PreciosAddin() {
  return (
    <section id="precios" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            Precio de lanzamiento por tiempo limitado
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Licencia CAP Tools</h2>
          <p className="text-gray-500">Acceso completo a todas las funciones con soporte incluido</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Card precio */}
          <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-100 relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-1">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-blue-700 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                🚀 Lanzamiento Especial
              </span>
            </div>
            <div className="text-center mb-6 pt-2">
              <p className="text-sm text-gray-500 mb-1">Licencia Anual</p>
              <div className="flex items-end justify-center gap-3">
                <span className="text-5xl font-black text-gray-900">S/ 80</span>
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
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
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

          {/* Card pagos */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="text-lg">{p.icono}</span>{p.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-800">{p.valor}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <p className="text-xs text-blue-700 leading-relaxed">
                📦 Una vez realizado el pago recibirás tus <strong>credenciales de acceso</strong> y el{' '}
                <strong>enlace de descarga</strong> del Addin.
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
  )
}
