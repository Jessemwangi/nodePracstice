'use strict';
const http = require('http');
const { URL } = require('url');

const {port,host} = require('./config.json');
const server = http.createServer((req,res) =>{
    // console.log(req);
    // console.log(req.headers);
    // console.log(req.url);
    // console.log(Object.keys(req));
    const urlData = new URL(`http://${host}:${port}${req.url}`);
    const {pathname} = urlData;
    console.log(pathname);
    // console.log(urlData.URL);
    res.writeHead(200, {'content-type':'application/json'});
    res.end(JSON.stringify(urlData));
});
server.listen(port,host,()=>`server is running port: ${port} , host ${host}......`);