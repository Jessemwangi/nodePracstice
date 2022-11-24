'use strict';
const express = require('express');
const app =express();
const port =3000;
const host ='localhost';
app.get('/',(req,res) =>res.send('<h1>Hello Express!!</h1>'));
app.listen(port,host,()=>console.log(`server ${host} : ${port}`));