'use strict';

const http = require('http');
const path =require('path');

const {sendFile} = require('./library/utilities');
const {search} = require('./storage/personsDatalayer');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const homepath = path.join(__dirname,'home.html');


const server = http.createServer((req,res) =>{
    const {searchParams, pathname} = new URL(`http://${req.headers.host}${req.url}`);

    const route = decodeURIComponent(pathname);
   
    if (route ==='/'){
        sendFile(res,homepath);
    }
    else if(route.startsWith('/styles/')) {
        sendFile(res,path.join(__dirname,route), 'text/css');
    }
    else if(route.startsWith('/js/')) {
        sendFile(res,path.join(__dirname,route), 'text/javascript');
    }
    else{
        let result = [];
        if (route==='/persons')
        {
            result=search();
        }
        else if (route == '/persons/firstname'){
        result = search('firstname',searchParams.get('value'));
        }
        else if (route == '/persons/lastname'){
            result = search('lastname',searchParams.get('value'));
        }
        else if (route == '/persons/age'){
            result = search('age',searchParams.get('value'));
        }
        else{
            result ={message:'Key not found in records'}
        }
        res.writeHead(200,{'content-type':'apllication/json'});
        res.end(JSON.stringify(result));
    }

});

server.listen(port,host, ()=>console.log(`server is serving ... port : ${port} , host ${host} ....`));