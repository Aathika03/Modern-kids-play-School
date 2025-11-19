// src/components/layout/Navbar.tsx
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [logoVisible, setLogoVisible] = useState(true)

  return (
    <header style={{ backgroundColor: '#D3ECF6' }}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
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
          <span className="font-bold text-sm tracking-wider">LITTLE FLOWER</span>
        </div>

        <nav>
          <ul className="hidden md:flex items-center gap-10 uppercase text-lg font-medium">
            <li>
              <Link href="/programs"><span>Programs</span></Link>
            </li>
            <li>
              <Link href="/admissions"><span>Admissions</span></Link>
            </li>
            <li>
              <Link href="/philosophy"><span>Our Philosophy</span></Link>
            </li>
            <li>
              <Link href="/gallery"><span>Gallery</span></Link>
            </li>
            <li>
              <Link href="/contact"><span>Contact Us</span></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
