'use strict';

const {fetchAllFlavors,hasFlavor,getIceCream} = require ('./iceCreamStorage/iceCreamfreezer');

// fetchAllFlavors().then(console.log).catch(console.log);
// hasFlavor('raspberry').then(console.log).catch(console.log);
// hasFlavor('X').then(console.log).catch(console.log);


//  getIceCream('2').then(console.log).catch(console.log);
//  getIceCream('X').then(console.log).catch(console.log);
 const gets = async () =>{
    try {
        const result = await getIceCream('vanilla');
        console.log(result);
    } catch (error) {
        console.log(error);
    }
 }


//     const response = Data.json();
//     return response;
// }

// console.log(gets());

gets();