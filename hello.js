const builder = require('botbuilder');

const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

bot.dialog('/', session => {
    session.send('Hello, bot!');
});
