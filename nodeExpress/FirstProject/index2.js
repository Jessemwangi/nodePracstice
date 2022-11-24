'use strict';
const http =require('http');
// const https =require('https');

const express = require('express');
const app =express();
const port =3000;
const host ='localhost';

const server = http.createServer(app);
// const servers = https.createServer(app);
app.get('/',(req,res) =>res.send('<h1>Hello Express!!</h1>'));
server.listen(port,host,()=>console.log(`server ${host} : ${port}`));