const port = 3000;
const hostname = '127.0.0.1';
const mysql = require('mysql2');
const express = require('express');
const app = express();

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'web'
});
con.connect(err =>{
    if(err){
        console.log('database error!');
        console.log(err);
    }else{
        console.log('database is connect')
    }
})

app.set('view engine','ejs');
app.use('/public',express.static('public'))

// read data all
app.get('/',(req,res) =>{
    const sql = "select * from `users` where 1;";
    const query = con.query(sql,(err,result) =>{
        if(err){
            console.error(err);
            res.end("query is fail");
        }else{
            const data ={
                status : 200,
                error : null,
                response : result
            }; 
            res.json(data);
        }
    })
});
//read data id tertentu
app.get('/users/:id',(req,res) =>{
    const sql = "select * from `users` where user_id ="+req.params.id;
    const query = con.query(sql,(err,result) =>{
        if(err){
            console.error(err);
            res.end("query is fail");
        }else{
            const data ={
                status : 200,
                error : null,
                response : result
            }; 
            res.json(data);
        }
    })
});
//id menggunakan query
app.get('/users',(req,res) =>{
    const sql = "select * from `users` where user_id ="+req.query.id;
    const query = con.query(sql,(err,result) =>{
        if(err){
            console.error(err);
            res.end("query is fail");
        }else{
            const data ={
                status : 200,
                error : null,
                response : result
            }; 
            res.json(data);
        }
    })
});
app.listen(port,hostname,() =>{
    console.log(`Server running in ${hostname}:${port}`);
})