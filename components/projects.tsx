import { GithubIcon} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight } from "lucide-react"


const projects = [
  {
    title: "Plataforma de E-Commerce",
    description:
      "Aplicación web de ecommerce desarrollada como proyecto práctico para fortalecer habilidades en desarrollo frontend y manejo de estado. La plataforma permite a los usuarios explorar productos, aplicar filtros avanzados y gestionar un carrito de compras con autenticación de usuario.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Freyzzer/shopewave-web",
    live: "https://shopewave-2ojy1xa5k-freyzzers-projects.vercel.app/",
  },
  {
    title: "Admin panel",
    description:
      "Panel administrativo desarrollado para gestionar clientes, planes y pagos de servicios de streaming. El proyecto nació como solución a una necesidad personal, pero fue diseñado con arquitectura escalable y estructura modular para adaptarse a múltiples tipos de servicios.",
    tags: ["Next.js", "Tailwind CSS", "prisma", "supabase", "TypeScript"],
     github: "https://github.com/Freyzzer/admin-panel",
    live: "https://admin-panel-6au4qcrpt-freyzzers-projects.vercel.app",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-end justify-between">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Proyectos
          </p>
          <a
            href="https://github.com/Freyzzer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1.5"
          >
            Ver todos en GitHub <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group border-t flex flex-col items-end border-border py-10 -mx-6 px-6 transition-colors hover:bg-accent/30"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12 mb-5">
                <div className="flex shrink-0 items-baseline gap-4 md:w-52">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-20  md:ml-56 md:flex-row md:items-center md:justify-end">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block border border-border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase text-muted-foreground hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                   {project.github && (
                     <a
                       href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                       aria-label={`Ver codigo de ${project.title}`}
                     >
                       <HugeiconsIcon
                             icon={GithubIcon}
                             size={20}
                             color="currentColor"
                             strokeWidth={1.5}
                             />
                       Codigo
                     </a>
                   )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`Ver demo de ${project.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
