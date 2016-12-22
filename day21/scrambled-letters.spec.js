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
    });
});