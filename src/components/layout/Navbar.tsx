// src/components/layout/Navbar.tsx
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [logoVisible, setLogoVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#cae3ecff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">

        {/* LOGO + TEXT */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          {logoVisible ? (
            <img
              src="/logo.png"
              alt="Little Flower"
              className="h-12 w-12 object-contain"
              onError={() => setLogoVisible(false)}
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-[#6fc3b6] flex items-center justify-center text-white font-bold">
              LF
            </div>
          )}

          <span className="font-bold text-sm sm:text-base tracking-wider">
            LITTLE FLOWER
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 uppercase text-lg font-medium">
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/philosophy">Our Philosophy</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON (Custom SVG Icons) */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            // Close Icon (X)
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Menu Icon (Hamburger)
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#D3ECF6] px-6 pb-5">
          <ul className="flex flex-col gap-4 text-base font-medium uppercase">
            <li><Link href="/programs" onClick={() => setMenuOpen(false)}>Programs</Link></li>
            <li><Link href="/admissions" onClick={() => setMenuOpen(false)}>Admissions</Link></li>
            <li><Link href="/philosophy" onClick={() => setMenuOpen(false)}>Our Philosophy</Link></li>
            <li><Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

