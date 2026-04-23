"use client";
import { useState, useEffect, useRef } from "react";

const skills = [
  { nombre: "🏗️ Autodesk Revit",  porcentaje: 92 },
  { nombre: "📐 AutoCAD",          porcentaje: 95 },
  { nombre: "📊 ETABS / SAP2000",  porcentaje: 78 },
  { nombre: "🔍 Navisworks",       porcentaje: 65 },
  { nombre: "💰 S10 Presupuestos", porcentaje: 80 },
  { nombre: "📅 MS Project",       porcentaje: 70 },
];

const softSkills = [
  { nombre: "💬 Comunicación",         porcentaje: 90 },
  { nombre: "🤝 Trabajo en Equipo",    porcentaje: 88 },
  { nombre: "🗂️ Gestión de Proyectos", porcentaje: 82 },
  { nombre: "🔧 Resolución Problemas", porcentaje: 85 },
];

const intereses = [
  { icono: "🏗️", label: "BIM" },
  { icono: "📐", label: "Estructuras" },
  { icono: "💻", label: "Tecnología" },
  { icono: "📚", label: "Libros" },
  { icono: "💡", label: "Innovación" },
  { icono: "✈️", label: "Viajes" },
  { icono: "📷", label: "Fotos" },
  { icono: "⚽", label: "Deporte" },
];

const timeline = [
  { año: "2019", hito: "Egresado de Ingeniería Civil" },
  { año: "2020", hito: "Primer empleo: Asistente de obra en proyecto residencial" },
  { año: "2021", hito: "Especialización en modelado BIM con Revit" },
  { año: "2022", hito: "Certificación en análisis estructural ETABS & SAP2000" },
  { año: "2023", hito: "Colegiatura CIP N° 367400 — inicio como freelancer" },
  { año: "2024", hito: "+20 proyectos entregados como consultor independiente" },
  { año: "2025", hito: "Lanzamiento oficial de CAP Tools para Revit" },
];

function SkillBar({ nombre, porcentaje, delay = 0 }: { nombre: string; porcentaje: number; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(porcentaje), delay); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [porcentaje, delay]);

  return (
    <div ref={ref} className="mb-5">
      <span className="text-sm font-semibold text-gray-700 mb-2 block">{nombre}</span>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: "linear-gradient(90deg, #3b82f6, #1d4ed8)" }}
        />
      </div>
    </div>
  );
}

