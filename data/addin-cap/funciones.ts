export type Funcion     = { nombre: string; desc: string }
export type Categoria   = { nombre: string; icono: string; enDesarrollo?: boolean; funciones: Funcion[] }
export type Especialidad = { id: string; label: string; enDesarrollo?: boolean; categorias: Categoria[] }

export const especialidades: Especialidad[] = [
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
        { nombre: 'Estribos en vigas',    desc: 'Distribuye estribos en vigas con separaciones diferenciadas por zona: apoyo, corte y zona central. Soporta creación desde cero o redistribución desde plantilla.' },
        { nombre: 'Acero long. columnas', desc: 'Coloca barras longitudinales en columnas configurando cantidad por cara (eje X e Y), diámetro, recubrimiento y longitudes de solape superior e inferior.' },
        { nombre: 'Acero long. vigas',    desc: 'Genera acero longitudinal en vigas con barras superiores, inferiores y laterales, con diámetro, recubrimiento y longitudes de solape configurables.' },
        { nombre: 'Acero en zapatas',     desc: 'Crea malla de refuerzo en zapatas con soporte para malla simple o doble, definiendo diámetro, recubrimiento, separación en X e Y, y ganchos de 90° opcionales.' },
      ]},
      { nombre: 'Recortar', icono: '✂️', funciones: [
        { nombre: 'Recorte de vigas',    desc: 'Divide vigas en los puntos de intersección con columnas, generando segmentos independientes para mayor precisión en el modelo de análisis.' },
        { nombre: 'Recorte de columnas', desc: 'Divide columnas en la intersección con vigas según el criterio seleccionado: mayor peralte en zona superior o primera viga desde arriba.' },
        { nombre: 'Generación de losas', desc: 'Crea losas automáticamente detectando contornos formados por vigas y columnas seleccionadas, compatible con losas macizas y aligeradas.' },
        { nombre: 'Falso piso / suelo',  desc: 'Recorta pisos o losas creando aberturas en el contorno basadas en la geometría de los elementos que intersectan la losa.' },
      ]},
      { nombre: 'Solado / Relleno', icono: '🧱', funciones: [
        { nombre: 'Generación de solado', desc: 'Crea solados de concreto pobre bajo zapatas y vigas con espesor configurable, recortando automáticamente en intersecciones con otros elementos.' },
        { nombre: 'Relleno estructural',  desc: 'Genera pisos de relleno sobre vigas o muros basándose en la geometría de los elementos anfitrión seleccionados.' },
      ]},
      { nombre: 'Losa Aligerada', icono: '🏛️', funciones: [
        { nombre: 'Dist. de ladrillos',      desc: 'Coloca ladrillos de techo en losas aligeradas automáticamente, calculando posiciones óptimas según dirección y espaciamiento, y mostrando reporte de cantidad total.' },
        { nombre: 'Dist. vigas secundarias', desc: 'Coloca vigas soleras en el perímetro de losas aligeradas con margen configurable desde el borde y longitud ajustada automáticamente al contorno.' },
        { nombre: 'Dist. de fondos',         desc: 'Coloca tablas de encofrado en losas aligeradas definiendo tipo, dirección, margen y espaciamiento, calculando dimensiones automáticamente por losa.' },
        { nombre: 'Dist. de puntales',       desc: 'Distribuye puntales de soporte bajo vigas soleras con espaciamiento configurable. Cada puntal incluye base, cuerpo y cabeza con altura calculada automáticamente.' },
      ]},
      { nombre: 'Acero en Losa', icono: '⚙️', funciones: [
        { nombre: 'Acero positivo',       desc: 'Coloca acero positivo en la cara inferior de losas nervadas, con configuración de tipo de barra, dirección, espaciamiento, recubrimiento y extensiones en extremos.' },
        { nombre: 'Acero negativo',       desc: 'Coloca acero negativo en la cara superior de losas nervadas sobre apoyos, con opciones de armado extremo a extremo o bastones de longitud configurable.' },
        { nombre: 'Acero de temperatura', desc: 'Distribuye acero de temperatura en la cara superior de losas a 2.5 cm del borde, extremo a extremo, para controlar el agrietamiento por retracción y cambios de temperatura.' },
        { nombre: 'Acero balancín',       desc: 'Coloca acero balancín perpendicular al acero negativo en cambios de dirección de vigas, con longitud, espaciamiento y offset vertical configurables.' },
      ]},
      { nombre: 'Cálculo de Materiales', icono: '📊', funciones: [
        { nombre: 'Material en columnas',     desc: 'Calcula volumen de concreto y materiales componentes (cemento, arena, piedra, agua) en columnas, con dosificación según Norma Peruana y porcentaje de desperdicio configurable.' },
        { nombre: 'Material en vigas',        desc: 'Calcula volumen de concreto y materiales componentes en vigas estructurales, almacenando resultados en parámetros personalizados de cada elemento.' },
        { nombre: 'Material en zapatas',      desc: 'Calcula volumen de concreto y materiales componentes para las zapatas de cimentación del proyecto.' },
        { nombre: 'Cant. de ladrillos',       desc: 'Calcula la cantidad de ladrillos de pared necesarios procesando los muros del proyecto, considerando dimensiones estándar y porcentaje de desperdicio.' },
        { nombre: 'Mortero y ladrillo techo', desc: 'Calcula materiales de mortero para tarrajeo (cemento, arena, agua) basándose en el área de muros y la proporción de mezcla configurada.' },
        { nombre: 'Ladrillos de techo',       desc: 'Calcula la cantidad de ladrillos huecos para losas aligeradas procesando las losas del proyecto según dimensiones y separación configuradas.' },
      ]},
      { nombre: 'Cálculo de Acero', icono: '🔢', funciones: [
        { nombre: 'Acero en columnas', desc: 'Calcula kg de acero longitudinal y estribos en columnas, con resultados detallados por tipo escritos en parámetros personalizados.' },
        { nombre: 'Acero en vigas',    desc: 'Estima la cantidad de acero longitudinal superior e inferior y estribos en vigas, basándose en las dimensiones y configuración de cada elemento.' },
        { nombre: 'Acero en zapatas',  desc: 'Calcula los kg de acero necesarios para la malla de refuerzo en dirección X e Y según las dimensiones de cada zapata.' },
      ]},
      { nombre: 'Precios', icono: '💰', funciones: [
        { nombre: 'Precio de concreto',      desc: 'Calcula el costo estimado de columnas aplicando un precio por m³ de concreto sobre el volumen calculado.' },
        { nombre: 'Precio de acero',         desc: 'Calcula el costo estimado del acero de refuerzo en vigas estructurales.' },
        { nombre: 'Precio por elemento',     desc: 'Calcula el costo estimado de las cimentaciones basándose en el volumen de concreto de cada zapata.' },
        { nombre: 'Precio acero columnas',   desc: 'Calcula el costo del acero de refuerzo en columnas basándose en el peso calculado y un precio por kg configurable.' },
        { nombre: 'Precio acero vigas',      desc: 'Calcula el costo del acero de refuerzo en vigas basándose en el peso calculado y un precio por kg.' },
        { nombre: 'Precio acero zapatas',    desc: 'Calcula el costo del acero de refuerzo en zapatas basándose en el peso calculado y un precio por kg.' },
      ]},
      { nombre: 'Tablas', icono: '📋', funciones: [
        { nombre: 'Tabla de columnas', desc: 'Crea una tabla de planificación (schedule) de columnas en Revit agrupadas por tipo, mostrando dimensiones, refuerzo y cantidad.' },
        { nombre: 'Tabla de vigas',    desc: 'Crea una tabla de planificación de vigas estructurales con dimensiones, refuerzo y agrupación por tipo.' },
        { nombre: 'Tabla de zapatas',  desc: 'Crea una tabla de planificación de cimentaciones (zapatas) con sus características y agrupación por tipo.' },
      ]},
      { nombre: 'Información', icono: 'ℹ️', funciones: [
        { nombre: 'Localizador de ejes',    desc: 'Asigna automáticamente el eje a columnas, vigas, muros o zapatas según su posición a la que corresponde , escribiendo el resultado en el parámetro compartido "Ejes".' },
        { nombre: 'Generación de rejillas', desc: 'Crea líneas de rejilla automáticamente basándose en columnas perimétricas, con offset exterior configurable y numeración/letras por dirección.' },
        { nombre: 'Cuadros estructurales',  desc: 'Genera cuadros de columnas, vigas o zapatas en vistas de detalle, agrupando tipos y mostrando dimensiones, refuerzo y cantidad de cada uno.' },
        { nombre: 'Creación de vistas',     desc: 'Crea vistas de detalle 2D automáticamente para cada tipo único de columna, viga o zapata, con plantilla de vista y filtro por nivel opcionales.' },
      ]},
      { nombre: 'Adicional', icono: '➕', funciones: [
        { nombre: 'Ocultar aceros',      desc: 'Oculta el acero de refuerzo en zapatas seleccionadas para obtener vistas limpias de cimentación sin el refuerzo visible.' },
        { nombre: 'Vistas 3D por eje',   desc: 'Crea vistas 3D independientes para cada eje seleccionado, mostrando únicamente los elementos que intersectan ese eje.' },
        { nombre: 'Exportar hojas',      desc: 'Exporta las hojas del proyecto a archivos DWG o PDF, procesando cada hoja y generando los archivos en la ubicación especificada.' },
        { nombre: 'Limpieza del modelo', desc: 'Detecta y elimina plantillas de vista no asignadas a ninguna vista, mostrando un reporte de cuántas plantillas fueron eliminadas.' },
      ]},
    ],
  },
  {
    id: 'arquitectura', label: '🏢 Arquitectura',
    categorias: [
      { nombre: 'Acabados', icono: '🎨', funciones: [
        { nombre: 'Tarrajeo de muros',    desc: 'Marca los muros que tendrán acabado de tarrajeo añadiendo una identificación en los comentarios del elemento para facilitar filtrado y cálculo.' },
        { nombre: 'Cálculo de mortero',   desc: 'Calcula materiales para tarrajeo de muros (cemento, arena, agua) según proporción de mezcla y espesor configurados, escribiendo resultados en parámetros de cada muro.' },
        { nombre: 'Cálculo de pintura',   desc: 'Calcula galones de pintura e imprimante para muros marcados, considerando tipo de pintura, número de manos, rendimiento y porcentaje de desperdicio.' },
        { nombre: 'Colocación cerámicos', desc: 'Calcula materiales para pisos cerámicos (piezas, pegamento, fragua) según tipo de piso, ancho de junta y porcentaje de desperdicio configurados.' },
      ]},
      { nombre: 'Vanos', icono: '🚪', funciones: [
        { nombre: 'Cuadro puertas y ventanas', desc: 'Genera automáticamente un cuadro de vanos con puertas y ventanas agrupadas por tipo, mostrando dimensiones, cantidades y referencias.' },
        { nombre: 'Cuadro acabados de piso',   desc: 'Genera una tabla de acabados de piso mostrando el tipo de piso por zona o ambiente del proyecto.' },
      ]},
      { nombre: 'Vistas', icono: '👁️', funciones: [
        { nombre: 'Vista 3D general',   desc: 'Crea una vista 3D isométrica del modelo arquitectónico completo con opción de aplicar plantilla de vista.' },
        { nombre: 'Vista 3D por nivel', desc: 'Genera vistas 3D filtradas por nivel, mostrando únicamente los elementos del piso seleccionado para facilitar la revisión visual.' },
      ]},
      { nombre: 'Muros', icono: '🧱', funciones: [
        { nombre: 'Recorte automático de muros', desc: 'Recorta automáticamente los muros que intersectan columnas para que terminen en la cara del elemento, evitando interferencias en el modelo BIM.' },
        { nombre: 'Muros en espacios cerrados',  desc: 'Crea muros perimetrales automáticamente en rooms definidos en el proyecto, basándose en la delimitación de ambientes existentes.' },
      ]},
      { nombre: 'Información', icono: 'ℹ️', funciones: [
        { nombre: 'Información de modelo',    desc: 'Genera una vista 3D con, parametro y datos relevantes  cada elemento selecionado del proyecto para verificación .' },
        { nombre: 'Aplicación de plantillas', desc: 'Aplica plantillas de vista a múltiples vistas simultáneamente para garantizar consistencia visual en todo el proyecto.' },
        { nombre: 'Creación de láminas',      desc: 'Crea hojas de plano para organizar las vistas del proyecto con estructura lista para ploteo o publicación.' },
        { nombre: 'Ordenamiento de vistas',   desc: 'Reorganiza las vistas dentro de una hoja de plano según criterio definido (nombre, tipo o nivel) para facilitar la organización de planos complejos.' },
        { nombre: 'Editor de patrones',       desc: 'Crea y modifica patrones de relleno personalizados para usar en regiones filled y detalles constructivos del proyecto.' },
      ]},
    ],
  },
  {
    id: 'sanitarias', label: '🚿 Sanitarias', enDesarrollo: true,
    categorias: [
      { nombre: 'Tuberías',    icono: '🔧', enDesarrollo: true, funciones: [{ nombre: 'Modelado de redes sanitarias', desc: 'Funciones de modelado y etiquetado de tuberías sanitarias. Próximamente disponible.' }] },
      { nombre: 'Cálculo',     icono: '📐', enDesarrollo: true, funciones: [{ nombre: 'Cálculo hidráulico',           desc: 'Cálculo hidráulico por método Hunter, caudales y dimensionamiento de tanques. Próximamente disponible.' }] },
      { nombre: 'Información', icono: '📄', enDesarrollo: true, funciones: [{ nombre: 'Cuadros sanitarios',           desc: 'Cuadros de aparatos sanitarios para documentación de planos. Próximamente disponible.' }] },
    ],
  },
  {
    id: 'electricas', label: '⚡ Eléctricas', enDesarrollo: true,
    categorias: [
      { nombre: 'Tableros',    icono: '🔌', enDesarrollo: true, funciones: [{ nombre: 'Gestión de tableros eléctricos',      desc: 'Funciones de tableros eléctricos y circuitos. Próximamente disponible.' }] },
      { nombre: 'Cálculo',     icono: '⚡', enDesarrollo: true, funciones: [{ nombre: 'Cálculo de carga y caída de tensión', desc: 'Cálculo eléctrico de carga, caída de tensión e iluminancia. Próximamente disponible.' }] },
      { nombre: 'Información', icono: '📄', enDesarrollo: true, funciones: [{ nombre: 'Cuadros eléctricos',                  desc: 'Cuadros de luminarias y verificación CNE para documentación de planos. Próximamente disponible.' }] },
    ],
  },
]

