const { Composer, Extra } = require('telegraf');
const { bot } = require('../core/bot');
const composer = new Composer();
composer.start(ctx => {
   const keyboard = Extra.markup(markup =>
      markup
      .resize()
      .keyboard([
          markup.contactRequestButton('CLICK')
      ])
   )
   ctx.replyWithMarkdown('bot ishga tushirish uchun click deb yozilgan knobkani bosing', keyboard)
}
  

   
)


bot.use(composer.middleware())