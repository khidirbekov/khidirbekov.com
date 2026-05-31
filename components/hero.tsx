import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
      <div className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-sm tracking-wider text-primary">
          {"// software engineer"}
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Хаджимурад Хидирбеков
          </span>
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Разработчик с фокусом на React, TypeScript и Node.js.
          Создаю производительные веб-приложения и делюсь опытом в блоге.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL"].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary px-3 py-1 font-mono text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Заказать разработку
          </a>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Читать блог
          </a>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex animate-bounce items-center justify-center text-muted-foreground transition-colors hover:text-primary"
          aria-label="Скроллить вниз"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
      </div>
  )
}
