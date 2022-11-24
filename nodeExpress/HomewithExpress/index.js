'sue strict';
const express =require('express');
const app =express();

const path = require('path');

const port= 3000;
const host ='localhost';

const homepath = path.join(__dirname, 'home.html');
const pageBpath = path.join(__dirname, 'pageb.html');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) =>res.sendFile(homepath));
app.get('/pageb', (req,res) =>res.sendFile(pageBpath));

;app.listen(port,host,()=>console.log(`server ${port} : ${host} .... `));