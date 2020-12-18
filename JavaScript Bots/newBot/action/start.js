const { Composer } = require('telegraf');
const { bot } = require('../core/bot');
const composer = new Composer();

const { messages } = require('../lib/message');
const { keyboards } = require('../lib/keyboard');
composer.start(ctx => {
   ctx.replyWithHTML(messages['start'], {
      reply_markup: keyboards["start"]
   })
});

composer.action('help', ctx => {
   ctx.editMessageText(messages['help'], {
      parse_mode: "HTML"
   })
})

bot.use(composer.middleware());