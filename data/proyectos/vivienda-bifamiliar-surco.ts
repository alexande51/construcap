import { Proyecto } from '@/types/proyecto';

const proyecto: Proyecto = {
  slug: 'vivienda-bifamiliar-surco',
  titulo: 'Vivienda Bifamiliar - Piura Centro',
  categoria: 'Planos',
  descripcion: 'Proyecto de vivienda bifamiliar de 3 pisos en el centro de Piura. Dos unidades independientes con accesos diferenciados, planos completos y supervision de obra.',
  // portada: '/images/proyectos/vivienda-bifamiliar-surco.jpg',
  tecnologias: ['Revit', 'BIM', 'Planos', 'Supervision'],
  fecha: '2025-09-20',
  destacado: false,
  secciones: [
    { tipo: 'texto', contenido: 'Se desarrollaron planos de arquitectura, estructura e instalaciones para dos unidades de vivienda independientes dentro de un mismo lote en Piura.' },
    { tipo: 'imagen', imagen: '/images/proyectos/vivienda-bifamiliar-surco.jpg', alt: 'Vista frontal bifamiliar', caption: 'Fachada con accesos independientes por nivel' },
  ],
};

export default proyecto;
