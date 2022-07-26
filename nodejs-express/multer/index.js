import express from 'express';
import multer from 'multer';
import path from 'path';
const app = express();
import  mysql2  from 'mysql2';
import Gambar from './models/gambar.js';
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'image'
});
const uploadFolder ='/uploads/images';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+path.extname(file.originalname))
    }
  })
  
const upload = multer({ storage: storage });

const PORT = 3000;

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});
app.get('/create',(req,res) =>{
    Gambar.sync();
    res.end('table member berhasil dibuat')
})
app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});