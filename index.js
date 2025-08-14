require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("⚠️ BOT_TOKEN chưa được cấu hình!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `🎮 Chào ${msg.from.first_name}! Chào mừng đến với Royal Token Game!\nGõ /play để bắt đầu.`);
});

bot.onText(/\/play/, (msg) => {
  const points = Math.floor(Math.random() * 100) + 1;
  bot.sendMessage(msg.chat.id, `🎯 Bạn vừa kiếm được ${points} điểm!`);
});

console.log("✅ Royal Token Bot đang chạy...");
