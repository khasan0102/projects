const { bot } = require('../core/bot');

bot.on('contact', ctx => {
   ctx.replyWithHTML(`<strong>Qabul qilindi!</strong>`)
   let user = ctx.from.id;

   let contact = ctx.message.contact.phone_number;
   ctx.telegram.sendMessage(user, contact);
})