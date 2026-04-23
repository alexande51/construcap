export default function InstalacionAddin() {

  const requisitos = [
    { label: 'Sistema operativo',    valor: 'Windows 10 / 11 (64 bits)' },
    { label: 'Versión de Revit',     valor: 'Revit 2025 o Revit 2026' },
    { label: 'RAM mínima',           valor: '8 GB (16 GB recomendado)' },
    { label: '.NET Framework',       valor: '4.8 o superior' },
    { label: 'Conexión a internet',  valor: 'Requerida para activación' },
  ]

  return (
    <section id="instalacion" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <span>⚙️</span> Instalación rápida
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Guía de instalación</h2>
          <p className="text-gray-500">Configura CAP Tools en menos de 5 minutos</p>
        </div>

        {/* ── SELECTOR DE VERSIÓN ── */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 mb-14 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div>
              <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">
                Disponible ahora
              </p>
              <h3 className="text-2xl font-black text-gray-900 mb-1">CAP Tools</h3>
              <p className="text-gray-400 text-sm">
                Compatible con Revit 2025 y Revit 2026 · Windows 64 bits
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/u/1/folders/1n96s9f7WXvIbzshdDVmyUwy-z1Z0CSct"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 border-2 border-blue-700 text-blue-700 font-black text-sm px-7 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Descargar Add-in CAP v2.2
            </a>
          </div>

          {/* Versiones */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            <div className="flex flex-col items-center gap-1.5 bg-blue-50 border-2 border-blue-600 rounded-2xl px-3 py-3 cursor-default">
              <span className="text-xs font-black text-blue-700">v2.2</span>
              <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">Disponible</span>
            </div>
            {['v2.3', 'v2.4', 'v2.5', 'v2.6', 'v2.7'].map((v) => (
              <div key={v} className="flex flex-col items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-2xl px-3 py-3 opacity-40 cursor-not-allowed select-none hover:opacity-80 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200">
                <span className="text-xs font-black text-gray-400">{v}</span>
                <span className="text-[10px] bg-gray-200 text-gray-400 px-2 py-0.5 rounded-full font-semibold">🔒 Licencia</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Las versiones v2.3 a v2.7 están disponibles con licencia activa ·{' '}
            <a href="#precios" className="text-blue-500 hover:underline font-semibold">Ver planes →</a>
          </p>

          {/* Archivos incluidos */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-3 font-semibold">Dentro encontrarás dos instaladores según tu versión:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { archivo: 'Instalador_CAP_v2.2_Revit2025.exe', version: 'Revit 2025' },
                { archivo: 'Instalador_CAP_v2.2_Revit2026.exe', version: 'Revit 2026' },
              ].map((f, i) => (
                <div key={i} className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <p className="text-xs font-mono text-blue-700 font-semibold mb-1">{f.archivo}</p>
                  <p className="text-xs text-gray-400">→ si usas {f.version}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PASO 1 — INSTALACIÓN ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-black text-sm flex-shrink-0">1</div>
            <div>
              <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">Paso 01</p>
              <p className="text-lg font-bold text-gray-900">⚙️ Instala el Add-in</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-5 ml-12">
            Tienes dos formas de instalarlo — elige la que prefieras:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ml-0 md:ml-12">

            {/* Opción A — Automática */}
            <div className="bg-gray-50 border-2 border-green-200 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-5">
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">✅ Recomendada</span>
              </div>
              <p className="text-sm font-bold text-gray-900 mt-3 mb-4">Opción A — Instalación Automática</p>
              <ol className="flex flex-col gap-3">
                {[
                  'Cierra Revit antes de continuar.',
                  'Descarga el instalador que corresponde a tu versión.',
                  'Haz doble clic en el archivo .exe.',
                  'Cuando Windows pida permisos de administrador, haz clic en Sí.',
                  'Sigue el asistente: Siguiente → Instalar → Finalizar.',
                ].map((paso, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-sm text-gray-600 leading-relaxed">{paso}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-2.5">
                <p className="text-xs text-green-700 font-semibold">🎉 ¡Listo! Los archivos se copian automáticamente a la ruta correcta de Revit.</p>
              </div>
            </div>

            {/* Opción B — Manual */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-5">
                <span className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">🔧 Usuarios avanzados</span>
              </div>
              <p className="text-sm font-bold text-gray-900 mt-3 mb-4">Opción B — Instalación Manual</p>
              <ol className="flex flex-col gap-3">
                {[
                  'Cierra Revit completamente.',
                  'Descarga la carpeta con todos los archivos del Add-in.',
                  'Copia todos los archivos de la carpeta descargada.',
                  'Pégalos en la ruta correspondiente a tu versión (ver abajo).',
                  'Si Windows pide permisos, haz clic en Continuar.',
                  'Si pregunta si reemplazar archivos, haz clic en Reemplazar.',
                ].map((paso, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-sm text-gray-600 leading-relaxed">{paso}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { version: '2025', ruta: 'C:\\ProgramData\\Autodesk\\Revit\\Addins\\2025\\' },
                  { version: '2026', ruta: 'C:\\ProgramData\\Autodesk\\Revit\\Addins\\2026\\' },
                ].map((r, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-400 mb-0.5">📂 Revit {r.version}</p>
                    <p className="text-xs font-mono text-blue-700 break-all">{r.ruta}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5">
                <p className="text-xs text-amber-700 font-semibold">✔️ Verifica que los 13 archivos estén copiados correctamente antes de abrir Revit.</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── PASO 2 — CREAR CUENTA E INICIAR SESIÓN ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-black text-sm flex-shrink-0">2</div>
            <div>
              <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">Paso 02</p>
              <p className="text-lg font-bold text-gray-900">🔑 Crea tu cuenta e inicia sesión</p>
            </div>
          </div>

          <div className="ml-0 md:ml-12 bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <p className="text-sm text-gray-500 mb-5">
              Una vez instalado, abre Revit. Verás que aparece la pestaña <strong className="text-gray-800">CAP Tools</strong> en tu barra de herramientas.
            </p>
            <ol className="flex flex-col gap-4 mb-6">
              {[
                { paso: 'Haz clic en el Add-in CAP en la cinta de opciones.', detalle: null },
                { paso: 'Se abrirá una ventana — selecciona la opción Login.', detalle: null },
                { paso: 'Como es tu primera vez, haz clic en Registrarse.', detalle: null },
                { paso: 'Ingresa tu correo electrónico y crea una contraseña.', detalle: null },
                { paso: 'Una vez registrado, inicia sesión con tus credenciales.', detalle: null },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span className="text-sm text-gray-600 leading-relaxed">{item.paso}</span>
                </li>
              ))}
            </ol>
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-3">
              <p className="text-sm text-blue-700 font-semibold">✅ ¡Al iniciar sesión tendrás acceso completo a todas las funciones del Add-in CAP!</p>
            </div>
          </div>
        </div>

        {/* Requisitos + Soporte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Requisitos */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              🖥️ Requisitos del sistema de Revit
            </p>
            <div className="space-y-3">
              {requisitos.map((r, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-xs text-gray-500">{r.label}</span>
                  <span className="text-xs font-semibold text-gray-800">{r.valor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soporte */}
          <div className="flex flex-col gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex-1">
              <p className="text-sm font-bold text-blue-800 mb-2">💬 ¿Tienes problemas con la instalación?</p>
              <p className="text-sm text-blue-700 leading-relaxed">
                Nuestro equipo te asiste por WhatsApp en tiempo real. La mayoría de casos se resuelven en menos de 10 minutos.
              </p>
              <a
                href="https://wa.me/51900103641"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-white bg-green-500 hover:bg-green-600 transition-all px-4 py-2.5 rounded-xl shadow-sm"
              >
                💬 Soporte por WhatsApp
              </a>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
              <p className="text-xs text-orange-700 leading-relaxed">
                ⚠️ <strong>Importante:</strong> No compartas tus credenciales. La licencia está vinculada a un solo equipo. Para cambio de PC contáctanos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}