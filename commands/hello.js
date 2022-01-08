module.exports = {
    name:"안녕",
    description: "인사",
    execute(message){
        return message.channel.send(`${message.author} , 안녕!`);
    }
}