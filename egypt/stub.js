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
 * Complete the 'raTriangleVal' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY dimens as parameter.
 */

function raTriangleVal(dimens) {

    // Write your code here

}

function main() {

    const ws = process.stdout;
    const arrayLength = inputString.length;
    const n = arrayLength - 1;

    let dimens = Array(n);

    for (let i = 0; i < n; i++) {
        dimens[i] = readLine().replace(/\s+$/g, '').split(' ').map(dimensTemp => parseInt(dimensTemp, 10));
    }

    const result = raTriangleVal(dimens);

    ws.write(result + '\n');

    ws.end();
}
