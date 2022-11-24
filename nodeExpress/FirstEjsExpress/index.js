'use strict';

const express =require('express');
const app =express();
const path = require('path');

const {port,host} =require('./config.json');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'pageTemplates'));

const homePath =path.join(__dirname,'home.html');

app.get('/',(req,res)=> res.sendFile(homePath));
app.post('/login',express.urlencoded({extended:false}),(req,res) =>

{
     console.log(req.body);
    res.render('result',{
        title:"Your Data",
    header1:'you send this files',
data:req.body})
    // res.send(`<h1>User is : ${req.body.name}</h1>`)
});


app.listen(port,host, ()=>console.log(`port ... ${port} : host ... ${host}`))