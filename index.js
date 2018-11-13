const TeleBot = require('telebot');

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