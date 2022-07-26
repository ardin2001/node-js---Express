const port = 3000;
const hostname = '127.0.0.1';
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use('/public',express.static('public'))
app.get('/',(req,res) =>{
    res.send('hello success');
});
app.get('/home',(req,res) =>{
    // res.sendFile('model/home.html',{root: __dirname}); =>pakai html,kemudian harus pakai node
    res.render('home');
});
app.get('/about',(req,res) =>{
    // res.sendFile('model/about.html',{root: __dirname});
    res.render('about');
});
app.get('/feedback',(req,res) =>{
    // res.sendFile('model/feedback.html',{root: __dirname});
    res.render('feedback');
});
app.get('*',(req,res) =>{
    // res.sendFile('model/404.html',{root: __dirname});
    res.render('404');
});

app.listen(port,hostname,() =>{
    console.log(`Server running in ${hostname}:${port}`);
})