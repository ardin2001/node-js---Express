const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) =>{
    console.log(req.url)
    if (req.url === '/home'){
        fs.readFile("model/home.html",(err,data) =>{
            if (err) {
                res.end("error load html");
            }
            res.end(data);
        });
    }else if(req.url === '/about'){
        fs.readFile("model/about.html",(err,data) =>{
            if (err) {
                res.end("error load html");
            }
            res.end(data);
        });
    }else if(req.url === '/feedback'){
        fs.readFile("model/feedback.html",(err,data) =>{
            if (err) {
                res.end("error load html");
            }
            res.end(data);
        });
    }else{
        fs.readFile("model/home.html",(err,data) =>{
            if (err) {
                res.end("error load html");
            }
            res.end(data);
        });
        fs.readFile("view/css/style.css",(err,data) =>{
            if(err){
                res.end("css error");
            }
            res.end(data); 
        });
    }        
});

server.listen(port,hostname,() => {
    console.log(`server in ${hostname}:${port}`);
});