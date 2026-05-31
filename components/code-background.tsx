"use client"

type CodeSnippet = {
  id: number
  top: string
  left?: string
  right?: string
  rotate: string
  delay: string
  duration: string
  size: "xs" | "sm"
  lines: Array<Array<{ text: string; color?: "key" | "fn" | "str" | "num" | "cmt" | "var" }>>
}

const palette: Record<NonNullable<CodeSnippet["lines"][number][number]["color"]>, string> = {
  key: "text-primary",
  fn: "text-foreground",
  str: "text-primary/80",
  num: "text-foreground/85",
  cmt: "text-muted-foreground/80",
  var: "text-muted-foreground",
}

const snippets: CodeSnippet[] = [
  {
    id: 1,
    top: "6%",
    left: "3%",
    rotate: "-6deg",
    delay: "0s",
    duration: "14s",
    size: "sm",
    lines: [
      [{ text: "// custom react hook", color: "cmt" }],
      [
        { text: "export function ", color: "key" },
        { text: "useHero", color: "fn" },
        { text: "(", color: "var" },
        { text: "delay", color: "fn" },
        { text: ": ", color: "var" },
        { text: "number", color: "key" },
        { text: ") {", color: "var" },
      ],
      [
        { text: "  const ", color: "key" },
        { text: "[ready, setReady] ", color: "fn" },
        { text: "= ", color: "var" },
        { text: "useState", color: "fn" },
        { text: "(", color: "var" },
        { text: "false", color: "num" },
        { text: ")", color: "var" },
      ],
      [
        { text: "  useEffect", color: "fn" },
        { text: "(() ", color: "var" },
        { text: "=> ", color: "key" },
        { text: "{", color: "var" },
      ],
      [
        { text: "    const ", color: "key" },
        { text: "id ", color: "fn" },
        { text: "= ", color: "var" },
        { text: "setTimeout", color: "fn" },
        { text: "(() ", color: "var" },
        { text: "=> ", color: "key" },
        { text: "setReady", color: "fn" },
        { text: "(", color: "var" },
        { text: "true", color: "num" },
        { text: "), delay)", color: "var" },
      ],
      [
        { text: "    return ", color: "key" },
        { text: "() ", color: "var" },
        { text: "=> ", color: "key" },
        { text: "clearTimeout", color: "fn" },
        { text: "(id)", color: "var" },
      ],
      [
        { text: "  }, [", color: "var" },
        { text: "delay", color: "fn" },
        { text: "])", color: "var" },
      ],
      [
        { text: "  return ", color: "key" },
        { text: "ready", color: "fn" },
      ],
      [{ text: "}", color: "var" }],
    ],
  },
  {
    id: 2,
    top: "10%",
    right: "4%",
    rotate: "5deg",
    delay: "1.4s",
    duration: "16s",
    size: "xs",
    lines: [
      [{ text: "// async data pipeline", color: "cmt" }],
      [
        { text: "async function ", color: "key" },
        { text: "loadPosts", color: "fn" },
        { text: "(): ", color: "var" },
        { text: "Promise", color: "key" },
        { text: "<", color: "var" },
        { text: "Post", color: "key" },
        { text: "[]> {", color: "var" },
      ],
      [
        { text: "  const ", color: "key" },
        { text: "res ", color: "fn" },
        { text: "= ", color: "var" },
        { text: "await ", color: "key" },
        { text: "fetch", color: "fn" },
        { text: "(", color: "var" },
        { text: "'/api/posts'", color: "str" },
        { text: ", {", color: "var" },
      ],
      [
        { text: "    headers", color: "fn" },
        { text: ": { ", color: "var" },
        { text: "'Authorization'", color: "str" },
        { text: ": ", color: "var" },
        { text: "'Bearer ' + token", color: "str" },
        { text: " },", color: "var" },
      ],
      [
        { text: "    cache", color: "fn" },
        { text: ": ", color: "var" },
        { text: "'no-store'", color: "str" },
      ],
      [{ text: "  })", color: "var" }],
      [
        { text: "  if ", color: "key" },
        { text: "(!res.", color: "var" },
        { text: "ok", color: "fn" },
        { text: ") ", color: "var" },
        { text: "throw new ", color: "key" },
        { text: "Error", color: "fn" },
        { text: "(", color: "var" },
        { text: "'Failed'", color: "str" },
        { text: ")", color: "var" },
      ],
      [
        { text: "  return ", color: "key" },
        { text: "res.", color: "var" },
        { text: "json", color: "fn" },
        { text: "()", color: "var" },
      ],
      [{ text: "}", color: "var" }],
    ],
  },
  {
    id: 3,
    top: "44%",
    left: "2%",
    rotate: "4deg",
    delay: "2.6s",
    duration: "18s",
    size: "xs",
    lines: [
      [{ text: "-- published posts query", color: "cmt" }],
      [
        { text: "SELECT ", color: "key" },
        { text: "p.", color: "var" },
        { text: "id", color: "fn" },
        { text: ", ", color: "var" },
        { text: "p.", color: "var" },
        { text: "title", color: "fn" },
        { text: ", ", color: "var" },
        { text: "p.", color: "var" },
        { text: "slug", color: "fn" },
        { text: ",", color: "var" },
      ],
      [
        { text: "       ", color: "var" },
        { text: "count", color: "fn" },
        { text: "(", color: "var" },
        { text: "c.", color: "var" },
        { text: "id", color: "fn" },
        { text: ") ", color: "var" },
        { text: "AS ", color: "key" },
        { text: "comments", color: "fn" },
      ],
      [
        { text: "FROM ", color: "key" },
        { text: "posts ", color: "fn" },
        { text: "p", color: "var" },
      ],
      [
        { text: "LEFT JOIN ", color: "key" },
        { text: "comments ", color: "fn" },
        { text: "c ", color: "var" },
        { text: "ON ", color: "key" },
        { text: "c.", color: "var" },
        { text: "post_id ", color: "fn" },
        { text: "= ", color: "var" },
        { text: "p.", color: "var" },
        { text: "id", color: "fn" },
      ],
      [
        { text: "WHERE ", color: "key" },
        { text: "p.", color: "var" },
        { text: "published ", color: "fn" },
        { text: "= ", color: "var" },
        { text: "true", color: "num" },
      ],
      [
        { text: "  AND ", color: "key" },
        { text: "p.", color: "var" },
        { text: "created_at ", color: "fn" },
        { text: ">= ", color: "var" },
        { text: "now", color: "fn" },
        { text: "() ", color: "var" },
        { text: "- interval ", color: "key" },
        { text: "'30 days'", color: "str" },
      ],
      [
        { text: "GROUP BY ", color: "key" },
        { text: "p.", color: "var" },
        { text: "id", color: "fn" },
      ],
      [
        { text: "ORDER BY ", color: "key" },
        { text: "p.", color: "var" },
        { text: "created_at ", color: "fn" },
        { text: "DESC ", color: "key" },
        { text: "LIMIT ", color: "key" },
        { text: "10", color: "num" },
        { text: ";", color: "var" },
      ],
    ],
  },
  {
    id: 4,
    top: "40%",
    right: "3%",
    rotate: "-4deg",
    delay: "0.8s",
    duration: "15s",
    size: "sm",
    lines: [
      [{ text: "// domain types", color: "cmt" }],
      [
        { text: "export type ", color: "key" },
        { text: "Role ", color: "fn" },
        { text: "= ", color: "var" },
        { text: "'admin'", color: "str" },
        { text: " | ", color: "var" },
        { text: "'editor'", color: "str" },
        { text: " | ", color: "var" },
        { text: "'viewer'", color: "str" },
      ],
      [
        { text: "export interface ", color: "key" },
        { text: "User", color: "fn" },
        { text: " {", color: "var" },
      ],
      [
        { text: "  id", color: "fn" },
        { text: ": ", color: "var" },
        { text: "string", color: "key" },
      ],
      [
        { text: "  email", color: "fn" },
        { text: ": ", color: "var" },
        { text: "string", color: "key" },
      ],
      [
        { text: "  name", color: "fn" },
        { text: ": ", color: "var" },
        { text: "string", color: "key" },
      ],
      [
        { text: "  role", color: "fn" },
        { text: ": ", color: "var" },
        { text: "Role", color: "key" },
      ],
      [
        { text: "  createdAt", color: "fn" },
        { text: ": ", color: "var" },
        { text: "Date", color: "key" },
      ],
      [
        { text: "  isActive", color: "fn" },
        { text: "?: ", color: "var" },
        { text: "boolean", color: "key" },
      ],
      [{ text: "}", color: "var" }],
    ],
  },
  {
    id: 5,
    top: "72%",
    left: "6%",
    rotate: "-3deg",
    delay: "3.2s",
    duration: "17s",
    size: "xs",
    lines: [
      [{ text: "// reusable button", color: "cmt" }],
      [
        { text: "type ", color: "key" },
        { text: "Props ", color: "fn" },
        { text: "= {", color: "var" },
      ],
      [
        { text: "  variant", color: "fn" },
        { text: "?: ", color: "var" },
        { text: "'primary'", color: "str" },
        { text: " | ", color: "var" },
        { text: "'ghost'", color: "str" },
      ],
      [
        { text: "  onClick", color: "fn" },
        { text: "?: () ", color: "var" },
        { text: "=> ", color: "key" },
        { text: "void", color: "key" },
      ],
      [{ text: "}", color: "var" }],
      [
        { text: "export function ", color: "key" },
        { text: "Button", color: "fn" },
        { text: "({ variant = ", color: "var" },
        { text: "'primary'", color: "str" },
        { text: ", onClick, children }: ", color: "var" },
        { text: "Props", color: "key" },
        { text: ") {", color: "var" },
      ],
      [
        { text: "  return ", color: "key" },
        { text: "(", color: "var" },
      ],
      [
        { text: "    <", color: "var" },
        { text: "button", color: "fn" },
        { text: " className={", color: "var" },
        { text: "cn", color: "fn" },
        { text: "(", color: "var" },
        { text: "'btn'", color: "str" },
        { text: ", variant)} ", color: "var" },
        { text: "onClick", color: "fn" },
        { text: "={onClick}>", color: "var" },
      ],
      [
        { text: "      {children}", color: "var" },
      ],
      [
        { text: "    </", color: "var" },
        { text: "button", color: "fn" },
        { text: ">", color: "var" },
      ],
      [{ text: "  )", color: "var" }],
      [{ text: "}", color: "var" }],
    ],
  },
  {
    id: 6,
    top: "74%",
    right: "4%",
    rotate: "6deg",
    delay: "1.8s",
    duration: "19s",
    size: "sm",
    lines: [
      [{ text: "# docker compose deploy", color: "cmt" }],
      [
        { text: "$ ", color: "key" },
        { text: "docker ", color: "fn" },
        { text: "compose ", color: "var" },
        { text: "build ", color: "fn" },
        { text: "--no-cache", color: "num" },
      ],
      [
        { text: "→ ", color: "key" },
        { text: "building ", color: "var" },
        { text: "web", color: "fn" },
        { text: ", ", color: "var" },
        { text: "api", color: "fn" },
        { text: ", ", color: "var" },
        { text: "worker", color: "fn" },
      ],
      [
        { text: "$ ", color: "key" },
        { text: "docker ", color: "fn" },
        { text: "compose ", color: "var" },
        { text: "up ", color: "fn" },
        { text: "-d", color: "num" },
      ],
      [
        { text: "✓ ", color: "key" },
        { text: "network ", color: "var" },
        { text: "app_default ", color: "fn" },
        { text: "created", color: "var" },
      ],
      [
        { text: "✓ ", color: "key" },
        { text: "container ", color: "var" },
        { text: "postgres ", color: "fn" },
        { text: "healthy", color: "num" },
      ],
      [
        { text: "✓ ", color: "key" },
        { text: "container ", color: "var" },
        { text: "redis ", color: "fn" },
        { text: "healthy", color: "num" },
      ],
      [
        { text: "→ ", color: "key" },
        { text: "ready in ", color: "var" },
        { text: "1.24s", color: "num" },
        { text: " on ", color: "var" },
        { text: "http://localhost:3000", color: "str" },
      ],
    ],
  },
]

export function CodeBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_80%)]"
    >
      {snippets.map((s) => (
        <pre
          key={s.id}
          className={`absolute font-mono leading-relaxed opacity-[0.32] animate-[code-float_var(--dur)_ease-in-out_infinite] ${
            s.size === "xs" ? "text-[11px]" : "text-[13px]"
          }`}
          style={
            {
              top: s.top,
              left: s.left,
              right: s.right,
              animationDelay: s.delay,
              ["--dur" as string]: s.duration,
              ["--rot" as string]: s.rotate,
            } as React.CSSProperties
          }
        >
          {s.lines.map((line, i) => (
            <div key={`${s.id}-l${i}`} className="whitespace-pre">
              {line.map((token, j) => (
                <span
                  key={`${s.id}-l${i}-t${j}`}
                  className={token.color ? palette[token.color] : "text-foreground"}
                >
                  {token.text}
                </span>
              ))}
            </div>
          ))}
        </pre>
      ))}
    </div>
  )
}
