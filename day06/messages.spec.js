import {describe, it} from "mocha";
import {expect} from 'chai';
import {parseMessages, mostCommonCharIn, leastCommonCharIn} from "./messages";
import * as assert from "assert";
import {readLines} from "../read_file";

const dummyInput = [
    'eedadn',
    'drvtee',
    'eandsr',
    'raavrd',
    'atevrs',
    'tsrnev',
    'sdttsa',
    'rasrtv',
    'nssdts',
    'ntnada',
    'svetve',
    'tesnvt',
    'vntsnd',
    'vrdear',
    'dvrsen',
    'enarar'
];

describe('Day 6', () => {
    describe('Creates a char array by columns', () => {
        it('for a single line', () => {
            assert.deepEqual(parseMessages(["eedadn"]), ['e', 'e', 'd', 'a', 'd', 'n']);
        });

        it('for a two lines', () => {
            const parsed = parseMessages(["eedadn", "drvtee"]);
            assert.deepEqual(parsed, ['ed', 'er', 'dv', 'at', 'de', 'ne']);
        });
    });

    describe('Determine the most common char in a string', () => {
        it('when its obvious', () => {
            expect(mostCommonCharIn('rraaa')).to.equal('a');
        });
    });

    describe('Determine the least common char in a string', () => {
        it('when its obvious', () => {
            expect(leastCommonCharIn('rraaa')).to.equal('r');
        });
    });

    describe('can solve day 6 part 1', () => {
        it('dummy input', () => {
            const parsed = parseMessages(dummyInput);
            const message = parsed.map(m => mostCommonCharIn(m)).join('');
            expect(message).to.equal('easter');
        });

        it('real input', () => {
            const parsed = parseMessages(readLines('day06/input.data'));
            const message = parsed.map(m => mostCommonCharIn(m)).join('');
            expect(message).to.equal('mlncjgdg');
        });
    });

    describe('can solve day 6 part 2', () => {
        it('dummy input', () => {
            const parsed = parseMessages(dummyInput);
            const message = parsed.map(m => leastCommonCharIn(m)).join('');
            expect(message).to.equal('advent');
        });

        it('real input', () => {
            const parsed = parseMessages(readLines('day06/input.data'));
            const message = parsed.map(m => leastCommonCharIn(m)).join('');
            expect(message).to.equal('bipjaytb');
        });
    });
});