export const tabColors: Record<string, {
  active: string; catBorder: string; catBg: string
  fnBorder: string; fnBg: string; fnText: string; dot: string
  sidebar: string; sidebarActive: string; sidebarText: string
}> = {
  estructura:   {
    active: 'bg-blue-700 text-white',
    catBorder: 'border-blue-200', catBg: 'bg-blue-700',
    fnBorder: 'border-blue-100', fnBg: 'bg-blue-50', fnText: 'text-blue-700',
    dot: 'bg-blue-500',
    sidebar: 'hover:bg-blue-50 hover:text-blue-700',
    sidebarActive: 'bg-blue-50 text-blue-700 border-l-4 border-blue-600',
    sidebarText: 'text-blue-700',
  },
  arquitectura: {
    active: 'bg-purple-700 text-white',
    catBorder: 'border-purple-200', catBg: 'bg-purple-700',
    fnBorder: 'border-purple-100', fnBg: 'bg-purple-50', fnText: 'text-purple-700',
    dot: 'bg-purple-500',
    sidebar: 'hover:bg-purple-50 hover:text-purple-700',
    sidebarActive: 'bg-purple-50 text-purple-700 border-l-4 border-purple-600',
    sidebarText: 'text-purple-700',
  },
  sanitarias:   {
    active: 'bg-cyan-700 text-white',
    catBorder: 'border-cyan-200', catBg: 'bg-cyan-700',
    fnBorder: 'border-cyan-100', fnBg: 'bg-cyan-50', fnText: 'text-cyan-700',
    dot: 'bg-cyan-400',
    sidebar: 'hover:bg-cyan-50 hover:text-cyan-700',
    sidebarActive: 'bg-cyan-50 text-cyan-700 border-l-4 border-cyan-600',
    sidebarText: 'text-cyan-700',
  },
  electricas:   {
    active: 'bg-yellow-600 text-white',
    catBorder: 'border-yellow-200', catBg: 'bg-yellow-600',
    fnBorder: 'border-yellow-100', fnBg: 'bg-yellow-50', fnText: 'text-yellow-700',
    dot: 'bg-yellow-400',
    sidebar: 'hover:bg-yellow-50 hover:text-yellow-700',
    sidebarActive: 'bg-yellow-50 text-yellow-700 border-l-4 border-yellow-500',
    sidebarText: 'text-yellow-700',
  },
}