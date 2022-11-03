'use strict'
const http = require('http');
const {port,host} = require('./config.json');
const {getAllCars,GetAllModel,getCar} = require('./carStorage');
const { Console } = require('console');


const server = http.createServer((req,res) =>{
    const {
        searchParams,pathname
    } = new URL(`http://${req.headers.host}${req.url}`);
    const route = decodeURIComponent(pathname);
    
let result =[];
if (route ==='/cars')
{
    result=getAllCars();
}
else if (route ==='/carstypes')
{
    result=GetAllModel();
}
else if (route === '/search/bylicense')
{
    result = getCar(`lincese`, searchParams.get('value'));
}
else if (route == '/search/bymodel')
{
    result = getCar(`model`, searchParams.get('value'));
}
else{
    result = {message : 'Not Found'}
}

res.writeHead(200, {
    'content-type':'application/json',
    'Access-Control-Allow-Origin':'*'
});
res.end(JSON.stringify(result,null,2));
});

server.listen(port,host, () =>console.log(`server running in port ${port}.... ${host} ...`))