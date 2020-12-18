const { bot } = require('../core/bot');

bot.help(ctx => {
   let text = `<strong>Bizning botimizga beriladigan buyruqlar</strong> \n` +
      `/start <code>: Bizning botni ishga tushiradigan buyruq😉</code>`
   ctx.replyWithHTML(text);
})