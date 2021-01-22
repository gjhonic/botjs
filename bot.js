const Discord = require('discord.js');
const bot = new Discord.Client();
let MyAuth = require('./auth_data');
let auth_data = new MyAuth();

bot.on('ready', () => {
    console.log('Bot started ' + bot.user.tag);
})

bot.login(auth_data.login);
