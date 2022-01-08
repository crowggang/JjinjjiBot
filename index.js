
    const config = require('./config.json');
    const { Client, Intents, Collection} = require('discord.js');
    const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });
    const fs = require('fs');

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    client.commands = new Collection();
    let data = [];
    for(const file of commandFiles){
        const command = require(`./commands/${file}`);
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