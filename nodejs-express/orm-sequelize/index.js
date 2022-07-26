import express from 'express';
import Member from './models/member.js';
import session from 'express-session';
import mc from './controllers/member.js'
import { sequelize } from './models/model.js';
const app = express();

const hostname ='127.0.0.1';
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret : 'ini adalah kode secret',
    resave : false,
    saveUninitialized : true,
    cookie :{
        maxAge : 60*60*1000
    }
}))
app.set('view engine','ejs')

app.get('/',(req,res) =>{
    res.send('logi dulu bozzz')
})
app.get('/login', mc.login);
app.get('/logout', mc.logout);
app.post('/login', mc.auth);

app.get('/user',(req,res)=>{
    Member.findAll().then((result) =>{
        res.render('index',{Member:result, user : req.session.user || ""})
    })
})

app.get('/create',(req,res) =>{
    res.render('create');
})

app.get('/edit/:id',(req,res) =>{
    Member.findOne({where:{id:req.params.id}}).then(result =>{
        res.render('edit',{Member:result})
    })
})

app.get('/connect',(req,res)=>{
    try{
        sequelize.authenticate();
        res.end("Connected")
    }catch(err){
        res.end("Disconnect"); 
    }
})
// app.get('/create',(req,res) =>{
//     Member.sync();
//     res.end('table member berhasil dibuat')
// })

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