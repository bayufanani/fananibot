require('dotenv').config();
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.API_TOKEN);
const http = require('http');
const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<h1>Hello World</h1>');

});

server.listen(port,() => {

  bot.on('text', (msg) => {
    switch(msg.text.toLowerCase()) {
      case 'kucing' : 
        let promise;
        let id = msg.chat.id;
  
        // Photo or gif?
        promise = bot.sendPhoto(id, 'https://cataas.com/cat', {
            fileName: 'kitty.jpg',
            serverDownload: true
        });
        // Send "uploading photo" action
        bot.sendAction(id, 'upload_photo');
  
        return promise.catch(error => {
          console.log('[error]', error);
          // Send an error
          bot.sendMessage(id, `😿 An error ${ error } occurred, try again.`);
        });
        break;
      default : 
        return msg.reply.text("gak paham! 😆 "+msg.text.toLowerCase());
        break;
    }
  });
  
  bot.on(['/hello', '/start'], (msg) => {
    msg.reply.text('hello');
  });
  
  bot.start();

console.log(`Server running at port `+port);

});


/* // in sublime
var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
}); */