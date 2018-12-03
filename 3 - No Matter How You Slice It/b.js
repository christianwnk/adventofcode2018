"use strict";

const fs = require('fs');

fs.readFile('puzzle.input', 'UTF-8', calc);

const size = 1000;

function calc(err, fileContent) {
    if (err) {
        throw err;
    }

    const ids = [];
    const field = create2DArray(size);

    const lines = fileContent.split('\n');
    for (var line of lines) {
        
        const data = parseLine(line);
        ids.push(data.id);

        for(var row=data.topDistance; row<data.topDistance+data.height; row++) {
            for (var column=data.leftDistance; column<data.leftDistance+data.width; column++) {
            
                if(!field[column][row]) {
                    field[column][row] = data.id;
                } else {
                    field[column][row] += ',' + data.id;
                }
            }
        }
    }

    for(var row=0; row<size; row++) {
        for (var column=0; column<size; column++) {
            
            if(field[column][row] && field[column][row].includes(',')) {
                const claimIds = field[column][row].split(',');
                for(var id of claimIds) {
                    const index = ids.indexOf(id);
                    if(index >= 0) {
                        ids.splice(index, 1);
                    }
                }
            } 
            
        }
    }

    console.log(ids);
}

function create2DArray(length) {
    const field = new Array(length);
    for(var i=0; i<length; i++) {
        field[i] = new Array(length);
    }
    return field;
}

function parseLine(line) {
    const atCharIndex = line.indexOf('@');
    const commaCharIndex = line.indexOf(',');
    const colonCharIndex = line.indexOf(':');
    const xCharIndex = line.indexOf('x');

    return {
        id : line.substring(1, atCharIndex).trim(),
        leftDistance : parseInt(line.substring(atCharIndex+1, commaCharIndex)),
        topDistance : parseInt(line.substring(commaCharIndex+1, colonCharIndex)),
        width : parseInt(line.substring(colonCharIndex+1, xCharIndex)),
        height : parseInt(line.substring(xCharIndex+1))
    }
}