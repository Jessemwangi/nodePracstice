'use strict';
const http = require('http');
const path = require('path');

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

const { read, send, sendJson, senderror, isIn } = require(path.join(__dirname, 'library', 'utilities.js'));
const { fetchAllFlavors, hasFlavor, getIceCream } = require(path.join(__dirname, 'iceCreamStorage', 'iceCreamfreezer.js'));

const resource = ['/favicon/', '/styles/', '/js/', '/images/'];

const homePath = path.join(__dirname, 'home.html');

const server = http.createServer(async (req, res) => {
    const { pathname } = new URL(`http://${req.headers.host}${req.url}`);
    const route = decodeURIComponent(pathname);

    try {
        if (route === '/') {
            const result = await read(homePath);
            send(res, result);
            
            // send (res,await read(homePath));
        }

        else if (isIn(route, ...resource)) {
            const result = await read(path.join(__dirname, route));
            console.log(route, result);
            send(res, result);
           
        }
        else if (route === '/all') {
            const flavors = await fetchAllFlavors();
            sendJson(res, flavors);
            console.log(res, flavors);
        }
        else if (isIn(route, '/icescream/')){ //route is '/icescream/vanilla etc
            const pathPart = route.split('/');
            if (pathPart.length > 2){
                const iceCreamFlavor =pathPart[2];
                
                if (await hasFlavor(iceCreamFlavor)){
                const icecream = await getIceCream(iceCreamFlavor);
                sendJson(res,icecream);
                console.log(res,icecream);
                }
                else{
                    senderror(res,'Icescream not found',400)
                }
            }
        }
        else {
            senderror(res, 'Not Found');
        }

    } catch (error) {
        senderror(res, error.message,400);
    }
});

server.listen(port, host, () => console.log(`server serving .... port ${port}, host ${host}....`));