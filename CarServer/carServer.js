'use strict'
const http = require('http');
const {port,host} = require('./config.json');
const storage = require('./carStorage');

const server = http.createServer((req,res) =>{
    const {searchParams,pathname} = new URL(`http://${req.headers.host}${req.url}`)
    let resultHtml='';
    if (pathname ==='/cars'){
        resultHtml=createCarHtml(storage.getAllCars());

    }
    else if (pathname ==='/cartypes')
    {
        resultHtml =createCatTypes(storage.GetAllModel());
    }
    else if  (pathname ==='/search/bylicense') 
    {
        const value = searchParams.get('value');
        resultHtml =createCarHtml(storage.getCar('lincese',value));
    }
    else if  (pathname ==='/search/bymodel') 
    {
        const value = searchParams.get('value');
        resultHtml =createCarHtml(storage.getCar('model',value));
    }
    else 
    {
        resultHtml =`<h1> ERROR </h1>`;
    }
    res.writeHead(200,{'content-type':'text/html; charset = utf-8'});
    res.end(resultHtml);
});

server.listen(port,host, () =>console.log(`server running in port ${port}.... ${host} ...`))

const createCarHtml = (carFetched) =>{
let htmlString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cars</title>
</head>
<body>
<h1>SEARCH RESULT</h1>`;
if (carFetched.length ===0){
    htmlString +=`<h2> NO CARS FOUND</h2>`;
}
else{
    htmlString += `
    <table style="border: solid black 2px;"><thead style="border: solid black 2px;">
    <th style="border: solid black 2px;">Model</th>
    <th>Licence</th>
</thead>
<tbody>
`;
for (const car of carFetched){
    htmlString += `<tr style="border: solid black 2px;">
    <td style="border: solid black 2px;"> ${car.model}</td>
    <td>${car.lincese}</td>
    </tr>`;

}
htmlString += `</tbody>
</table>`;
}
htmlString += `</body>
</html>`;
return htmlString;
}

function createCatTypes (typesArray)
{
    let htmlString =`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Cars</title>
    </head>
    <body>
        <h1>Search Result</h1>
        <ul>
        <li>${typesArray.join('</li><li>')}
        </li>
        </ul>
        </body>
</html>`
        return htmlString;
}