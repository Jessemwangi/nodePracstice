'use strict'
const http = require('http');
const person = require('./person.json');
const port = 3000;
const host = 'localhost';

const server = http.createServer((request,response) =>{
    response.writeHead(200,{
        'content-type':'application/json; charset=utf-8'});
         response.end(JSON.stringify(person));
});
server.listen(port,host, ()=> console.log(`server ${host}:${port} is serving`));