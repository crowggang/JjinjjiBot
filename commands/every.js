module.exports = {
    name:"다함께",
    description: "인사",
    execute(message){
        message.channel.send(`외쳐볼까요?!`);
        message.channel.send(`S`);
        message.channel.send(`E`);
        return message.channel.send(`헤..헤응`);
    }
}