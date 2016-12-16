import {describe, it} from 'mocha';
import {expect} from 'chai';
import {dragonCurve} from "./dragon-checksum";

/*
 x calculate dragon curve from input
 x until data >= diskSize
 - calculate checksum on dragon curve on disksize length
 -- repeat until checksum length si odd

 */

describe('Day 16', () => {
    describe('Dragon curve', () => {
        it('calculates from string', () => {
            expect(dragonCurve('1')).to.equal('100');
            expect(dragonCurve('0')).to.equal('001');
            expect(dragonCurve('11111')).to.equal('11111000000');
            expect(dragonCurve('111100001010')).to.equal('1111000010100101011110000');
        });
        it('until disksize is reached', () => {
            expect(dragonCurves('10000', 20)).to.equal('10000011110010000111');
        });
    });
});