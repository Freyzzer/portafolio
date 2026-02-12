const experiences = [
  {
    period: "Enero 2025 — Julio 2025",
    role: "Practicante de Desarrollo Frontend",
    company: "Pragma Company",
    description:["Desarrollé interfaces web utilizando Angular, HTML5, CSS3 y TypeScript, aplicando principios de usabilidad y diseño responsive."
      , "Implementé componentes reutilizables y estructuras modulares, mejorando la mantenibilidad y escalabilidad del frontend.",
      "Consumí APIs REST y manejé estados de la aplicación siguiendo buenas prácticas.",
      "Refactoricé vistas y módulos del sistema interno Creci, mejorando experiencia de usuario y consistencia visual.",
      "Colaboré con equipos de backend y QA para entregar funcionalidades completas y probadas.",
      "Participé activamente en ceremonias Scrum (dailies, planning, reviews y retrospectivas).",
      "Utilicé Git y GitLab para control de versiones y flujos de trabajo colaborativos."
    ],
    tags: ["Angular", "TypeScript", "HTML5", "CSS3", "Git", "RxJS"],
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-16">
          Experiencia
        </p>

        <div className="flex flex-col gap-0">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="group grid gap-4 border-t border-border py-10 md:grid-cols-[200px_1fr]"
            >
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                {exp.period}
              </span>

              <div>
                <h3 className="text-base font-medium text-foreground">
                  {exp.role}{" "}
                  <span className="text-muted-foreground">{"·"} {exp.company}</span>
                </h3>
                <ul className="mt-4 pl-5 list-disc">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="mt-2 list-disc text-sm leading-relaxed text-muted-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block border border-border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
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
