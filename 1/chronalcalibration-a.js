"use strict";

const fs = require('fs');

fs.readFile('puzzle.input', 'UTF-8', calc);

function calc(err, fileContent) {
    if (err) {
        throw err;
    }

    var result = 0;

    var lines = fileContent.split('\n');
    for (var line of lines) {
        line = line.trim();

        var value = Number(line, 10);
        result += value;
    }

    console.log('Result = ' + result);
}