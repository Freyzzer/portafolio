"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  Linkedin02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

const socials = [
  { label: "GitHub", href: "https://github.com/Freyzzer", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/freyzzer-george-valencia-murillo-b891951aa/",
    icon: Linkedin02Icon,
  },
  { label: "Email", href: "mailto:freyzzergvm12@gmail.com", icon: Mail01Icon },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Contacto
            </p>
          </div>
          <div>
            <p className="text-2xl font-light leading-relaxed text-foreground md:text-3xl text-balance">
              ¿Interesado en trabajar juntos? Complete el formulario y me pondré
              en contacto con usted.
            </p>

            <form
              action="https://formspree.io/f/xnjbpvqr"
              method="POST"
              className="mt-12 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-muted-foreground bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-muted-foreground bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-muted-foreground bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-muted-foreground bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`inline-flex items-center gap-2 border px-8 py-3 font-mono text-xs uppercase tracking-widest transition-colors ${
                  isFormValid
                    ? "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground cursor-pointer"
                    : "border-muted-foreground bg-muted-foreground/20 text-muted-foreground cursor-not-allowed"
                }`}
              >
                Enviar Mensaje
              </button>
            </form>

            <div className="mt-16 flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <HugeiconsIcon
                    icon={social.icon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
