'use strict';
const cars = require('./cars.json');

const getAllCars = () =>{
    return cars;
}
const getAllCarsJson = () =>{
    return JSON.parse(cars);
   
}
const GetAllModel = () =>{
const models=[];
for(const car of cars){
    // console.log(car.model);
    if(!models.includes(car.model)){
        models.push(car.model);
            }
}
return models;
}

function getCar(key,value){
    const found = [];
    if(key && value){
        for (const car of cars){
            if(car[key]===value)
            {
                found.push(car);
            }
        }
    }
    return found;
}

module.exports={getAllCars,GetAllModel,getCar,getAllCarsJson};