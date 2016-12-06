import {readFileSync} from "fs";

export function readLines() {
    return readFileSync('day6/input.data').toString().split("\n");
}
