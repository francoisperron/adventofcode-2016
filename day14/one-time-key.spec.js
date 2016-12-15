import {describe, it} from 'mocha';
import {expect} from 'chai';
import {generateKey, possibleKey, validKey} from "./one-time-key";

const dummyInput = 'abc';

describe('Day 14', () => {
    it('Can generate lowercase hex md5 of salt+index', () => {
        expect(generateKey(dummyInput+18)).to.contains('cc38887a5');
    });
    it('Can determine if a string contains 3 repeating char', () => {
        expect(possibleKey(generateKey(dummyInput+18))).to.equal('8');
        expect(possibleKey(generateKey(dummyInput+17))).to.equal(undefined);
    });
    it('Can determine if a string contains 5 repeating specific char', () => {
        expect(validKey(generateKey(dummyInput+816), 'e')).to.equal(true);
        expect(validKey(generateKey(dummyInput+17), '8')).to.equal(false);
    });
});
