const express = require('express');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('app')
})
app.get('/home',(req,res) =>{
    res.render('home')
})
app.get('/about',(req,res) =>{
    res.render('about')
})

app.listen(port,hostname,() =>{
    console.log(`Server running in ${hostname}:${port}`);
})