'use strict';
const http = require('http');
const {port,host} = require('./config.json');
const server = http.createServer((req,res) =>{
    const {searchParams}=new URL(`http://${req.headers.host}${req.url}`)
    if (searchParams.has('name')){
        const name = searchParams.get('name');
        res.writeHead(200,{'content-type':'text/html ; charset=utf-8'});
        res.end(`<h1>hi ${name}</h1>`);
    }
    else
    {
        res.writeHead(200,{'content-type':'text/html ; charset=utf-8'});
        res.end(`<h1>Hello there nice of you to drop by</h1>`);
    }
});

server.listen(port,host, () =>(console.log(`server satrtted at port ${port} , ${host} ......`)));