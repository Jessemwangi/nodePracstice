'use strict'
const http = require('http');
const {port,host} = require('./config.json');
const storage = require('./carStorage');

const server = http.createServer((req,res) =>{
    const {pathname} = new URL(`http://${req.headers.host}${req.url}`)
    let resultHtml='';
    if (pathname ==='/cars'){
        resultHtml=createCarHtml(storage.getAllCars());

    }
    else
    {
res.end();
    }
    res.writeHead(200,{'content-type':'text/html; charset = utf-8'});
    res.end(resultHtml);
});

server.listen(port,host, () =>console.log('server running in port .... ...'))
const createCarHtml = (carFetched) =>{
    let ret = '';
    carFetched.forEach(car => {
       ret += `<p>${car.model} : ${car.lincese}</p>`
    });
    return ret;

}