const port = process.env.PORT || 8080;
const express = require('express');
const packageInfo = require('./package.json');
const Discord = require('discord.js');

const client = new Discord.Client();
const config = require('./config.json');

let app = express();

app.get('/', function (req, res) {
    res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web server started at http://%s:%s', host, port);
});




app.listen(port, () => {
    console.log('Express server listening on port', port)
});