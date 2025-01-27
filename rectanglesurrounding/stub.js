'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'findGridSquares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY corners as parameter.
 */

function findGridSquares(corners) {
    // Write your code here
    console.log(corners)
}

function main() {
    const ws = process.stdout;

    const k = parseInt(readLine().trim(), 10);

    for (let kItr = 0; kItr < k; kItr++) {
        const n = parseInt(readLine().trim(), 10);

        let corners = Array(n);

        for (let i = 0; i < n; i++) {
            corners[i] = readLine().replace(/\s+$/g, '').split(' ').map(cornersTemp => parseInt(cornersTemp, 10));
        }

        const squareCount = findGridSquares(corners);

        ws.write(squareCount + '\n');
    }
}
