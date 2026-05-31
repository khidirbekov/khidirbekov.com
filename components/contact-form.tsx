"use client"

import { useState } from "react"
import { Send, CheckCircle, Loader2 } from "lucide-react"

const serviceOptions = [
  "Веб-приложение",
  "Лендинг / Сайт",
  "API и бэкенд",
  "Консультация",
  "Другое",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center rounded-lg border border-primary/30 bg-card p-12 text-center">
            <CheckCircle className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              Заявка отправлена
            </h3>
            <p className="text-muted-foreground">
              Спасибо за обращение! Я свяжусь с вами в течение 24 часов.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: "", email: "", service: "", budget: "", message: "" })
              }}
              className="mt-6 text-sm text-primary transition-colors hover:underline"
            >
              Отправить ещё одну заявку
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="mb-4 font-mono text-sm tracking-wider text-primary">
              {"// contact"}
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Оставить заявку
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Расскажите о вашем проекте — я отвечу в течение 24 часов
              с предварительной оценкой и планом работ.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-sm text-primary">
                  01
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Заполните форму</h4>
                  <p className="text-sm text-muted-foreground">
                    Опишите задачу, выберите тип услуги и бюджет
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-sm text-primary">
                  02
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Обсудим детали</h4>
                  <p className="text-sm text-muted-foreground">
                    Созвон на 30 минут для уточнения требований
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-sm text-primary">
                  03
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Получите оценку</h4>
                  <p className="text-sm text-muted-foreground">
                    Детальное ТЗ, сроки и стоимость в течение 3 дней
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                Имя
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Как вас зовут?"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                  Тип услуги
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>
                    Выберите услугу
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-foreground">
                  Бюджет
                </label>
                <input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="0 ₽"
                  className="w-full appearance-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Описание проекта
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Расскажите подробнее о вашей задаче..."
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Отправить заявку
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
