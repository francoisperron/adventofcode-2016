import {describe, it} from 'mocha';
import {expect} from 'chai';
import {perform} from "./scrambled-letters";

describe('Day 21', () => {
    describe('operations', () => {
        it('solve swap position', () => {
            const pwd = 'abcde';
            expect(perform('swap position 4 with position 0', pwd)).to.equal('ebcda');
            expect(perform('swap position 0 with position 4', pwd)).to.equal('ebcda');
        });
        it('solve swap letters', () => {
            const pwd = 'ebcda';
            expect(perform('swap letter d with letter b', pwd)).to.equal('edcba');
            expect(perform('swap letter b with letter d', pwd)).to.equal('edcba');
            expect(perform('swap letter a with letter z', 'aazaaz')).to.equal('zzazza');
        });
        it('solve reverse positions', () => {
            const pwd = 'edcba';
            expect(perform('reverse positions 0 through 4', pwd)).to.equal('abcde');
            expect(perform('reverse positions 1 through 3', pwd)).to.equal('ebcda');
        });
        it('solve rotate left', () => {
            const pwd = 'abcde';
            expect(perform('rotate left 1 step', pwd)).to.equal('bcdea');
            expect(perform('rotate left 2 step', pwd)).to.equal('cdeab');
        });
        it('solve rotate right', () => {
            const pwd = 'abcde';
            expect(perform('rotate right 1 step', pwd)).to.equal('eabcd');
            expect(perform('rotate right 2 step', pwd)).to.equal('deabc');
        });
    });
});