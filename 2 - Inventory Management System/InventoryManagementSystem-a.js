"use strict";

const fs = require('fs');

fs.readFile('puzzle.input', 'UTF-8', calc);

function calc(err, fileContent) {
    if (err) {
        throw err;
    }

    var twice = 0;
    var third = 0;

    var lines = fileContent.split('\n');
    for (var line of lines) {
        
        var twiceOccured = false;
        var thirdOccured = false;
        var checkedCharacters = [];

        var characters = line.trim().split('');
        for (var character of characters) {
            if (checkedCharacters.includes(character)) {
                continue;
            }

            var occurence = countCharacter(character, characters);
            if (occurence == 2 && !twiceOccured) {
                twice++;
                twiceOccured = true;
            } else if (occurence == 3 && !thirdOccured) {
                third++;
                thirdOccured = true;
            }

            checkedCharacters.push(character);
        }
    }

    console.log("twice: " + twice + ", third: " + third + ", result: " + twice*third)
}

function countCharacter(characterToCount, array) {
    var occurence = 0;
    for(var character of array) {
        if (character == characterToCount) {
            occurence++;
        }
    }
    return occurence;
}