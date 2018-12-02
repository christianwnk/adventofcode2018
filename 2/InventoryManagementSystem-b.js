"use strict";

const fs = require('fs');

fs.readFile('puzzle.input', 'UTF-8', calc);

function calc(err, fileContent) {
    if (err) {
        throw err;
    }

    const lines = fileContent.split('\n');

    const columns = lines[0].length;
    for(var i=0; i<columns; i++) {

        var slicedLines = [];
        for (var line of lines) {
            var chars = line.trim().split('');
            chars[i] = '';

            var joined = chars.join('');
            if (slicedLines.includes(joined)) {
                console.log("duplicate: " + joined);
                return;
            }
            slicedLines.push(joined);
        }
    }
}