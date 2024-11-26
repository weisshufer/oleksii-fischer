'use server'

import { FormData } from '@/types/form'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function sendToTelegram(data: FormData) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram credentials are not set')
    return { success: false, message: 'Internal server error' }
  }

  const message = `
New message from your website:
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
  `

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram')
    }

    return { success: true, message: 'Message sent successfully' }
  } catch (error) {
    console.error('Error sending message to Telegram:', error)
    return { success: false, message: 'Failed to send message' }
  }
}

