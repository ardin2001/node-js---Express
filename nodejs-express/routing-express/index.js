// const http = require('http');
import https from 'http';
// const fs = require('fs');
import fs from 'fs';
const port = 3000;
const hostname = '127.0.0.1';
// const express = require('express');
import express from 'express';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'view')));

app.get('/',(req,res) =>{
    res.sendFile("model/home.html", {root:__dirname});
});

app.get('/home',(req,res) =>{
    res.sendFile("model/home.html", {root:__dirname});
});

app.get('/feedback',(req,res) =>{
    res.sendFile("model/feedback.html", {root:__dirname});
});
app.get('/about',(req,res) =>{
    res.sendFile("model/about.html", {root:__dirname});
});

app.listen(port,hostname,() =>{
    console.log(`Server running in ${hostname}:${port}`);
})