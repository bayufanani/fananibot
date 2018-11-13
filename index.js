const TeleBot = require('telebot');
const bot = new TeleBot('767888639:AAGOMOzFv3QJ8wxsjRgIbuMg7DCD1flsBjA');

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