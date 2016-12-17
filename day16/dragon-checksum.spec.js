import {describe, it} from 'mocha';
import {expect} from 'chai';
import {dragonCurve, dragonCurves, matches, checksumRound, checksum} from "./dragon-checksum";

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

    describe('Checksum', () => {
        it('matches pairs', () => {
            expect(matches('11')).to.equal('1');
            expect(matches('00')).to.equal('1');
        });
        it('matches non pairs', () => {
            expect(matches('01')).to.equal('0');
            //expect(matches('10')).to.equal('0');
        });
        it('calculates checksum for one round', () => {
            expect(checksumRound('10000011110010000111')).to.equal('0111110101');
            expect(checksumRound('110010110100')).to.equal('110101');
        });
        it('calculates checksum until checksum length is odd', () => {
            expect(checksum('10000011110010000111')).to.equal('01100');
            expect(checksum('110010110100')).to.equal('100');
        });
    });

    describe('Part 1', () => {
        it('dummy data', () => {
            const curve = dragonCurves('10000', 20);
            const dummyChecksum = checksum(curve);

            expect(dummyChecksum).to.equal('01100')
        });
        it('real data', () => {
            const curve = dragonCurves('10111011111001111', 272);
            const realChecksum = checksum(curve);

            expect(realChecksum).to.equal('11101010111100010')
        });
    });

    describe('Part 2', () => {
        it.skip('real data', () => {
            const curve = dragonCurves('10111011111001111', 35651584);
            const realChecksum = checksum(curve);

            expect(realChecksum).to.equal('01001101001000101')
        });
    });
});