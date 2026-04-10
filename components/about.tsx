const skills = [
  "React",
  "Angular",
  "Next.js",
  ".Net",
  "Java",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "Git",
  "REST APIs",
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Sobre mí
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              Soy Desarrollador Full Stack con experiencia en Angular, React,
              Next.js, .Net, java y TypeScript, enfocado en la creación de
              aplicaciones web completas, modernas y escalables, cuidando tanto
              la experiencia del usuario como la lógica del backend.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Cuento con experiencia en el desarrollo de interfaces intuitivas,
              construcción de APIs REST, manejo de bases de datos y creación de
              arquitecturas eficientes. Aplico buenas prácticas como clean code,
              diseño responsive, accesibilidad y optimización del rendimiento en
              todo el ciclo de desarrollo.
              
               Me caracterizo por mi enfoque en la
              mejora continua, la resolución de problemas y la colaboración
              efectiva en equipo, buscando siempre aportar valor en proyectos
              reales de alto impacto.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Cuando no estoy programando, me encontrarás jugando videojuegos,
              aprendiendo desarrollo de videojuegos o explorando nuevas
              tecnologías.
            </p>

            <div className="mt-12">
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Tecnologías
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
