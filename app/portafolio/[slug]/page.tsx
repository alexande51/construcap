import { getProyectoPorSlug, getProyectos } from "@/lib/proyectos";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const proyectos = await getProyectos();
  return proyectos.map((p) => ({ slug: p.slug }));
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = await getProyectoPorSlug(slug);

  if (!proyecto) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <span className="text-sm text-gray-500">{proyecto.categoria}</span>
      <h1 className="text-4xl font-bold mt-2 mb-4">{proyecto.titulo}</h1>
      <p className="text-gray-600 text-lg mb-8">{proyecto.descripcion}</p>
    </main>
  );
}
