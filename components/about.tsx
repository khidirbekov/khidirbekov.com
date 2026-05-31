import { Fragment } from "react"
import { ArrowRight, ArrowDown, Code2, Globe, Zap, Server } from "lucide-react"
import { CodeBackground } from "@/components/code-background"

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Next.js, TypeScript, Tailwind CSS, Vue.js",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Express, NestJS, PHP",
  },
  {
    icon: Globe,
    title: "DevOps",
    description: "Docker, CI/CD, Vercel",
  },
  {
    icon: Zap,
    title: "Базы данных",
    description: "PostgreSQL, MongoDB, Redis, MySQL",
  },
]

const stats = [
  { value: `${new Date().getFullYear() - 2019}+`, label: "лет опыта" },
  { value: "20+", label: "проектов" },
]

const experience = [
  {
    name: "WebAnt",
    url: "https://webant.ru",
    role: "Frontend Developer",
    period: "2019 — 2021",
    mark: "W",
    accent: "from-orange-500/15 to-orange-500/0",
    markColor: "text-orange-500 border-orange-500/30 bg-orange-500/10",

  },
  {
    name: "CSSSR",
    url: "https://csssr.com",
    role: "Senior Frontend Developer",
    period: "2021 — 2025",
    mark: "C",
    accent: "from-primary/20 to-primary/0",
    markColor: "text-primary border-primary/30 bg-primary/10",
  },
  {
    name: "Centicore",
    url: "https://centicore.ru",
    role: "Senior Frontend Developer",
    period: "2025 — наст. время",
    mark: "C",
    accent: "from-sky-500/15 to-sky-500/0",
    markColor: "text-sky-500 border-sky-500/30 bg-sky-500/10",
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <CodeBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-4 font-mono text-sm tracking-wider text-primary">
          {"// about"}
        </div>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Обо мне
        </h2>
        <p className="mb-16 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Занимаюсь коммерческой разработкой с 2018 года. Прошёл путь от
          junior-разработчика до тимлида. Люблю чистый код, архитектурные
          решения и делиться знаниями с сообществом.
        </p>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-card p-6 text-center"
            >
              <div className="mb-1 font-mono text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <skill.icon className="mb-4 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mb-2 font-semibold text-foreground">
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-16">
          <div className="mb-4 font-mono text-sm tracking-wider text-primary">
            {"// experience"}
          </div>
          <h3 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Где работал
          </h3>

          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-stretch">
            {experience.map((company, idx) => (
              <Fragment key={company.name}>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex-1 overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${company.accent} opacity-60`}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border font-mono text-2xl font-bold ${company.markColor}`}
                    >
                      {company.mark}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <h4 className="truncate font-semibold text-foreground">
                          {company.name}
                        </h4>
                        <span className="font-mono text-xs text-muted-foreground">
                          {new URL(company.url).hostname}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-foreground/80">
                        {company.role}
                      </p>
                      <p className="mt-2 font-mono text-xs text-muted-foreground">
                        {company.period}
                      </p>
                    </div>
                  </div>
                </a>

                {idx < experience.length - 1 && (
                  <div
                    aria-hidden
                    className="flex shrink-0 items-center justify-center text-muted-foreground"
                  >
                    <ArrowRight className="hidden h-6 w-6 md:block" />
                    <ArrowDown className="h-6 w-6 md:hidden" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
