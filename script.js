const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config()
const bot = new TelegramApi(process.env.BOT_TOKEN, {polling:true})
const {rules, quotes, interestingFacts, randomPic, theories, characters, botInfo} = require('./arrays')

const start = () =>{
    bot.setMyCommands([
        {command:'/rules', description:'Правила бойцовского клуба'},
        {command:'/quote', description:'Цитаты'},
        {command:'/interesting_fact', description:'Интересные факты'},
        {command:'/theory', description:'Теории о фильме'},
        {command:'/random_pic', description:'Рандомное изображение'},
        {command:'/fight_club_game', description:'Как хорошо ты знаешь "Бойцовский клуб?'},
        {command:'/character', description:'Персонажи'},
        {command:'/info', description:'Информация о боте'},
        {command:'/remove_buttons', description:'Убрать кнопки'},
        {command:'/buttons_back', description:'Вернуть кнопки'}    
   ])

    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id

        if(text === '/start'){
            await bot.sendMessage(chatId, `${msg.from.first_name} ${msg.from.last_name}, добро пожаловать в клуб.`)
        }

        if(text === '/quote' || text === 'Цитата' ){
            return bot.sendMessage(chatId, quotes[getRandomNumber(0, quotes.length - 1)]) 
        }

        if(text === '/rules' || text === 'Правила бойцовского клуба'){
            return bot.sendMessage(chatId, rules[0])
        }

        if(text === '/interesting_fact' || text === 'Интересный факт'){
            return bot.sendMessage(chatId, interestingFacts[getRandomNumber(0, interestingFacts.length - 1)])
        }

        if(text === '/random_pic' || text === 'Рандомное изображение'){
            return bot.sendMessage(chatId, randomPic[getRandomNumber(0, randomPic.length - 1)])
        }

        if(text === '/theory' || text === 'Теория'){
            return bot.sendMessage(chatId, theories[getRandomNumber(0, theories.length - 1)])
        }

        if(text === '/character' || text === 'Персонаж'){
            return bot.sendMessage(chatId, characters[eachElement()])
        }

        if(text === '/info' || text === 'Информация о боте'){
            return bot.sendMessage(chatId, botInfo[0])
        }     

        if(text === '/fight_club_game' || text === 'Как хорошо ты знаешь "Бойцовский клуб"?'){
            return bot.sendMessage(chatId, 't.me/QuizBot?start=ULizFbt4')
        }
    })


    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id
        return bot.sendSticker(chatId,'https://stickerpacks.ru/wp-content/uploads/2022/09/nabor-stikerov-po-bojcovskomu-klubu-5-32.webp',{
            'reply_markup':{
                'keyboard':[['Правила бойцовского клуба'],['Цитата','Интересный факт'], ['Рандомное изображение','Теория'],['Персонаж', 'Информация о боте'], ['Как хорошо ты знаешь "Бойцовский клуб"?']]
            }
        })
    })

    bot.onText(/\/remove_buttons/, (msg) => {
        const chatId = msg.chat.id
        return bot.sendMessage(chatId,'Кнопки убраны, также вы можете воспользоваться кнопкой menu (в пк версии телеграма кнопка menu может не отражаться, если она исчезла, напишите / - кнопка должна отобразиться), чтобы вернуть кнопки введите /buttons_back',{
            'reply_markup':{
                'remove_keyboard':true
            }
        })
    })

    bot.setMyCommands([
        {command:'/rules', description:'Правила бойцовского клуба'},
        {command:'/quote', description:'Цитаты'},
        {command:'/interesting_fact', description:'Интересные факты'},
        {command:'/theory', description:'Теории о фильме'},
        {command:'/random_pic', description:'Рандомное изображение'},
        {command:'/fight_club_game', description:'Как хорошо ты знаешь "Бойцовский клуб?'},
        {command:'/character', description:'Персонажи'},
        {command:'/info', description:'Информация о боте'},
        {command:'/remove_buttons', description:'Убрать кнопки'},
        {command:'/buttons_back', description:'Вернуть кнопки'}    
   ])

    bot.onText(/\/buttons_back/, (msg) => {
        const chatId = msg.chat.id
        return bot.sendMessage(chatId,'Кнопки возвращены, чтобы убрать кнопки введите /remove_buttons',{
            'reply_markup':{
                'keyboard':[['Правила бойцовского клуба'],['Цитата','Интересный факт'], ['Рандомное изображение','Теория'],['Персонаж', 'Информация о боте'], ['Как хорошо ты знаешь "Бойцовский клуб"?']]
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





