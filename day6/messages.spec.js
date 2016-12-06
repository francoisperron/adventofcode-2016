import {describe, it} from "mocha";
import {expect} from 'chai';
import {parseMessages, mostCommonCharIn} from "./messages";
import * as assert from "assert";
import {readLines} from "./read_input";

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

    describe('can solve day 6 part 1', () => {
        it('dummy input', () => {
            const parsed = parseMessages(dummyInput);
            const message = parsed.map(m => mostCommonCharIn(m)).join('');
            expect(message).to.equal('easter');
        });

        it('real input', () => {
            const parsed = parseMessages(readLines());
            const message = parsed.map(m => mostCommonCharIn(m)).join('');
            expect(message).to.equal('mlncjgdg');
        });
    });
});
