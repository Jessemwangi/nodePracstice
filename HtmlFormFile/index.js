'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs'); //get the file system of the server

const {port,host}=require('./config.json')

const homePath = path.join(__dirname,'home.html');
// console.log(homePath);


// Read file with a call back function


const server = http.createServer((req,res) =>{
    fs.readFile(homePath,"utf8",(err,data)=>{
if (err){
    res.statusCode=404
    res.end(err.message);
}
else
{
    res.writeHead(200, 
        {'content-type':'text/html',
        'content-Length':Buffer.byteLength(data,'utf8')
});
res.end(data);
}
    })
})

server.listen(port,host,()=> console.log(`server is serving port ... ${port} host ${host}...`));