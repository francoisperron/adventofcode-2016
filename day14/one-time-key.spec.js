import {describe, it} from 'mocha';
import {expect} from 'chai';
import {generateKey} from "./one-time-key";

const dummyInput = 'abc';

describe('Day 14', () => {
    it('Can generate lowercase hex md5 of salt+index', () => {
        expect(generateKey(dummyInput+18)).to.contains('cc38887a5');
    });
});
