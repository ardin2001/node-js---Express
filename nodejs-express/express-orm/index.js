const express = require('express');
const Sequelize = require('sequelize');
const app = express();

const sequelize = new Sequelize("web","root","",{
    host : 'localhost',
    dialect : 'mysql'
});

const Member = sequelize.define('member',{
    name : Sequelize.STRING,
    password : Sequelize.STRING,
    active : Sequelize.TINYINT
});

const hostname ='127.0.0.1';
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.get('/connect',(req,res)=>{
    try{
        sequelize.authenticate();
        res.end("Connected")
    }catch(err){
        res.end("Disconnect"); 
    }
})
app.get('/create',(req,res) =>{
    Member.sync();
    res.end('table member berhasil dibuat')
})

app.get('/api/members',(req,res) =>{
    Member.findAll().then((result) =>{
        res.json(result);
    })
})

app.post('/api/members',(req,res) =>{
    Member.create({
        name : req.body.name,
        password : req.body.password,
        active : req.body.active
    }).then((result) => res.json(result));
})

app.put('/api/members/:id',(req,res) =>{
    Member.update({
        name : req.body.name,
        password : req.body.password,
        active : req.body.active 
    },{where :{id : req.params.id}}
    ).then(result =>{
        res.json(result)
    })
})

app.delete('/api/members/:id',(req,res) =>{
    Member.destroy({where:{id : req.params.id}}
    ).then(result => {
        res.json(result)
    });
})

app.listen(port,() => {
    console.log(`Server running at ${hostname}:${port}`);
});