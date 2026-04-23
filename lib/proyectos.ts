import { Proyecto } from "@/types/proyecto";
import viviendaUnifamiliarMiraflores from "@/data/proyectos/vivienda-unifamiliar-miraflores";
import viviendaBifamiliarSurco from "@/data/proyectos/vivienda-bifamiliar-surco";
import multifamiliarSanBorja from "@/data/proyectos/multifamiliar-san-borja";
import condominioLaMolina from "@/data/proyectos/condominio-la-molina";
import viviendaUnifamiliarSurquillo from "@/data/proyectos/vivienda-unifamiliar-surquillo";
import multifamiliarJesusMaria from "@/data/proyectos/multifamiliar-jesus-maria";

const todos: Proyecto[] = [
  viviendaUnifamiliarMiraflores,
  viviendaBifamiliarSurco,
  multifamiliarSanBorja,
  condominioLaMolina,
  viviendaUnifamiliarSurquillo,
  multifamiliarJesusMaria,
];

export async function getProyectos(): Promise<Proyecto[]> {
  return todos.sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
}

export async function getProyectoPorSlug(
  slug: string
): Promise<Proyecto | undefined> {
  return todos.find((p) => p.slug === slug);
}
