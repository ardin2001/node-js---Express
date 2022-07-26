const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';
const express = require('express');

const app = express();
app.get('/',(req,res) =>{
    res.send("hello express framework!");
});

app.get('/routing',(req,res) =>{
    res.send("hello routing express framework!");
});

app.listen(port,hostname,() =>{
    console.log(`Server running in ${hostname}:${port}`);
})

// const server = http.createServer((req, res) =>{
//     res.setHeader("Content-Type","text/html");
//     res.statusCode = 200;
//     fs.readFile("main.html",(err,data) =>{
//         if (err) {
//             res.end("error load html");
//         }
//         res.end(data);
//     })
// });

// server.listen(port,hostname,() => {
//     console.log(`server in ${hostname}:${port}`);
// });