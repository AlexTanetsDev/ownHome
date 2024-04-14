const telegramBot = {
  token: process.env.NEXT_PUBLIC_BOT_TOKEN,
  apiUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL,
  targetName: process.env.NEXT_PUBLIC_TARGET_NAME,
};

const config = {
  telegramBot,
};

export default config;
