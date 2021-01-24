var fs = require('fs');

//Класс Бота
class MyBot {

  //Метод выводит список команд
  processHelp(message){
    let fileContent = fs.readFileSync("helpcommand.txt", "utf8");
    message.channel.send(fileContent);
  }

  //Метод показывает инструкцию по установке бота
  processDownloadbot(message){
    let fileContent = fs.readFileSync("readme.md", "utf8");
    message.channel.send(fileContent);
  }

  processFind(message){
    let str_query_pos = message.content.indexOf("Данеев найди") + 13;
    let query = message.content.slice(str_query_pos);

    message.channel.send('Я не буду искать "' + query + '"');
  }

  //Метод выводит ошибку при не известной команде
  processCommandNotFound(message){
    message.channel.send('Не известная команда! (воспользуйтесь !help)');
  }

  commands = {
    "!help": "processHelp",
    "!downloadbot": "processDownloadbot",
  }

}

let myBot = new MyBot();
module.exports = myBot;
