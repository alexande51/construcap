export type PostMeta = {
  slug: string
  titulo: string
  resumen: string
  fecha: string
  categoria: 'Novedades' | 'Tutorial' | 'BIM' | 'Revit'
  tiempo: string
  imagen?: string  // ← opcional, si no hay → muestra gradiente
}

export const posts: PostMeta[] = [
  {
    slug: 'cap-tools-v22-lanzamiento',
    titulo: 'CAP Tools v2.2 — Ya disponible para Revit 2025 y 2026',
    resumen: 'La versión más estable hasta ahora. Más de 60 comandos optimizados, compatibilidad con Revit 2026 y mejoras en el cálculo de materiales.',
    fecha: '15 abril 2026',
    categoria: 'Novedades',
    tiempo: '3 min',
    //imagen: '/images/blog/cap-tools-v22-lanzamiento.jpg',
  },
  {
    slug: 'importar-columnas-desde-excel',
    titulo: 'Cómo importar columnas desde Excel a Revit con CAP Tools',
    resumen: 'Guía paso a paso para cargar columnas estructurales masivamente desde una hoja de cálculo directamente en tu modelo Revit.',
    fecha: '10 abril 2026',
    categoria: 'Tutorial',
    tiempo: '5 min',
    //imagen: '/images/blog/importar-columnas-desde-excel.jpg',
  },
  {
    slug: 'que-es-bim-y-por-que-usarlo',
    titulo: '¿Qué es BIM y por qué todo ingeniero debería usarlo?',
    resumen: 'Una introducción clara al flujo de trabajo BIM, sus ventajas frente al CAD tradicional y cómo empezar con Revit en proyectos reales.',
    fecha: '2 abril 2026',
    categoria: 'BIM',
    tiempo: '6 min',
    //imagen: '/images/blog/que-es-bim-y-por-que-usarlo.jpg',
  },
]
