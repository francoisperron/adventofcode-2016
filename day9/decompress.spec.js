import {describe, it} from 'mocha';
import {expect} from 'chai';
import {decompress} from "./decompress";
import {readLines} from "../read_file";

describe('Day 9', () => {
    describe('Decompressed lenght', () => {
        it('of ADVENT is 6', () => {
            expect(decompress('ADVENT').length).to.equal(6);
        });
        it('of A(1x5)BC is 7', () => {
            expect(decompress('A(1x5)BC').length).to.equal(7);
        });
        it('of (3x3)XYZ is 9', () => {
            expect(decompress('(3x3)XYZ').length).to.equal(9);
        });
        it('of A(2x2)BCD(2x2)EFG is 11', () => {
            expect(decompress('A(2x2)BCD(2x2)EFG').length).to.equal(11);
        });
        it('of (6x1)(1x3)A is 6', () => {
            expect(decompress('(6x1)(1x3)A').length).to.equal(6);
        });
        it('of X(8x2)(3x3)ABCY is 6', () => {
            expect(decompress('X(8x2)(3x3)ABCY').length).to.equal(18);
        });
        it('of input is ?', () => {
            expect(decompress(readLines('day9/input.data')[0]).length).to.equal(98135);
        });
    });
});