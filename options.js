module.exports = {
    againOptions:{
        reply_markup: JSON.stringify({
            inline_keyboard:[
                [{text:'Еще одна', callback_data:'/again'}]
            ]
        })
    }
}