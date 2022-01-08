const {CommandInteraction} = require('discord.js');

module.exports = {
    name : 'ping2',
    description : 'ping 답변',
    /*
    *  @params {CommandInteraction} interaction
    * */

    async execute(interaction){
        await interaction.reply('pong');

    }


}