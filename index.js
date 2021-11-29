const { Client, Intents } = require('discord.js');
const {token, prefix} = require('./config.json');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
});

client.on('ready', () => {
    console.log('the bot is ready')
})

client.on('messageCreate', message => {

    if (message.content === prefix + 'hi') {
        message.reply('hello')
    }
});

client.login(token);