const builder = require('botbuilder');
const restify = require('restify');

const connector = new builder.ChatConnector();
const bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    session => {
        builder.Prompts.text(session, 'Please, enter your name');
    },
    (session, result) => {
        session.send(`You say: ${result.response}`);
    },
]);

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log(`${server.name} listening to ${server.url}`);
});
server.post('api/messages', connector.listen());