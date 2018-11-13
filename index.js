const TeleBot = require('telebot');
// const bot = new TeleBot('767888639:AAGOMOzFv3QJ8wxsjRgIbuMg7DCD1flsBjA');
const http = require('http');
const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<h1>Hello World</h1>');

});

server.listen(port,() => {

  const bot = new TeleBot({
    token: '767888639:AAGOMOzFv3QJ8wxsjRgIbuMg7DCD1flsBjA', // Required. Telegram Bot API token.
    /* polling: { // Optional. Use polling.
        interval: 1000, // Optional. How often check updates (in ms).
        timeout: 0, // Optional. Update polling timeout (0 - short polling).
        limit: 100, // Optional. Limits the number of updates to be retrieved.
        retryTimeout: 5000, // Optional. Reconnecting timeout (in ms).
        proxy: 'http://username:password@yourproxy.com:8080' // Optional. An HTTP proxy to be used.
    }, */
    webhook: {
        url: 'https://fananibot.heroku.com', // HTTPS url to send updates to.
        host: '0.0.0.0', // Webhook server host.
        port: 443, // Server port.
        maxConnections: 40 // Optional. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
    },
    allowedUpdates: [], // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
    
        // myPluginName: {
        //   data: 'my custom value'
        // }
    
});

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