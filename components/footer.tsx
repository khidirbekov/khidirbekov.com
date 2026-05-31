import { Terminal } from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/khidirbekov" },
  { label: "Telegram", href: "https://t.me/khidirbekov" },
  { label: "Habr", href: "https://habr.com/ru/users/khidirbekov/" },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              {"<dev.khidirbekov />"}
            </span>
          </div>

          <nav className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="font-mono text-xs text-muted-foreground">
            &copy; 2026 Хаджимурад Хидирбеков
          </p>
        </div>
      </div>
    </footer>
  )
}
