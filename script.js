const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config()
const bot = new TelegramApi(process.env.BOT_TOKEN, {polling:true})
const {rules, quotes, interestingFacts, randomPic, theories, characters, botInfo} = require('./arrays')

const start = () =>{
    bot.setMyCommands([
        {command:'/rules', description:'Правила бойцовского клуба'},
        {command:'/quotes', description:'Цитаты'},
        {command:'/interesting_facts', description:'Интересные факты'},
        {command:'/theories', description:'Теории о фильме'},
        {command:'/random_pics', description:'Рандомное изображение'},
        {command:'/fighting_club_game', description:'Кто ты из бойцовского клуба?'},
        {command:'/characters', description:'Персонажи'},
        {command:'/info', description:'Информация о боте'}
        

    ])

    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id

        if(text === '/start'){
            await bot.sendMessage(chatId, `${msg.from.first_name} ${msg.from.last_name}, добро пожаловать в клуб.`)
        }

        if(text === '/quotes' || text === 'Цитата' ){
            return bot.sendMessage(chatId, quotes[getRandomNumber(0, quotes.length - 1)]) 
        }

        if(text === '/rules' || text === 'Правила бойцовского клуба'){
            return bot.sendMessage(chatId, rules[0])
        }

        if(text === '/interesting_facts' || text === 'Интересный факт'){
            await bot.sendMessage(chatId, interestingFacts[getRandomNumber(0, interestingFacts.length - 1)])
        }

        if(text === '/random_pics' || text === 'Рандомное изображение'){
            await bot.sendMessage(chatId, randomPic[getRandomNumber(0, randomPic.length - 1)])
        }

        if(text === '/theories' || text === 'Теория'){
            return bot.sendMessage(chatId, theories[getRandomNumber(0, theories.length - 1)])
        }

        if(text === '/characters' || text === 'Персонажи'){
            return bot.sendMessage(chatId, characters[eachElement()])
            
        }
        if(text === '/info' || text === 'Информация о боте'){
            return bot.sendMessage(chatId, botInfo[0])
        }

        return bot.sendMessage(chatId, 'Я тебя не понимаю. Смотри /info.') 
    })


    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id
        return bot.sendSticker(chatId,'https://stickerpacks.ru/wp-content/uploads/2022/09/nabor-stikerov-po-bojcovskomu-klubu-5-32.webp',{
            'reply_markup':{
                'keyboard':[['Правила бойцовского клуба'],['Цитата','Интересный факт'], ['Рандомное изображение','Теория'],['Персонажи', 'Информация о боте'], ['Кто ты из Бойцовского клуба?(в разработке)']]
            }
        })
    })
   
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function getCharactersEachElementArr() {
    let count = 0
        return () => count < characters.length ? count++ : characters.length - 1
 }

 let eachElement = getCharactersEachElementArr()
  



start()



