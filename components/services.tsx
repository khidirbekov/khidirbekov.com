import { Layout, Smartphone, RefreshCw, MessageSquare, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Веб-приложения",
    description:
      "Разработка SPA и SSR-приложений на React/Next.js с современной архитектурой, оптимизированных для производительности.",
    tags: ["React", "Next.js", "TypeScript"],
    price: "от 150 000 ₽",
  },
  {
    icon: Smartphone,
    title: "Лендинги и сайты",
    description:
      "Адаптивные лендинги с анимациями, SEO-оптимизацией и интеграцией с CRM-системами.",
    tags: ["Tailwind", "Framer Motion", "SEO"],
    price: "от 50 000 ₽",
  },
  {
    icon: RefreshCw,
    title: "API и бэкенд",
    description:
      "Проектирование и разработка REST/GraphQL API, микросервисов и серверной логики.",
    tags: ["Node.js", "NestJS", "PostgreSQL"],
    price: "от 100 000 ₽",
  },
  {
    icon: MessageSquare,
    title: "Консультации",
    description:
      "Code-review, архитектурный аудит, менторинг по React/TypeScript и помощь с техническими решениями.",
    tags: ["Аудит", "Менторинг", "Code Review"],
    price: "от 5 000 ₽/час",
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 font-mono text-sm tracking-wider text-primary">
          {"// services"}
        </div>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Услуги
        </h2>
        <p className="mb-16 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Предлагаю услуги по разработке под ключ. От идеи до деплоя —
          полный цикл создания цифрового продукта.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                    <span className="font-mono text-xs text-primary">{service.price}</span>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:underline"
              >
                Заказать
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
