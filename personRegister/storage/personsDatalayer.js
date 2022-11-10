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
        found = [];
        return {"message": "Not found Please Retry"};
    }
}

module.exports ={search};