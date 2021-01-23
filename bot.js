const Discord = require('discord.js');
const bot = new Discord.Client();
let MyAuth = require('./auth_data');
let DataSayBot = require('./data');
let auth_data = new MyAuth();


//Функция обработки сообщений
function processFind(message){

    let str_query_pos = message.content.indexOf("Данеев найди") + 13;
    let query = message.content.slice(str_query_pos);

    message.channel.send('Я не буду искать "' + query + '"');
}

//Функция обработки сообщений
function processFind(message){

    let str_query_pos = message.content.indexOf("Данеев найди") + 13;
    let query = message.content.slice(str_query_pos);

    message.channel.send('Я не буду искать "' + query + '"');
}


//Обработчики событий --->
bot.on('message', message => {

    if(message.content.includes("Данеев найди")) processFind(message);
    else if(message.content == "!help") processHelp(message);
})

bot.on('ready', () => {
    console.log('Bot started ' + bot.user.tag);
})

bot.login(auth_data.login);
