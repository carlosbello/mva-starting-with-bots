const builder = require('botbuilder');

const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    session => {
        builder.Prompts.text(session, 'Please, enter your name');
    },
    (session, result) => {
        session.send(`You say: ${result.response}`);
    },
]);
