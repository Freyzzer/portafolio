"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sun03Icon, MoonIcon } from "@hugeicons/core-free-icons"

const navLinks = [
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const tittle = "Frey."
  const lastChar = "_"

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("light", savedTheme === "light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light", newTheme === "light")
  }
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4 max-sm:px-6 sm:px-6 lg:px-0">
        <a href="#" className="font-mono text-xl tracking-widest uppercase text-foreground">
          {tittle}<span className="text-muted-foreground animate-pulse">{lastChar}</span>
        </a>

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs tracking-wider uppercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="text-muted-foreground transition-colors hover:text-foreground flex items-center"
                aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                <HugeiconsIcon 
                  icon={theme === "dark" ? Sun03Icon : MoonIcon} 
                  size={20} 
                  color="currentColor" 
                  strokeWidth={1.5} 
                />
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <HugeiconsIcon 
              icon={theme === "dark" ? Sun03Icon : MoonIcon} 
              size={20} 
              color="currentColor" 
              strokeWidth={1.5} 
            />
          </button>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background" aria-label="Navegación móvil">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm tracking-wider uppercase text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
