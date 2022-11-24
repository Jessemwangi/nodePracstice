'uses strict';
const cars = require('./cars.json');
console.log(cars);
console.log(cars[0]);
console.log(cars[0].model);
console.log(cars[cars.length-1].model);
console.log('#######################');
for(const car of cars){
    // console.log(car.model);
    console.log('####################### filtered');
    if(car.model.toLowerCase()==='fast gt'){
        console.log(car.model,car.lincese);
    }   
}
const models=[];
for(const car of cars){
    // console.log(car.model);
    console.log('####################### include');
    if(!models.includes(car.model)){
        models.push(car.model);
            }
}
console.log(`available models: ${models.join(', ')}`);
console.log('#### filter #####');
console.log(cars.filter(car => car.model==='atat'));