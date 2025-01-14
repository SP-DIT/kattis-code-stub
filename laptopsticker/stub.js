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
 * Complete the 'fittingRectangle' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY dimensions as parameter.
 */

function fittingRectangle(w1, h1, w2, h2) {
  // Write your code here
  return w1 + h1 + w2 + h2;
}

function main() {
  const ws = process.stdout;

  const dimensions = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((dimensionsTemp) => parseInt(dimensionsTemp, 10));

  const result = fittingRectangle(...dimensions);

  ws.write(result + '\n');

  ws.end();
}
