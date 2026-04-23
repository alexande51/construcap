import FuncionesPanel   from './components/FuncionesPanel'
import PreciosAddin     from './components/PreciosAddin'
import InstalacionAddin from './components/InstalacionAddin'

export const metadata = {
  title: 'Addin CAP – CAP Tools para Revit',
  description: 'Automatiza tu flujo BIM en Revit con CAP Tools. Más de 60 comandos para estructuras, arquitectura, sanitarias y eléctricas.',
}

export default function AddinCapPage() {
  return (
    <main className="min-h-screen pt-0">
      <FuncionesPanel />
      <PreciosAddin />
      <InstalacionAddin />
    </main>
  )
}
