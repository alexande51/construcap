export type SeccionProyecto = {
  tipo: "texto" | "imagen" | "galeria" | "video";
  contenido?: string;
  imagen?: string;
  imagenes?: string[];
  videoUrl?: string;
  alt?: string;
  caption?: string;
};

export type Proyecto = {
  slug: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  portada?: string;  // 👈 quita el comentario y agrega el ? para que sea opcional
  tecnologias: string[];
  fecha: string;
  destacado?: boolean;
  secciones: SeccionProyecto[];
};
