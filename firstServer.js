'use strict';
const http = require('http');
const port = 3000;
const host = 'localhost';

const server = http.createServer((request,response) =>{
    // response.writeHead(200,{
    //     'content-type':'text/plain; charset=utf-8'});
    response.writeHead(200,{
        'content-type':'text/html; charset=utf-8'});
        // response.write('<H1>!Hello</H!>'); can also be ended at response
        // response.end();
         response.end('<h1>Hello!</h1>');
});
server.listen(port,host, ()=> console.log(`server ${host}:${port} is serving`));