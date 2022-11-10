'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs'); //get the file system of the server

const {port,host}=require('./config.json')

const homePath = path.join(__dirname,'home.html');
// console.log(homePath);


// Read file with a call back function

const server = http.createServer(async (req,res) =>{
    sendFile(res,homePath);
    
})

server.listen(port,host,()=> console.log(`server is serving port ... ${port} host ${host}...`));


async function sendFile(res,filePath){
    try {
        
        const data = await fs.promises.readFile(filePath,'utf8');
        res.writeHead(200, 
            {'content-type':'text/html',
            'content-Length':Buffer.byteLength(data,'utf8')
        });
        res.end(data);
    } catch (error) {
        res.statusCode = 404;
        res.end(`ÒOOPPSS!!!:  ${error.message}`)
    }
}