"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, LINE_URL } from "@/lib/navigation"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
      <div className="container-anin flex items-center justify-between h-16 md:h-18">

        {/* Logo */}
<Link href="/" className="flex items-center shrink-0">
  <Image
    src="/images/logo/ANIN.png"
    alt="ANIN Pharmacy"
    width={100}
    height={40}
    priority
    className="h-10 w-auto object-contain"
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-blue-700 ${
                pathname === link.href
                  ? "text-blue-700 border-b-2 border-blue-700 pb-0.5"
                  : "text-neutral-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#06C755] hover:bg-[#05a847] text-white text-base font-medium px-4 py-2 rounded-lg transition-colors shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z"/>
          </svg>
          ปรึกษาเภสัชกร
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-neutral-500 hover:text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="เปิดเมนู"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium py-2 border-b border-border-light transition-colors ${
                pathname === link.href
                  ? "text-blue-700"
                  : "text-neutral-500 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#06C755] text-white text-base font-medium px-4 py-3 rounded-lg mt-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z"/>
            </svg>
            ปรึกษาเภสัชกร
          </a>
        </div>
      )}
    </header>
  )
}