import { Proyecto } from '@/types/proyecto';

const proyecto: Proyecto = {
  slug: 'vivienda-unifamiliar-surquillo',
  titulo: 'Vivienda Unifamiliar - Talara, Piura',
  categoria: 'Planos',
  descripcion: 'Vivienda unifamiliar de 3 pisos en Talara, Piura con azotea habitable. Elaboracion de planos de arquitectura, estructura e instalaciones para licencia de construccion.',
  // portada: '/images/proyectos/vivienda-unifamiliar-surquillo.jpg',
  tecnologias: ['AutoCAD', 'Revit', 'Planos', 'Licencia'],
  fecha: '2025-03-12',
  destacado: false,
  secciones: [
    { tipo: 'texto', contenido: 'El proyecto en Talara incluyo la elaboracion completa del expediente tecnico para licencia de edificacion, con planos de arquitectura, estructuras e instalaciones.' },
    { tipo: 'imagen', imagen: '/images/proyectos/vivienda-unifamiliar-surquillo.jpg', alt: 'Vista frontal vivienda Talara', caption: 'Fachada de 3 pisos con azotea habitable' },
  ],
};

export default proyecto;
