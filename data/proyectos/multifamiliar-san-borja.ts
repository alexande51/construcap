import { Proyecto } from '@/types/proyecto';

const proyecto: Proyecto = {
  slug: 'multifamiliar-san-borja',
  titulo: 'Edificio Multifamiliar - Sullana, Piura',
  categoria: 'Supervisión',
  descripcion: 'Edificio multifamiliar de 4 pisos con 4 departamentos en Sullana, Piura. Modelado BIM completo, planos de todas las especialidades y supervision tecnica de obra.',
  // portada: '/images/proyectos/multifamiliar-san-borja.jpg',
  tecnologias: ['Revit', 'BIM', 'Estructuras', 'Supervision'],
  fecha: '2025-07-05',
  destacado: true,
  secciones: [
    { tipo: 'texto', contenido: 'Proyecto integral en Sullana que incluyo modelado BIM en Revit, coordinacion de especialidades, deteccion de interferencias y supervision de obra hasta la recepcion final.' },
    { tipo: 'imagen', imagen: '/images/proyectos/multifamiliar-san-borja.jpg', alt: 'Fachada del multifamiliar', caption: 'Edificio de 6 pisos con estacionamiento en semisotano' },
  ],
};

export default proyecto;
