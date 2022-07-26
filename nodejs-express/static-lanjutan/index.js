const port = 3000;
const hostname = '127.0.0.1';
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use('/public',express.static('public'))

const users = [
    {id : 1, username:"ardin"},
    {id : 2, username:"nugraha"},
    {id : 3, username:"gantenk"},
    {id : 4, username:"sekali"},
];

app.get('/users',(req,res) =>{
    res.json(users);
});
app.post('/user',(req,res) =>{
    res.send("data post")
});
app.put('/user',(req,res) =>{
    res.send("data put")
});
app.delete('/user',(req,res) =>{
    res.send("data delete")
});

app.listen(port,hostname,() =>{
    console.log(`Server running in ${hostname}:${port}`);
})