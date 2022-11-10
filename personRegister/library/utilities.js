'use strict';
const fs = require('fs').promises;

async function sendFile(res,filePath, contentType ='text/html'){
    try {
        
        const data = await fs.readFile(filePath,'utf8');
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

module.exports ={sendFile}