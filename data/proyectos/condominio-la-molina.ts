import { Proyecto } from '@/types/proyecto';

const proyecto: Proyecto = {
  slug: 'condominio-la-molina',
  titulo: 'Condominio Residencial - Catacaos, Piura',
  categoria: 'Residencial',
  descripcion: 'Condominio de  casas adosadas en Catacaos, Piura con areas comunes, piscina y estacionamientos.',
  // portada: '/images/proyectos/condominio-la-molina.jpg',
  tecnologias: ['Revit', 'BIM', 'Planos', 'Supervision'],
  fecha: '2025-05-18',
  destacado: true,
  secciones: [
    { tipo: 'texto', contenido: 'Diseno integral del condominio en Catacaos con planos de arquitectura, estructuras e instalaciones.' },
    { tipo: 'imagen', imagen: '/images/proyectos/condominio-la-molina.jpg', alt: 'Vista del condominio', caption: 'Ingreso principal' },
  ],
};

export default proyecto;