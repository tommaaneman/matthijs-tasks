import express from 'express';
import chalk from 'chalk';

const testArray = ['tom', 'poep', 'hoofd'];
const testArrays = [['tom', 'poep', 'hoofd'], ['matthijs', 'butt', 'face']];
const testWrongArray = ['tom', 'poep', 'hoofd', 'test'];
const testString = 'tom,poep,hoofd';

class mensenNoLogic {
    constructor(name, dit, dat){
        this.name = name;
        this.dit = dit;
        this.dat = dat;
    };
};

class mensenLogic {
    constructor(input){
        var elements = input.split(',');
        this.name = elements[0];
        this.dit = elements[1];
        this.dat = elements[2];
    };
};

export function arrayToObject(array) {
    if(array.length != 3) {
        throw chalk.red.bold(arrayToObject.name + `: Array lenght = ${array.length}, must be 3!`);
    }
    else(array.length == 3); {
        const data = new mensenNoLogic(array[0], array[1], array[2]);
        return data     
    };
}

for(var i of testArrays) {
    var data = new mensenNoLogic(i[0], i[1], i[2]);
    //console.log(data);
}

var testData = new mensenLogic(testString);

export default arrayToObject