import {describe, it} from 'mocha';
import {expect} from 'chai';
import * as assert from "assert";
import {Screen, rect} from "./screen";
import {readLines} from "../read_file";

describe('Day 8', () => {
    describe('Can create a screen', () => {
        it('of 1x1', () => {
            assert.deepEqual(new Screen(1, 1).pixels, [['.']]);
        });
        it('of 1x2', () => {
            assert.deepEqual(new Screen(2, 1).pixels, [['.', '.']]);
        });
        it('of 1x2', () => {
            assert.deepEqual(new Screen(1, 2).pixels, [['.'], ['.']]);
        });
    });

    describe('Can fill rectangles', () => {
        it('of 1x1', () => {
            assert.deepEqual(new Screen(2, 2).fill(1, 1).pixels, [['#', '.'], ['.', '.']]);
        });

        it('of 1x2', () => {
            assert.deepEqual(new Screen(2, 2).fill(2, 2).pixels, [['#', '#'], ['#', '#']]);
        });
    });

    describe('Can rotate column', () => {
        it('down by 1', () => {
            assert.deepEqual(new Screen(2, 2).fill(1, 1).rotateColumn(0, 1).pixels, [['.', '.'], ['#', '.']]);
        });
        it('down by 2, wraps up', () => {
            assert.deepEqual(new Screen(2, 3).fill(1, 2).rotateColumn(0, 2).pixels, [['#', '.'], ['.', '.'], ['#', '.']]);
        });
    });

    describe('Can rotate row', () => {
        it('right by 1', () => {
            assert.deepEqual(new Screen(2, 2).fill(1, 1).rotateRow(0, 1).pixels, [['.', '#'], ['.', '.']]);
        });
        it('down by 2, wraps up', () => {
            assert.deepEqual(new Screen(3, 2).fill(2, 1).rotateRow(0, 2).pixels, [['#', '.', '#'], ['.', '.', '.']]);
        });
    })

    describe('Can parse sequences', () => {
        it('rect 1x2', () => {
            assert.deepEqual(new Screen(2, 2).process(['rect 1x2']).pixels, [['#', '.'], ['#', '.']]);
        });
        it('rotate column x=1 by 1', () => {
            assert.deepEqual(new Screen(2, 2).process(['rect 2x1', 'rotate column x=1 by 1']).pixels, [['#', '.'], ['.', '#']]);
        });
        it('rotate row x=1 by 1', () => {
            assert.deepEqual(new Screen(2, 2).process(['rect 1x1', 'rotate row x=0 by 1']).pixels, [['.', '#'], ['.', '.']]);
        });
    });

    describe('Day8', () => {
        it('Part 1', () => {
            const pixels = new Screen(50, 6).process(readLines('day8/input.data')).pixels;
            expect(show(pixels).split('').filter(p => p == '#').length).to.equal(119);
        });
        it('Part 2', () => {
            const pixels = new Screen(50, 6).process(readLines('day8/input.data')).pixels;
            console.log(show(pixels));
        });

    });
});


function show(pixels) {
    return pixels.map(row => row.join('')).join('\n');
}