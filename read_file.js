import {readFileSync} from "fs";

export function readLines(file) {
    return readFileSync(file).toString().split("\n");
}
