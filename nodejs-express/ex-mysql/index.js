const port = 3000;
const hostname = '127.0.0.1';
const mysql = require('mysql2');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set('view engine','ejs');
app.use('/public',express.static('public'))

app.get('/',(req,res) =>{
    res.render('home')
})

app.listen(port,hostname,() =>{
    console.log(`Server running in ${hostname}:${port}`);
})