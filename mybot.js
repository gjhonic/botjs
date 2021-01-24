const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');




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

    //const url="https://www.google.com/search?q="+query;
    const url="https://news.ycombinator.com/";
    console.log(url);
    
    let html_data = "";
    let result_query = [];

    (async () => {
    html_data = await axios.get(url)
      .then(response => {
        //console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
      })
    })();

    //console.log(html_data);

    // function getData(html){
    //   let data = [];
    //   console.log(html);
    //   const $ = cheerio.load(html);
    //   $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
    //     console.log($(elem));
    //     data.push({
    //       title : $(elem).text(),
    //       link : $(elem).find('a.storylink').attr('href')
    //     });
    //   });
    //   return data;
    // }


    result_query = getData(html_data);
    console.log(result_query);
      
  }

  //Метод выводит ошибку при не известной команде
  processCommandNotFound(message){
    message.channel.send('Не известная команда! (воспользуйтесь !help)');
  }

  commands = {
    "!help": "processHelp",
    "!downloadbot": "processDownloadbot",
    "!clear": "processClear",
  }

}

let myBot = new MyBot();
module.exports = myBot;
