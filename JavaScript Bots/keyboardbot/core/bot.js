const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.launch()

console.log('bot ishga tushdi');

module.exports = {
   bot 
}