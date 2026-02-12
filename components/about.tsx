const skills = [
  "React",
  "Angular",
  "Next.js",
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
              Soy Desarrollador Frontend con experiencia en Angular, React y
              TypeScript, especializado en la creación de interfaces modernas,
              rápidas y centradas en la experiencia del usuario para
              aplicaciones web y móviles.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Cuento con experiencia en el desarrollo de componentes
              reutilizables, integración de APIs REST y aplicación de buenas
              prácticas como clean code, diseño responsive y accesibilidad. Me
              caracterizo por mi enfoque en la mejora continua, la colaboración
              efectiva en equipo y la búsqueda constante de crecimiento
              profesional a través de proyectos reales de alto impacto.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Cuando no estoy programando, me encontrarás jugando videojuegos, aprendiendo desarrollo de videojuegos o
              explorando nuevas tecnologías.
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
