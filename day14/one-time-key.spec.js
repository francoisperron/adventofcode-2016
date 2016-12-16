import {describe, it} from 'mocha';
import {expect} from 'chai';
import {generateKey, generateKeys, containsTriplet, containsQuintuplet, validKey} from "./one-time-key";

const dummyInput = 'abc';

describe('Day 14', () => {
    it('Can generate lowercase hex md5 of salt+index', () => {
        expect(generateKey(dummyInput + 18)).to.contains('cc38887a5');
    });
    it('Can determine if a string contains 3 repeating char', () => {
        expect(containsTriplet(generateKey(dummyInput + 18))).to.equal('8');
        expect(containsTriplet(generateKey(dummyInput + 17))).to.equal(undefined);
    });
    it('Can determine if a string contains 5 repeating specific char', () => {
        expect(containsQuintuplet(generateKey(dummyInput + 816), 'e')).to.equal(true);
        expect(containsQuintuplet(generateKey(dummyInput + 17), '8')).to.equal(false);
    });
    it('Validates if a key is valid looking at the next 1000 hash', () => {
        expect(validKey(dummyInput, 18, '8')).to.equal(false);
        expect(validKey(dummyInput, 39, 'e')).to.equal(true);
    });

    describe('Part 1', () => {
        it('Generates 64th valid key at index 22728 for the dummy data', function () {
            this.timeout(50000);
            const keys = generateKeys(dummyInput);

            expect(keys[63].index).to.equal(22728);
            expect(keys[63].key).to.equal('26ccc731a8706e0c4f979aeb341871f0');
        });

        it('Real input', function () {
            this.timeout(50000);
            const keys = generateKeys('cuanljph');

            expect(keys.length).to.equal(64);
            expect(keys[63].index).to.equal(23769);
        });
    });
});
