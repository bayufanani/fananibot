const TeleBot = require('telebot');
const bot = new TeleBot('767888639:AAGOMOzFv3QJ8wxsjRgIbuMg7DCD1flsBjA');
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res) {
  res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
  console.log(`Example app listening on port !`);
});