import { notFound } from "next/navigation"
import Link from "next/link"
import { posts } from "@/data/blog/index"

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

const categoriaColor: Record<string, string> = {
  Novedades: "bg-blue-50 text-blue-700 border-blue-100",
  Tutorial:  "bg-green-50 text-green-700 border-green-100",
  BIM:       "bg-purple-50 text-purple-700 border-purple-100",
  Revit:     "bg-orange-50 text-orange-700 border-orange-100",
  CAP:       "bg-rose-50 text-rose-700 border-rose-100",
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const meta = posts.find((p) => p.slug === slug)
  if (!meta) return notFound()

  const { content } = await import(`@/data/blog/posts/${meta.slug}`)

  const html = content
    .split("\n")
    .map((line: string) => {
      if (line.startsWith("## "))  return `<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">${line.slice(3)}</h2>`
      if (line.startsWith("### ")) return `<h3 class="text-base sm:text-lg font-bold text-gray-800 mt-6 mb-2">${line.slice(4)}</h3>`
      if (line.startsWith("- "))   return `<li class="text-gray-600 text-sm leading-relaxed ml-4 list-disc">${line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</li>`
      if (line.trim() === "")      return `<br/>`
      return `<p class="text-gray-600 text-sm leading-relaxed">${line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</p>`
    })
    .join("\n")

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-600 transition-colors mb-8 sm:mb-10">
          ← Volver al blog
        </Link>

        <div className="mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoriaColor[meta.categoria] ?? "bg-gray-50 text-gray-600 border-gray-100"}`}>
              {meta.categoria}
            </span>
            <span className="text-xs text-gray-400">{meta.tiempo} lectura</span>
            <span className="text-xs text-gray-400">{meta.fecha}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-4">{meta.titulo}</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{meta.resumen}</p>
        </div>

        <div className="border-t border-gray-100 mb-8 sm:mb-10" />

        <article dangerouslySetInnerHTML={{ __html: html }} />

        <div className="mt-12 sm:mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-6 text-center">
          <p className="text-sm font-bold text-gray-900 mb-1">¿Quieres probar CAP Tools?</p>
          <p className="text-xs text-gray-500 mb-4">Licencia anual S/ 80 — Compatible con Revit 2025 y 2026</p>
          <a
            href="https://wa.me/51900103641"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-700 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all"
          >
            Contactar por WhatsApp →
          </a>
        </div>

      </div>
    </main>
  )
}
