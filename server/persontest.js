'uses strict';

const person = require('./person.json');
console.log(person);
console.log(`${person.lastName}, ${person.firstName}`);
console.log(person['age']);

function print(fieldname){
    console.log(person[fieldname]);
}
console.log('########################### 1')
print('age');
print('firstName');


function print2(fieldname){
    if (fieldname==='age')
    {
        console.log(person.age);
    }
    else if (fieldname==='firstname') {
        console.log(person.firstName);
    }
}

console.log('########################### 2')
print2('age');
print2('firstname');

console.log('################################# keys')
console.log(Object.keys(person));
for (const key of Object.keys(person)){
print(key);
}
console.log('##############values #######');
console.log(Object.values(person));
console.log('############## entries #######');
console.log(Object.entries(person));
for(const [key,value] of Object.entries(person)){
    console.log(`for the key "${key}" the value is ${value}`);
}
// object as javasript with comment
const person2 = {
    //commets arent allowed in json file
    firstName:"Vera",
    "lastName":"River",
    'note':`vera is ${person.age}` //this take the age of matt
}
console.log(person2);