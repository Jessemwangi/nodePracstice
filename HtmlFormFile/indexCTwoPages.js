'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs'); //get the file system of the server

const {port,host}=require('./config.json')

const homePath = path.join(__dirname,'home.html');
const pageAPath = path.join(__dirname,'PageA.html')
// console.log(homePath);


// Read file with a call back function

const server = http.createServer( (req,res) =>{
  const {pathname}=new URL(`http://${req.headers.host}${req.url}`)
  const route =decodeURIComponent(pathname);
  if (route ==='/home.html')
  {
    sendFile(res,homePath);
  }
  else if(route === '/PageA.html'){
    sendFile(res,pageAPath);
  }
  else if (route.startsWith('/styles/'))
  {
    sendFile(res,path.join(__dirname,route),'text/css');
  }
  else{
res.statusCode = 404;
res.end(`ÒOOPPSS!!!:  Page not found`);
  }
})

server.listen(port,host,()=> console.log(`server is serving port ... ${port} host ${host}...`));


async function sendFile(res,filePath, contentType ='text/html'){
    try {
        
        const data = await fs.promises.readFile(filePath,'utf8');
        res.writeHead(200, 
            {'content-type':contentType,
            'content-Length':Buffer.byteLength(data,'utf8')
        });
        res.end(data);
    } catch (error) {
        res.statusCode = 404;
        res.end(`ÒOOPPSS!!!:  ${error.message}`)
    }
}