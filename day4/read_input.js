import {readFileSync} from "fs";

export function readLines() {
    return readFileSync('day4/input.data').toString().split("\n");
}