function HeroSection() {
  const roles = ["Ing. Civil Colegiado", "Especialista en Revit", "Creador de CAP Tools", "Gestor de Proyectos", "Modelador Estructural"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center px-4 sm:px-6 py-20">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Texto */}
        <div className="text-center md:text-left">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide shadow-md shadow-blue-200">
            Ing. Civil · CIP 367400
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-3">
            Hola, soy <span className="text-blue-600">Alexander</span>
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-1 mb-6 h-10">
            <span className="text-xl sm:text-2xl font-bold text-gray-700">Soy </span>
            <span className="text-xl sm:text-2xl font-bold text-blue-600">{displayed}</span>
            <span className="w-0.5 h-7 bg-blue-600 animate-pulse ml-0.5" />
          </div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Ingeniero Civil especializado en modelado BIM con más de{" "}
            <span className="text-blue-600 font-semibold">5 años de experiencia</span> y{" "}
            <span className="text-blue-600 font-semibold">50+ proyectos</span> entregados.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <a href="https://wa.me/51900103641" target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3 rounded-xl text-sm shadow-md shadow-blue-200 hover:-translate-y-0.5 transition-all">
              Contrátame
            </a>
            <a href="#contacto"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-bold px-7 py-3 rounded-xl text-sm transition-all">
              Contacto 📩
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-3">
            {[
              { href: "https://wa.me/51900103641",        label: "💬", title: "WhatsApp" },
              { href: "mailto:alexandercp.ing@gmail.com", label: "📧", title: "Email" },
              { href: "https://construcap.net",           label: "🌐", title: "Web" },
            ].map((r, i) => (
              <a key={i} href={r.href} target="_blank" title={r.title}
                className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-600 flex items-center justify-center text-lg transition-all">
                {r.label}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar — oculto en móvil muy pequeño, visible desde sm */}
        <div className="hidden sm:flex justify-center">
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-200">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-7xl sm:text-8xl font-black text-white select-none">
                A
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-blue-50">
              <p className="text-2xl font-black text-blue-600">5+</p>
              <p className="text-xs text-gray-500 font-semibold">Años exp.</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-blue-50">
              <p className="text-2xl font-black text-blue-600">50+</p>
              <p className="text-xs text-gray-500 font-semibold">Proyectos</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleWhatsApp = () => {
    if (!form.nombre || !form.mensaje) return;
    const texto = `Hola Alexander, soy ${form.nombre} (${form.email}). ${form.mensaje}`;
    window.open(`https://wa.me/51900103641?text=${encodeURIComponent(texto)}`, "_blank");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <>
      <style>{`
        .font-righteous { font-family: "Arial Black", "Arial Bold", Arial, sans-serif; }
        .interes-card:hover { background-color: #2563eb !important; transform: translateY(-4px); }
        .interes-card:hover .interes-label { color: white !important; }
      `}</style>

      <HeroSection />

      {/* SOBRE MÍ */}
      <section id="sobremi" className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-righteous text-4xl sm:text-5xl text-gray-900 text-center mb-4">Sobre Mí</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-12 max-w-3xl mx-auto text-center">
            Soy <span className="text-blue-600 font-bold">Ingeniero Civil colegiado</span> con más de 5 años de experiencia en proyectos BIM.
            Creador de <span className="text-blue-600 font-bold">CAP Tools</span>, complemento para Revit que automatiza el modelado en las 4 especialidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Información Personal */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-righteous text-xl sm:text-2xl text-gray-800 mb-6">Información Personal</h3>
              <ul className="space-y-3">
                {[
                  ["Profesión", "Ingeniero Civil"],
                  ["CIP",       "367400"],
                  ["Ubicación", "Perú"],
                  ["Email",     "alexandercp.ing@gmail.com"],
                  ["WhatsApp",  "+51 900 103 641"],
                  ["Web",       "construcap.net"],
                  ["Estado",    "Disponible"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start sm:items-center gap-3 text-sm">
                    <strong className="text-blue-600 w-24 sm:w-28 flex-shrink-0">{k}:</strong>
                    {v === "Disponible"
                      ? <span className="bg-green-100 text-green-700 font-bold px-3 py-0.5 rounded-full text-xs">{v}</span>
                      : <span className="text-gray-600 break-all">{v}</span>
                    }
                  </li>
                ))}
              </ul>
            </div>

            {/* Intereses */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-righteous text-xl sm:text-2xl text-gray-800 mb-6">Intereses</h3>
              <div className="flex flex-wrap gap-3">
                {intereses.map((item, i) => (
                  <div key={i} className="interes-card w-[72px] h-[72px] sm:w-20 sm:h-20 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-1 cursor-default transition-all shadow-sm">
                    <span className="text-xl sm:text-2xl">{item.icono}</span>
                    <span className="interes-label text-xs font-semibold text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trayectoria */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            <h3 className="font-righteous text-xl sm:text-2xl text-gray-800 mb-8 text-center">Trayectoria</h3>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-[4.5rem] top-2 bottom-2 w-px bg-gray-200" />
              <div className="flex flex-col gap-5">
                {timeline.map((t, i) => (
                  <div key={i} className="flex items-center gap-4 relative z-10">
                    <span className="text-xs text-blue-600 font-bold w-14 text-right flex-shrink-0">{t.año}</span>
                    <div className="w-4 h-4 rounded-full bg-blue-600 flex-shrink-0 shadow-md shadow-blue-200 border-2 border-white ring-2 ring-blue-200" />
                    <div className="bg-white border border-gray-100 rounded-xl px-3 sm:px-4 py-2.5 shadow-sm flex-1">
                      <p className="text-xs sm:text-sm text-gray-700 font-medium">{t.hito}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-righteous text-4xl sm:text-5xl text-gray-900 text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
            <div>
              <h3 className="font-righteous text-xl sm:text-2xl text-gray-800 mb-8">Herramientas Técnicas</h3>
              {skills.map((s, i) => (
                <SkillBar key={i} nombre={s.nombre} porcentaje={s.porcentaje} delay={i * 100} />
              ))}
            </div>
            <div>
              <h3 className="font-righteous text-xl sm:text-2xl text-gray-800 mb-8">Habilidades Blandas</h3>
              {softSkills.map((s, i) => (
                <SkillBar key={i} nombre={s.nombre} porcentaje={s.porcentaje} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-righteous text-4xl sm:text-5xl text-gray-900 text-center mb-3">Contacto</h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            ¿Tienes un proyecto? Te respondo en menos de 24h.
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre *"
              value={form.nombre}
              onChange={e => setForm({ ...form, nombre: e.target.value })}
              className="bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder-gray-400 w-full"
            />
            <input
              type="email"
              placeholder="Tu email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder-gray-400 w-full"
            />
            <textarea
              placeholder="¿En qué te puedo ayudar? *"
              rows={5}
              value={form.mensaje}
              onChange={e => setForm({ ...form, mensaje: e.target.value })}
              className="bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all resize-none placeholder-gray-400 w-full"
            />
            <button
              onClick={handleWhatsApp}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-md shadow-blue-200 select-none w-full"
            >
              {enviado ? "✅ ¡Listo! Abriendo WhatsApp..." : "💬 Enviar por WhatsApp"}
            </button>
          </div>

          {/* Datos de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {[
              { icono: "📍", label: "Dirección", valor: "Perú" },
              { icono: "📱", label: "WhatsApp",  valor: "+51 900 103 641" },
              { icono: "📧", label: "Email",     valor: "alexandercp.ing@gmail.com" },
            ].map((c, i) => (
              <div key={i} className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
                <span className="text-2xl">{c.icono}</span>
                <p className="text-xs text-blue-600 font-bold mt-2 mb-1 uppercase tracking-wide">{c.label}</p>
                <p className="text-xs text-gray-500 break-all">{c.valor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
