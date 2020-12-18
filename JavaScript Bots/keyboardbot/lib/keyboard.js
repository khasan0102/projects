const { Markup } = require('telegraf')

const keyboards = {
   "start": Markup.inlineKeyboard([Markup.callbackButton(`Buyruqlarni ko'rsatish`, "help")])
}

module.exports = {
   keyboards
}