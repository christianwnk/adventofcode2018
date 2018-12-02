"use strict";

const fs = require('fs');

fs.readFile('puzzle.input', 'UTF-8', calc);

function calc(err, fileContent) {
    if (err) {
        throw err;
    }

    var result = 0;
    var reachedFrequencies = [0];
    var firstFrequencyReachedTwice = null;

    var lines = fileContent.split('\n');

    while(!firstFrequencyReachedTwice) {
        for (var line of lines) {
            line = line.trim();
    
            var value = Number(line, 10);
            result += value;

            var frequencyAlreadyReached = reachedFrequencies.find((curvalue, index, array) => {
                return curvalue == result;
            });

            if (frequencyAlreadyReached) {
                firstFrequencyReachedTwice = frequencyAlreadyReached;
                break;
            } else {
                reachedFrequencies.push(result);
            }
        }
    }

    console.log('First frequency reached twice = ' + firstFrequencyReachedTwice);
}