'use strict';
const {getAllCars,
    GetAllModel,
    getCar} = require('./carStorage');//best practice if the file carstorage has many function and you only require 3
console.log('start here');
console.log(getAllCars());
// console.log(GetAllModel());
console.log(`\nAll available models: \n\t${GetAllModel().join('\n\t')}`);
console.log(getCar('model','Fast Gt'),'ssss');
console.log(getCar('lincese','H978-1'));
console.log(getCar('lincese','0009'));
console.log(getCar('model'));
console.log(getCar('x','x'));