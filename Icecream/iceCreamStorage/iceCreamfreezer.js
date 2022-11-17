'use strict';
const path =require('path');
const {read} = require('../library/utilities');  // path shold be done in the a config file, hardcorded is not good
const jsonPath = path.join(__dirname,'iceCream.Json');

const fetchAllFlavors = async () =>{
    try {
        const data = await read(jsonPath);
        const iceCreams = await JSON.parse(data.fileData);
        return Object.keys(iceCreams);
        
    } catch (error) {
        return [];
    }
};

const hasFlavor = async (flavor) => {
    try {
        const data = await read(jsonPath);
        const iceCreams = await JSON.parse(data.fileData);
        return Object.keys(iceCreams).includes(flavor);
    } catch (error) {
        return false;
    }
};

const getIceCream = async  (flavor) => {

    try {
        const data = await read(jsonPath);
        const iceCreams = await JSON.parse(data.fileData);
        return iceCreams[flavor]  || null ;
    } catch (error) {
        return false;
    }

};

module.exports = {fetchAllFlavors,hasFlavor,getIceCream}