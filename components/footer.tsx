export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          {"Diseñado Designed & Built with care. Construido con cuidado."}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {"\u00A9"} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
