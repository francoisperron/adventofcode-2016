import {describe, it, beforeEach} from "mocha";
import {expect} from 'chai';
import {md5Hash, Password, isHashValid, PasswordDecrypter} from "./pasword";

const input = 'uqwqemis';

function dumyPart1Hash() {
    return '000001';
}

let dummyCounter = 0;
function dumyPart2Hash() {
    const hash = '00000'+dummyCounter+dummyCounter;
    dummyCounter++;
    return hash;
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
        let password;
        beforeEach('', () => {
            password = new Password();
        });

        it('is incomplete by default', () => {
            expect(password.isIncomplete()).to.equal(true);
        });

        it('can add a char at given position', () => {
            password.setCharAt(0,'1');
            expect(password.code[0]).to.equal('1');
        });

        it('does not add a char when already present', () => {
            password.setCharAt(0,'1');
            password.setCharAt(0,'2');
            expect(password.code[0]).to.equal('1');
        });

        it('does not sets char outside 0..8', () => {
            password.setCharAt(9,'1');
            expect(password.code[9]).to.equal(undefined);
        });

        it('is complete when all 8 chars are sets', () => {
            password.setCharAt(0,'0');
            password.setCharAt(1,'1');
            password.setCharAt(2,'2');
            password.setCharAt(3,'3');
            password.setCharAt(4,'4');
            password.setCharAt(5,'5');
            password.setCharAt(6,'6');
            password.setCharAt(7,'7');
            expect(password.isIncomplete()).to.equal(false);
            expect(password.getCode()).to.equal('01234567');
        });


    });

    describe('can solve day 5 part 1', () => {
        it.skip('dummy input', () => {
            expect(new PasswordDecrypter(dumyPart1Hash).of(input)).to.equal('11111111');
        });

        it.skip('real input', () => {
            expect(new PasswordDecrypter(md5Hash).of(input)).to.equal('1a3099aa');
        });
    });

    describe('can solve day 5 part 2', () => {
        it('dummy input', () => {
            expect(new PasswordDecrypter(dumyPart2Hash).of(input).getCode()).to.equal('01234567');
        });

        it.skip('real input', () => {
            expect(new PasswordDecrypter(md5Hash).of(input).getCode()).to.equal('694190cd');
        });
    });

});
