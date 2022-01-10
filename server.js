const express = require('express');
const server = express();

server.all('/', (req,res) => {
    res.send('봇상태 : \n 온라인');
})

function keepAlive() {
    server.listen(3000, ()=>{
       console.log('서버 기동중');
    });
}
module.exports = keepAlive;