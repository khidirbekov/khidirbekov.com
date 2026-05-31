import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Telegram credentials are not configured" },
      { status: 500 }
    )
  }

  const { name, email, service, budget, message } = await request.json()

  const text = `📬 Новая заявка с сайта!\n\n👤 Имя: ${name || "—"}\n📧 Email: ${email || "—"}\n🛠 Услуга: ${service || "—"}\n💰 Бюджет: ${budget || "—"}\n\n📝 Описание:\n${message || "—"}`

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    }
  )

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
