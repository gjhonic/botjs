const fs = require('fs');

//Класс Бота
class ManageBot {

    //Возвращает текущую дату
     NowDate() {
        let now = new Date();
        let mont = (parseInt(now.getMonth())+1);
        mont.toString();
        return now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" "+now.getDate()+":"+mont+":"+now.getFullYear();
    }

    //Возвращает текущее время
    NowTime() {
        let now = new Date();
        let mont = (parseInt(now.getMonth())+1);
        mont.toString();
        return now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    }

    //Метод выводит записывает логи
    createlog(str, command=''){
        
        let log = "["+ this.NowTime()+ "] " + str + command+'\n';
        fs.appendFileSync("files/logs.txt", log)
    }

    //Метод пишет тайтл логов
    startlog(bot_name){
        let log = "\n- - - - - ["+ this.NowDate()+ "] START BOT - - - - - \n";
        fs.appendFileSync("files/logs.txt", log)
        console.log(bot_name+ " Запустился ...");
    }
}

module.exports = new ManageBot();