import { Proyecto } from '@/types/proyecto';

const proyecto: Proyecto = {
  slug: 'vivienda-unifamiliar-miraflores',
  titulo: 'Vivienda Unifamiliar - Castilla, Piura',
  categoria: 'Estructuras',
  descripcion: 'Diseno y supervision de vivienda unifamiliar de 2 pisos en el distrito de Castilla, Piura. Incluye planos arquitectonicos, estructurales, sanitarios y electricos con modelado BIM completo.',
  // portada: '/images/proyectos/vivienda-unifamiliar-miraflores.jpg',
  tecnologias: ['Revit', 'BIM', 'Planos', 'Supervision'],
  fecha: '2025-11-10',
  destacado: true,
  secciones: [
    { tipo: 'texto', contenido: 'El proyecto contemplo levantamiento de planos arquitectonicos y estructurales, coordinacion de especialidades sanitarias y electricas, y supervision de obra en Castilla, Piura.' },
    { tipo: 'imagen', imagen: '/images/proyectos/vivienda-unifamiliar-miraflores.jpg', alt: 'Vista frontal', caption: 'Fachada principal con acabados modernos' },
  ],
};

export default proyecto;
