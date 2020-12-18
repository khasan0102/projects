const { Markup } = require('telegraf')

const { bot } = require('../core/bot');


bot.command('inline', ctx => {

   const keyboard = Markup.inlineKeyboard(
      [
         Markup.callbackButton('tester', 'inline')
      ]
   )

   ctx.telegram.sendMessage(
      ctx.from.id, "Testing url buttons", {
         reply_markup: keyboard
      }
   )
})

bot.action('inline', ctx => {
   ctx.sendMessage(
      ctx.editMessageText('nima qilishno hohlasiz')
   )
})