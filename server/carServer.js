'use strict';
const http = require('http');
const storage = require('./carStorage');
// console.log(storage.getAllCars());
const port = 3002;
const host = 'localhost';
const server = http.createServer((req,resp) => {
    resp.writeHead(200,{'Content-type':'text/html; charset = utf-8'});
    resp.end(createHtmlPage(storage.getAllCars()));
});

server.listen(port,host,()=>console.log(`server ${port}, ${host} is running......`))

const createHtmlPage = (cars) =>{
   let htmlString = `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Car data</title>
       <style>
           h1{
               color: green;
               
           }
       </style>
   </head>
   <body>
       <h1></h1>'<h1>Cars</h1>`;
       
for(const car of cars){
    htmlString +=`<h2>${car.model} : ${car.lincese}`
}
htmlString +=`</body></html>`
    return htmlString;
}