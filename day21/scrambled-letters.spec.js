import {describe, it} from 'mocha';
import {expect} from 'chai';
import {perform, scramble, unscramble} from "./scrambled-letters";
import {readLines} from "../read_file";

describe('Day 21', () => {
    describe('operations', () => {
        it('solve swap position', () => {
            const pwd = 'abcde';
            expect(perform('swap position 4 with position 0', pwd)).to.equal('ebcda');
            expect(perform('swap position 0 with position 4', pwd)).to.equal('ebcda');
            const pwd2 = 'abcdefgh';
            expect(perform('swap position 6 with position 5', pwd2)).to.equal('abcdegfh');

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
        it('solve move position', () => {
            const pwd = 'bcdea';
            expect(perform('move position 1 to position 4', pwd)).to.equal('bdeac');
            expect(perform('move position 1 to position 3', pwd)).to.equal('bdeca');
            expect(perform('move position 3 to position 0', pwd)).to.equal('ebcda');
        });
        it('solve rotate based on position of letter', () => {
            const pwd = 'abdec';
            expect(perform('rotate based on position of letter b', pwd)).to.equal('ecabd');
            const pwd2 = 'ecabd'; // 4 + 2 = 6 - lenght = 1
            expect(perform('rotate based on position of letter d', pwd2)).to.equal('decab');
        });
    });

    describe('Part 1', () => {
        it('dummy input', () => {
            const dummyInput = [
                'swap position 4 with position 0',
                'swap letter d with letter b',
                'reverse positions 0 through 4',
                'rotate left 1 step',
                'move position 1 to position 4',
                'move position 3 to position 0',
                'rotate based on position of letter b',
                'rotate based on position of letter d'
            ];
            const dummyPwd = 'abcde';
            expect(scramble(dummyInput, dummyPwd)).to.equal('decab');
        });
        it('real input', () => {
            const input = readLines('day21/input.data');
            const pwd = 'abcdefgh';
            expect(scramble(input, pwd)).to.equal('gbhafcde');
        });
    });

    describe('Part 2', () => {
        it('real input', () => {
            const input = readLines('day21/input.data');
            const pwd = 'fbgdceah';
            expect(unscramble(input, pwd)).to.equal('bcfaegdh');
        });

        it('reverse rotate based on position of letter no loop', () => {
            const pwd = 'ecabd'; // orig index 1 => index 3
            expect(unscramble(['rotate based on position of letter b'], pwd)).to.equal('abdec');
        });

        it('reverse rotate based on position of letter with loop', () => {
            const pwd2 = 'decab'; // orig index 4 == last char => index 0
            expect(unscramble(['rotate based on position of letter d'], pwd2)).to.equal('ecabd');
        });
    });
});