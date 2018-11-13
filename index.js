const TeleBot = require('telebot');
const http = require('http');
const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<h1>Hello World</h1>');

});

var bot = new TeleBot({
  token: '767888639:AAGOMOzFv3QJ8wxsjRgIbuMg7DCD1flsBjA', // Required. Telegram Bot API token.
  webhook: { // Optional. Use webhook instead of polling.
      url: 'https://fananibot.herokuapp.com', // HTTPS url to send updates to.
      host: '0.0.0.0', // Webhook server host.
      port: 443, // Server port.
      maxConnections: 40 // Optional. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
  },
  allowedUpdates: [], // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
});
bot.on('text', msg => bot.sendMessage(msg.from.id, msg.text));
bot.start();

server.listen(port,() => {

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