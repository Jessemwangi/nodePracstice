'use strict';
const http = require('http');
const {host,port}=require('./config.json');
const server = http.createServer((req,res) =>{
    const {pathname,searchParams} = new URL(`http://${req.headers.host}${req.url}`);
    let message ='HI Uknown!'
    const name = searchParams.has('name')? searchParams.get('name') : '';
    if (pathname ==='/greetings'){
        message =`Greeting ${name}!`;
    }
    else if(pathname==='/hi')
    {
        message =`HI ${name}!`;
    }
  
    res.writeHead(200,{'content-type':'text/html; charset=utf-8'});
    res.end(`<h1>${message}</h1>`);
})
server.listen(port,host, () =>(console.log(`server satrtted at port ${port} , ${host} ......`)));