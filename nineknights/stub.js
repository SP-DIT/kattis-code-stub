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
 * Complete the 'checkSolution' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY board as parameter.
 */

function checkSolution(board) {
    // Write your code here

    console.log(board)
}

function main() {
    const ws = process.stdout;

    let board = [];

    for (let i = 0; i < 5; i++) {
        const boardItem = readLine();
        board.push(boardItem);
    }

    const validity = checkSolution(board);

    ws.write(validity + '\n');

    ws.end();
}
