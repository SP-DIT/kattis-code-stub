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
 * Complete the 'findMultiplier' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER N as parameter.
 */

function findMultiplier(N) {
    // Write your code here

    console.log(N)
}

function main() {
    const ws = process.stdout;

    const k = parseInt(readLine().trim(), 10);

    for (let kItr = 0; kItr < k; kItr++) {
        const N = parseInt(readLine().trim(), 10);

        const p = findMultiplier(N);

        ws.write(p + '\n');
    }

    ws.end();
}
