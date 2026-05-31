import { Clock, ArrowUpRight } from "lucide-react"

const posts = [
  {
    date: "31 мар 2023",
    readTime: "12 мин",
    title: "CSR, SSG, SSR — про рендеринг приложений на примерах",
    excerpt:
      "Практические примеры рендеринга фронтенд приложений",
    tags: ["CSR", "SSG", "SSR"],
    link: {
      url: 'https://habr.com/ru/companies/alfa/articles/725626/',
      target: "_blank",
    }
  },
]

export function BlogPosts() {
  return (
    <section id="blog" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 font-mono text-sm tracking-wider text-primary">
          {"// blog"}
        </div>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Последние статьи
        </h2>
        <p className="mb-16 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Пишу о веб-разработке, архитектуре приложений и инструментах,
          которые использую каждый день.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="mb-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href={post.link.url} target={post.link.target} className="inline-flex items-center gap-1 text-sm text-primary">
                Читать
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
