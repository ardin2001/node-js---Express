// const http = require('http');
// const fs = require('fs');
import https from 'http';
import fss from 'fs';
const port = 3000;

const hostname = '127.0.0.1';

const server = https.createServer((req, res) =>{
    // res.setHeader("Content-Type","text/html");
    res.statusCode = 200;
    fss.readFile("main.html",(err,data) =>{
        if (err) {
            res.end("error load html");
        }
        res.end(data);
    })
});

server.listen(port,hostname,() => {
    console.log(`server in ${hostname}:${port}`);
});