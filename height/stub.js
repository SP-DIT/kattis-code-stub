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
 * Complete the 'findStepBacks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER K
 *  2. INTEGER_ARRAY students
 */

function findStepBacks(K, students) {
    // Write your code here

    console.log(K)
    console.log(students)
    let steps = [K, 4]
    return steps
}

function main() {
    const ws = process.stdout;

    const P = parseInt(readLine().trim(), 10);

    for (let PItr = 0; PItr < P; PItr++) {
        const K = parseInt(readLine().trim(), 10);

        const students = readLine().replace(/\s+$/g, '').split(' ').map(studentsTemp => parseInt(studentsTemp, 10));

        const steps = findStepBacks(K, students);

        ws.write(steps.join('\n') + '\n');
    }

    ws.end();
}
