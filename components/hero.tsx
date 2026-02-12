import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">
          Desarrollador Frontend
        </p>
        <h1 className="text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Creando <em className="font-serif italic text-muted-foreground">interfaces</em>.{" "}
          <br className="hidden sm:block" />
          Construyendo software pulido{" "}
          <br className="hidden sm:block" />
          y experiencias web.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Diseño y desarrollo productos digitales reflexivos con un enfoque en código
          limpio, interacciones suaves y atención pixel perfecta al detalle.
        </p>
        <div className="mt-12 flex items-center gap-6">
          <a
            href="#projects"
            className="inline-flex  items-center gap-2 border border-foreground bg-accent-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-texto transition-colors hover:bg-transparent hover:text-foreground"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Contactar
          </a>
        </div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Desplazar a sección sobre mí"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
