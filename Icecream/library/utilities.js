'use strict';

const fs =require('fs').promises;
const path = require('path');

const MIMETYPES =require('./mimetype.json');

const read = async filePath => {
    const extension = path.extname(filePath).toLowerCase();
    const mime = MIMETYPES[extension] || {type:'application/octet-stream',encoding:'binary'};

    try {
        const fileData = await fs.readFile(filePath, mime.encoding);
        return ({ fileData, mime });
    } catch (err) {
        return err;
    }
}


const send = (res,resource) => { // resource parsed from prev function as an objet (fileData,mime)
    res.writeHead(200,{
        'content-type':resource.mime.type,
        'content-length': Buffer.byteLength.apply(resource.fileData,res.mime.encoding)
    });
    res.end(resource.fileData, resource.mime.encoding);
};


const sendJson = (res,jsonresource) => {

    const jsonData = JSON.stringify(jsonresource)
    res.writeHead(200,{
        'Content-Type': 'application/json'
    });
    res.end(jsonData);
}

const senderror =(res,message,code=404) => {
    res.writeHead(code,{'Content-Type':'application/json'});
    res.end(JSON.stringify({message}));
}

const isIn = (route,...routes) =>{
    for (const start of routes){
        if (route.startsWith(start))
        return true;

    }
    return false
};

module.exports = {read,send,sendJson,senderror,isIn};