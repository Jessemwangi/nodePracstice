'use strict';
const http = require('http');
const { createServer } = require('http2');
const {port,host} = require('./config.json');
const server = http.createServer((req,res) =>{
    const {pathname,
        search,
        searchParams} = new URL(`http://${req.headers.host}${req.url}`);
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write(`
        <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request Object with search</title>
</head>
<body>
    <h1>Request information</h1>
    <h2>headers</h2>
    <pre>${JSON.stringify(req.headers,null,4)}</pre>
    <h2>${req.headers.host}</h2>
    <h2>${req.headers['user-agent']}</h2>
    <h2>Accet-Language : ${req.headers['accept-language']}</h2>
    <h2>method : ${req.method}</h2>
    <h2> pathname : ${pathname}</h2>
    <h2>SearchParams : ${searchParams}</h2>
    <h2>Search : ${search}</h2>
    <h3></h3>
    </body>
</html>`)
    res.end();
   
});
server.listen(port,host, ()=>console.log(`server is running in port ${port} .....`));