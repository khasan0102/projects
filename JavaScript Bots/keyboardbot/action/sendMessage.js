const { Composer } = require('telegraf');
const { bot } = require('../core/bot');
const composer = new Composer();

const { admin } = require('../group');
composer.on('contact', ctx => {
   ctx.telegram.sendMessage(admin, ctx.message.contact);
   ctx.replyWithHTML('Sizga botni ishlatishda yordam berishi uchun /help ni bosing')
})

composer.help(ctx => {
   ctx.replyWithHTML( `<b>Assalomu alaykum. Sizni botimizda ko'rib turganimizdan xursandmiz😉! Bu yerda siz bot buyruqlari bilan tanishasiz❗</b> \n \n` +
      `<b><i>Botni ishga tushiradigan buyruqlar</i></b> \n` +
      `/start<code>: Botni ishga tushuradigan buyruq</code> \n` + 
      `/help<b><code>: Bu buyruq sizga shu xabarni ochadi</code></b>`)
})

bot.use(composer.middleware())