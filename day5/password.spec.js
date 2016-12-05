import {describe, it} from "mocha";
import {expect} from 'chai';
import {md5Hash, Password, isHashValid} from "./pasword";

const input = 'uqwqemis';

function dumyHash() {
    return '000001';
}

describe('Day 5', () => {
    describe('can create', () => {
        it('hex hash of input', () => {
            expect(md5Hash(input)).to.equal('12ac37c4fd3da90fad1fadfd2b3ebafe');
        });
    });

    describe('can determine ', () => {
        it('if the hash has 5 leading zeros', () => {
            expect(isHashValid('000005132')).to.equal(true);
        });
        it('or not', () => {
            expect(isHashValid('000105132')).to.equal(false);
        });
    });

    describe('A password', () => {
        it('is 8 caracters long', () => {
            expect(new Password(dumyHash).of(input)).to.equal('11111111');
        });
    });

    it.skip('can solve day 5 part 1', () => {
        expect(new Password(md5Hash).of(input)).to.equal('1a3099aa');
    });
});
