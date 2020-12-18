const { Composer, Markup } = require('telegraf');
const { bot } = require('../core/bot');
const axios = require('axios');
const fuzzy = require('fuzzy');

const composer = new Composer();
const url = 'https://raw.githubusercontent.com/denoland/registry/master/src/database.json';

const thumb_link = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Deno.svg/1200px-Deno.svg.png';
composer.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
   let results = [];
   let indexation = 0;
   let database = await axios.get(url).then(res => {
      return res.data
   })
   let packs = Object.keys(database).map(function (obj) { return obj })

   let similrities = fuzzy.filter(inlineQuery.query, packs).sort().slice(0, 19);

   let found = similrities.map(function (it) { return it.string });

   for (let key of found) {
      let data = database[key];
      let repo = data['repo'];
      let auth = data['owner'];
      let desc = data["desc"]
      let deno = `https://deno.land/x/${key}`;
      let github = `https://github.com/${auth}/${repo}`;
      
      let prefix = key.replace(/_/g, ' ');

      let text = `<b>Package:</b> ${prefix} \n` + `<b>Description</b> ${desc} \n`;

      const keyboard = Markup.inlineKeyboard([
         Markup.urlButton("Github", github),
         Markup.urlButton("Deno", deno)
      ], {
         columns: 2
      })

      let serializer = () => {
         const querylizer = {
            type: "article",
            id: ++indexation,
            url: deno,
            title: prefix,
            thumb_height: 100,
            thumb_width: 100,
            thumb_url: thumb_link,
            discription: desc,
            reply_markup: keyboard,
            input_message_content: {
               message_text: text,
               parse_mode: "HTML"
            }
         }
         results.push(querylizer)
         indexation += 1;
      }; serializer()
   }

   return answerInlineQuery(results)
});


bot.use(composer.middleware());
