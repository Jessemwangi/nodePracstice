'use strict';

const persons =require('./person.json');

const search = (key,value) =>{
    let found = [];
    if (key && value){
        for (const person of persons )
        {
            if (person[key]==value){
                found.push(person)
            }
        }
        return found;
    }
    else{
        return persons;
    }
}

module.exports ={search};