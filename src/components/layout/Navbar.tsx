// src/components/layout/Navbar.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const MENU = [
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Our Philosophy", href: "/philosophy" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [logoVisible, setLogoVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [logoActive, setLogoActive] = useState(false); // hover or touch state
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // normalize paths: remove query/hash and trailing slash
  const normalize = (path: string) =>
    (path || "").split("?")[0].split("#")[0].replace(/\/$/, "") || "/";

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setMenuOpen(false);

    const current = normalize(router.asPath);
    const target = normalize(href);

    // prevent navigation when trying to go to the same path
    if (current === target) {
      e.preventDefault();
      return;
    }
  };

  // Logo interaction handlers (hover + touch)
  const triggerLogoPulse = (duration = 600) => {
    setLogoActive(true);
    window.clearTimeout((triggerLogoPulse as any)._timeoutId);
    (triggerLogoPulse as any)._timeoutId = window.setTimeout(() => setLogoActive(false), duration);
  };

  return (
    <header
      style={{ backgroundColor: "#cae3ecff", transform: `translateY(${scrollY * 0.05}px)` }}
      className="shadow-sm transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        {/* LOGO - updated animation & touch support */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center gap-3 select-none"
          onMouseEnter={() => triggerLogoPulse(800)}
          onMouseLeave={() => setLogoActive(false)}
          onTouchStart={() => triggerLogoPulse(800)}
        >
          {/* Logo container */}
          <div
            className={`flex items-center justify-center rounded-full transition-transform duration-300 will-change-transform
                        ${logoActive ? "scale-[1.12] -translate-y-1 rotate-3 shadow-2xl" : "scale-100 rotate-0"}
                        `}
            style={{ width: 48, height: 48 }}
          >
            {logoVisible ? (
              <img
                src="/logo.png"
                alt="Little Flower"
                className={`h-12 w-12 object-contain transition-transform duration-300 ${logoActive ? "rotate-6" : "rotate-0"}`}
                onError={() => setLogoVisible(false)}
                draggable={false}
              />
            ) : (
              <div
                className={`h-12 w-12 rounded-full bg-[#6fc3b6] flex items-center justify-center text-white font-bold transition-all duration-300
                            ${logoActive ? "scale-[1.08] shadow-md" : ""}`}
              >
                LF
              </div>
            )}
          </div>

          {/* Logo text */}
          <span
            className={`font-bold transition-all duration-300 tracking-wider select-none
                        ${logoActive ? "text-[#0e5964] scale-105" : "text-black"}`}
            aria-hidden={false}
          >
            LITTLE FLOWER
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 uppercase text-lg font-medium">
            {MENU.map(item => (
              <li key={item.href} className="relative group hover:text-[#1f556b] transition duration-300">
                <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1f556b] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        <button className="md:hidden p-2 hover:scale-110 transition" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`md:hidden bg-[#D3ECF6] px-6 pb-5 overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col gap-4 text-base font-medium uppercase pt-4">
          {MENU.map(item => (
            <li key={item.href}>
              <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
