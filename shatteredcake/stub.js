'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'calculateArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER w
 *  2. 2D_INTEGER_ARRAY dimensions
 */

function calculateArea(w, dimensions) {
    // Write your code here
    let totalArea = 0;
    let finalLength = 0;
    for (let [width, length] of dimensions) {
        totalArea += width * length;
    }
    finalLength = totalArea / w;
    return finalLength;
}

function main() {
    const ws = process.stdout;

    const w = parseInt(readLine().trim(), 10);

    const n = parseInt(readLine().trim(), 10);

    let dimensions = Array(n);

    for (let i = 0; i < n; i++) {
        dimensions[i] = readLine().replace(/\s+$/g, '').split(' ').map(dimensionsTemp => parseInt(dimensionsTemp, 10));
    }

    const result = calculateArea(w, dimensions);

    ws.write(result + '\n');

    ws.end();
}
