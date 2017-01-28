const builder = require('botbuilder');
const restify = require('restify');

const connector = new builder.ChatConnector();
const bot = new builder.UniversalBot(connector);
const CV_SECTIONS = [
    'Contact information',
    'Skills',
    'Work experience',
    'Education and training',
];

bot.dialog('/', [
    session => {
        builder.Prompts.text(session, 'What is your name?');
    },
    (session, result) => {
        builder.Prompts.choice(session, `Hello ${result.response}, what do you want to know about me?`, CV_SECTIONS);
    },
    (session, result) => {
        session.send(result.response.entity);
    },
]);

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log(`${server.name} listening to ${server.url}`);
});
server.post('api/messages', connector.listen());