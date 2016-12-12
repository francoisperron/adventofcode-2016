import {describe, it} from 'mocha';
import {expect} from 'chai';
import {decompressPart1, decompressPart2, Marker} from "./decompress";
import {readLines} from "../read_file";

describe('Day 9', () => {
    describe('Decompressed lenght part 1', () => {
        it('of ADVENT is 6', () => {
            expect(decompressPart1('ADVENT')).to.equal(6);
        });
        it('of A(1x5)BC is 7', () => {
            expect(decompressPart1('A(1x5)BC')).to.equal(7);
        });
        it('of (3x3)XYZ is 9', () => {
            expect(decompressPart1('(3x3)XYZ')).to.equal(9);
        });
        it('of A(2x2)BCD(2x2)EFG is 11', () => {
            expect(decompressPart1('A(2x2)BCD(2x2)EFG')).to.equal(11);
        });
        it('of (6x1)(1x3)A is 6', () => {
            expect(decompressPart1('(6x1)(1x3)A')).to.equal(6);
        });
        it('of X(8x2)(3x3)ABCY is 6', () => {
            expect(decompressPart1('X(8x2)(3x3)ABCY')).to.equal(18);
        });
        it('of input is 98135', () => {
            expect(decompressPart1(readLines('day9/input.data')[0])).to.equal(98135);
        });
    });

    describe('A marker', () => {
        it('parses marker', () => {
            expect(new Marker('X(8x2)(3x3)ABCY', 1).marker).to.equal('8x2')
        });
        it('computes length based on marker plus the ( )', () => {
            expect(new Marker('X(8x2)(3x3)ABCY', 1).lenght()).to.equal(5)
        });
        it('computes numberOfCharsToRepeat', () => {
            expect(new Marker('X(8x2)(3x3)ABCY', 1).numberOfCharsToRepeat()).to.equal(8)
        });
        it('computes numberOfTimes', () => {
            expect(new Marker('X(8x2)(3x3)ABCY', 1).numberOfTimes()).to.equal(2)
        });
    });

    describe('Decompress lenght part 2', () => {
        it('of (3x3)XYZ is 9', () => {
            expect(decompressPart2('(3x3)XYZ')).to.equal(9);
        });
        it('of X(8x2)(3x3)ABCY is 20', () => {
            expect(decompressPart2('X(8x2)(3x3)ABCY')).to.equal(20);
        });
        it('of (13x10)(7x10)(1x10)A is 1000', () => {
            expect(decompressPart2('(13x10)(7x10)(1x10)A')).to.equal(1000);
        });
        it('of (7x2)(1x2)AB is 1000', () => {
            expect(decompressPart2('(7x2)(1x2)AB')).to.equal(6);
        });
        it('of (25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN is 445', () => {
            expect(decompressPart2('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN')).to.equal(445);
        });
        it('of (27x12)(20x12)(13x14)(7x10)(1x12)A is 241920', () => {
            expect(decompressPart2('(27x12)(20x12)(13x14)(7x10)(1x12)A')).to.equal(241920);
        });

        it('of input is 241920', () => {
            expect(decompressPart2(readLines('day9/input.data')[0])).to.equal(10964557606);
        });
    });
});
