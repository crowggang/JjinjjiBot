    // require('./bot.js');
    // require('./web.js');



    const port = process.env.PORT || 8080;
    const express = require('express');
    const packageInfo = require('./package.json');

    const Discord = require('discord.js');

    const client = new Discord.Client({
        intents: [ // Intent를 설정합니다. 설정하지 않으면 CLIENT_MISSING_INTENTS 오류가 발생합니다.
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
        ]
    }); // Discord.Client 객체를 생성합니다.
    const config = require('./config.json');


    let app = express();

    app.get('/', function (req, res) {
        res.json({ version: packageInfo.version });
    });

    var server = app.listen(process.env.PORT, function () {
        var host2 = server.address().address;
        var port2 = server.address().port;

        console.log('Web server started at http://%s:%s', host2, port2);
    });




    client.on('ready', () => {
        console.log('theclient');
    });

    client.login(process.env.BOT_TOKEN);

    app.listen(port, () => {
        console.log('Express server listening on port', port)
    });