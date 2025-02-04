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
 * Complete the 'calculateRatios' function below.
 *
 * The function is expected to return a FLOAT_ARRAY.
 * The function accepts STRING processedString as parameter.
 */

function calculateRatios(processedString) {
    // Write your code here

    console.log(processedString)
    let testResult = [0.1, 0.2, 0.3, 0.4]
    return testResult
}

function main() {
    const ws = process.stdout;

    const processedString = readLine();

    const ratios = calculateRatios(processedString);

    ws.write(ratios.join('\n') + '\n');

    ws.end();
}
