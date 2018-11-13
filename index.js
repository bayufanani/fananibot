const TeleBot = require('telebot');
require('dotenv').config()
const http = require('http')
const port = 80

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  const bot = new TeleBot({
    token: process.env.API_TOKEN,
    webhook: {
      // Self-signed certificate:
      // key: './key.pem',
      // cert: './cert.pem',
      url: 'https://fananibot.herokuapp.com/',
      host: '0.0.0.0',
      port: 443
    }
  });

  bot.on('text', msg => bot.sendMessage(msg.from.id, msg.text));

  bot.start();

  console.log(`server is listening on ${port}`)
})