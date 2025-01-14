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
 * Complete the 'countOverlappingDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY periods as parameter.
 */

function countOverlappingDays(periods) {
  // Write your code here
  return periods[2][1];
}

function main() {
  const ws = process.stdout;

  const n = parseInt(readLine().trim(), 10);

  let periods = Array(n);

  for (let i = 0; i < n; i++) {
    periods[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((periodsTemp) => parseInt(periodsTemp, 10));
  }

  const result = countOverlappingDays(periods);

  ws.write(result + '\n');

  ws.end();
}
