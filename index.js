    // require('./bot.js');
    // require('./web.js');

    //
    //
    // const port = process.env.PORT || 8080;
    // const express = require('express');
    // const packageInfo = require('./package.json');
    //
    // const Discord = require('discord.js');
    //
    // const client = new Discord.Client({
    //     intents: [ // Intent를 설정합니다. 설정하지 않으면 CLIENT_MISSING_INTENTS 오류가 발생합니다.
    //         Intents.FLAGS.GUILDS,
    //         Intents.FLAGS.GUILD_MESSAGES
    //     ]
    // }); // Discord.Client 객체를 생성합니다.
    const config = require('./config.json');
    //
    //
    // let app = express();
    //
    // app.get('/', function (req, res) {
    //     res.json({ version: packageInfo.version });
    // });
    //
    // var server = app.listen(process.env.PORT, function () {
    //     var host2 = server.address().address;
    //     var port2 = server.address().port;
    //
    //     console.log('Web server started at http://%s:%s', host2, port2);
    // });
    //
    //
    //
    //
    // client.on('ready', () => {
    //     console.log('theclient');
    // });
    //
    // // client.login(process.env.BOT_TOKEN);
    // client.login(config.token);
    //
    // app.listen(port, () => {
    //     console.log('Express server listening on port', port)
    // });
    const { Client, Intents, Collection} = require('discord.js');
    const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });
    const fs = require('fs');

    const commandFiles = fs.readdirSync('./commands').fill(file => file.endsWith('.js'));
    client.commands = new Collection();
    let data = [];
    for(const file of commandFiles){
        const command = require('./commands/${file}');
        client.commands.set(command.name , command);
        data.push({name:command.name , description : command.description ,options : command.options });
    }

    client.once('ready' , async () => {
       console.log('ready!');
       await  client.guilds.cache.get('910721739498061874')?.commands.set(data);
    });

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
    client.on('interactionCreate', async interaction => {
        if(!interaction.isCommand()) return;

        if(!client.commands.has(interaction.commandName)) return;
        const command = client.commands.get(interaction.commandName);
        try {
            await command.execute(interaction);
        }catch (error){
            console.log('error!!' , error);
        }

    });

  
    // client.login(config.token);
    client.login(process.env.BOT_TOKEN);