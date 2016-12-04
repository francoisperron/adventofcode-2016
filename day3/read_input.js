import {readFileSync} from "fs";

export function readInput() {
    return readLines().map(parseLine);
}
export function readInputVerticaly() {
    const lines = readLines();
    const triangles = [];
    for (let i = 0; i < lines.length; i = i + 3) {
        const firstLine = parseLine(lines[i]);
        const secondLine = parseLine(lines[i + 1]);
        const thirdLine = parseLine(lines[i + 2]);

        triangles.push([firstLine[0], secondLine[0], thirdLine[0]]);
        triangles.push([firstLine[1], secondLine[1], thirdLine[1]]);
        triangles.push([firstLine[2], secondLine[2], thirdLine[2]]);
    }
    return triangles;
}

function readLines() {
    return readFileSync('day3/input.data').toString().split("\n");
}

function parseLine(line) {
    return line.split(' ').filter(e => e != '')
}
