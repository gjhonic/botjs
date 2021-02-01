const Discord = require('discord.js');

let auth_data = require('./auth_data');
let myBot = require('./mybot');

const bot = new Discord.Client();

//Обработчики событий --->
bot.on('message', message => {

    if(message.content == "!help") myBot.processHelp(message)
    else if(message.content == "!downloadbot") myBot.processDownloadbot(message)
    else if(message.content.indexOf("!") == 0) myBot.processCommandNotFound(message)

    if(message.content.includes("Данеев найди")) myBot.processFind(message);
})

bot.on('ready', () => {
    console.log('Bot ' + bot.user.tag + ' started ...');
})

bot.login(auth_data.token);
