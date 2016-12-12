import {describe, it} from 'mocha';
import {expect} from 'chai';
import {parseInstructions} from "./instructions";
import {readLines} from "../read_file";

const dummyInstructions = [
    'value 5 goes to bot 2',
    'bot 2 gives low to bot 1 and high to bot 0',
    'value 3 goes to bot 1',
    'bot 1 gives low to output 1 and high to bot 0',
    'bot 0 gives low to output 2 and high to output 0',
    'value 2 goes to bot 2'
];

describe('Day 10', () => {
    describe('Part 1', () => {
        it.skip('Finds the bot 2 with dummy input', () => {
            parseInstructions(dummyInstructions);
        });
        it('Finds the bot 157 with real input', () => {
            parseInstructions(readLines('day10/input.data'));
        });
    });

    describe('Part 2', () => {
        it('Multiply one chip from output 0,1,2', () => {
            const part2 = parseInstructions(readLines('day10/input.data'));
            expect(part2).to.equal(1085);
        });
    });
});
