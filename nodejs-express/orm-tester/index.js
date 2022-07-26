import express from 'express';
import Member from './models/member.js';
import sequelize from './models/model.js';
const app = express();

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

app.post('/api/members',(req,res) =>{
    Member.create({
        name : req.body.name,
        password : req.body.password,
        active : req.body.active
    }).then((result) => res.json(result));
})


app.listen(port,() => {
    console.log(`Server running at ${hostname}:${port}`);
});