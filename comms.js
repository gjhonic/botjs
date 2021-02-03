const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const prefix = config.prefix;
const versions = config.versions;

// Команды //

//Вывожу список доступных команд
function help(robot, mess, args){
  let fileContent = fs.readFileSync("files/help.txt", "utf8");
  mess.channel.send(fileContent).then(mess.channel.send(mess.author));
}

//Выводожу readme.md
function link(robot, mess, args){
  let fileContent = fs.readFileSync("readme.md", "utf8");
  mess.channel.send(fileContent).then(mess.channel.send(mess.author));
}

//Повторяю за тобой
function say(robot, mess, args){
  if (!mess.member.hasPermission("MANAGE_MESSAGES")) return mess.channel.send("У  вас нет прав"); 
  let robotmessage = args = mess.content.split(' ');
  args.shift();
  args = args.join(' ');

  mess.delete().catch();

  mess.channel.send(robotmessage).then(mess.channel.send(mess.author));
}

//Удаляю n сообщений
function clear(robot, mess, args){
  const arggs = mess.content.split(' ').slice(1);
  let amount = arggs.join(' '); 
  amount++;
  if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!');
  if (isNaN(amount)) return mess.channel.send('Это не число!');

  if ((amount-1) > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз');
  if ((amount-1) < 1) return mess.channel.send('Вы должны ввести число больше чем 1');

  async function delete_messages() {

  await mess.channel.messages.fetch({
          limit: amount
      }).then(messages => {
          mess.channel.bulkDelete(messages)
          mess.channel.send(`Удалено ${amount-1} сообщений!`)
      })
  };
  delete_messages(); 
}


// Список комманд //

var comms_list = [
  {
    name: "say",
    out: say,
    about: "Бот повторит за тобой"
  },
  {
    name: "clear",
    out: clear,
    about: "Чистит чат"
  },
  {
    name: "help",
    out: help,
    about: "Выводит список команд"
  },
  {
    name: "link",
    out: link,
    about: "Покажу readme.md"
  },
  {
    name: "calc",
    out: calc,
    about: "Вычислю"
  }
];

module.exports.comms = comms_list;