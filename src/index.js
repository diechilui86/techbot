const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`techbot esta listo`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjkyMzI1OTUxNjMxMTMwNjQ2.XwCmgg.78rnV-EkqOQ5y60uESRsxXfzxMk');