"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastY) {
        setVisible(false);
        setMenuOpen(false); // cierra el menú al hacer scroll
      } else {
        setVisible(true);
      }
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const links = [
    { href: "/blog",       label: "Blog" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/addin-cap",  label: "Addin CAP" },
    { href: "/contacto",   label: "Contacto" },
  ];

  return (
    <header
      className={`w-full border-b bg-white fixed top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Barra principal */}
      <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-700 tracking-tight hover:border-b-2 hover:border-blue-700 pb-0.5 transition-all"
        >
          ConstruCAP
        </Link>

        {/* Nav desktop — oculto en móvil */}
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-semibold text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-0.5 transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Botón hamburguesa — solo en móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-2 bg-white">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-blue-700 py-3 border-b border-gray-50 last:border-0 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
