    const Discord = require('discord.js');
    const client = new Discord.Client();
    const config = require('./config.json');

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log('Express server listening on port', port)
    });

    client.on('ready', () => {
        console.log('theclient');
    });

    client.login(process.env.BOT_TOKEN);
