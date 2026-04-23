import { Proyecto } from '@/types/proyecto';

const proyecto: Proyecto = {
  slug: 'multifamiliar-jesus-maria',
  titulo: 'Edificio Multifamiliar - Paita, Piura',
  categoria: 'BIM',
  descripcion: 'Edificio multifamiliar de 4 pisos con 3 departamentos y 1 sotanos de estacionamiento en Paita, Piura. BIM, planos y supervision integral.',
  // portada: '/images/proyectos/multifamiliar-jesus-maria.jpg',
  tecnologias: ['Revit', 'BIM', 'Estructuras', 'Sanitarias'],
  fecha: '2024-12-01',
  destacado: false,
  secciones: [
    { tipo: 'texto', contenido: 'Proyecto de alta complejidad en Paita con coordinacion BIM entre arquitectura, estructura e instalaciones. Deteccion de interferencias en modelo 3D antes del inicio de obra.' },
    { tipo: 'imagen', imagen: '/images/proyectos/multifamiliar-jesus-maria.jpg', alt: 'Fachada multifamiliar Paita', caption: 'Edificio de 8 pisos con fachada de vidrio y aluminio' },
  ],
};

export default proyecto;
