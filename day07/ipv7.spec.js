import {describe, it} from "mocha";
import {expect} from 'chai';
import {tlsPatternIn, Ipv7, addressesSupportingTLS, sslPatternIn, SslPattern, addressesSupportingSSL} from "./ipv7";
import {readLines} from "../read_file";
import * as assert from "assert";

describe('Day 7', () => {
    describe('detects Autonomous Bridge Bypass Annotation (ABBA) pattern', () => {
        it('in abba', () => {
            expect(tlsPatternIn('abba')).to.equal(true);
        });

        it('not in baba', () => {
            expect(tlsPatternIn('baba')).to.equal(false);
        });

        it('not in aaaa', () => {
            expect(tlsPatternIn('aaaa')).to.equal(false);
        });

        it('in ioxxoj', () => {
            expect(tlsPatternIn('ioxxoj')).to.equal(true);
        });
    });

    describe('detects Area-Broadcast Accessor (ABA) pattern', () => {
        it('in aba', () => {
            const sslPattern = new SslPattern('aba');
            expect(sslPattern.isSsl()).to.equal(true);
            assert.deepEqual(sslPattern.reversePattern() ['bab']);
        });

        it('not in bba', () => {
            const sslPattern = new SslPattern('bba');
            expect(sslPattern.isSsl()).to.equal(false);
        });

        it('not in aaa', () => {
            const sslPattern = new SslPattern('aaa');
            expect(sslPattern.isSsl()).to.equal(false);
        });

        it('in ioxoj', () => {
            const sslPattern = new SslPattern('ioxoj');
            expect(sslPattern.isSsl()).to.equal(true);
            assert.deepEqual(sslPattern.reversePattern(), ['xox']);
        });

        it('in multiple patterns', () => {
            const sslPattern = new SslPattern('gizvzrqjzhkikhb');
            expect(sslPattern.isSsl()).to.equal(true);
            assert.deepEqual(sslPattern.reversePattern(), ['vzv', 'iki']);
        });
    });


    describe('detects hypernet sequence (ABBA in [])', () => {
        it('single sequence', () => {
            expect(new Ipv7('abba[mnop]qrst').hyperNetSequences[0]).to.equal('mnop');
        });

        it('multiple sequences', () => {
            const ipv7 = new Ipv7('abba[mnop]qrst[qwert]');
            expect(ipv7.hyperNetSequences[0]).to.equal('mnop');
            expect(ipv7.hyperNetSequences[1]).to.equal('qwert');
        });
    });

    describe('detects address parts (ABBA outside [])', () => {
        it('single sequence', () => {
            const ipv7 = new Ipv7('abba[mnop]qrst');
            expect(ipv7.addressParts[0]).to.equal('abba');
            expect(ipv7.addressParts[1]).to.equal('qrst');
        });
    });

    describe('detects TLS address', () => {
        it('when it is', () => {
            expect(new Ipv7('abba[mnop]qrst').isTLS()).to.equal(true);
            expect(new Ipv7('ioxxoj[asdfgh]zxcvbn').isTLS()).to.equal(true);
        });

        it('when it is not', () => {
            expect(new Ipv7('abcd[bddb]xyyx').isTLS()).to.equal(false);
            expect(new Ipv7('aaaa[qwer]tyui').isTLS()).to.equal(false);
        });
    });

    describe('detects SSL address', () => {
        it('when it is', () => {
            expect(new Ipv7('aba[bab]xyz').isSSL()).to.equal(true);
            expect(new Ipv7('aaa[kek]eke').isSSL()).to.equal(true);
            expect(new Ipv7('zazbz[bzb]cdb').isSSL()).to.equal(true);
            expect(new Ipv7('cdb[bzb]zbz').isSSL()).to.equal(true);
            expect(new Ipv7('mbweohfcgybqcqnl[yafsvfrduertfqze]hqaodhzkmhzmlrxuc[bytcgnvzvoovirqwn]njivpwgkkqvgowpenh[erodavzscuubhea]gizvzrqjzhkikhb').isSSL()).to.equal(true);
        });

        it('when it is not', () => {
            expect(new Ipv7('xyx[xyx]xyx').isSSL()).to.equal(false);
        });
    });

    describe('can solve day 7 part 1', () => {
        it('dummy input', () => {
            const dummyInput = ['abba[mnop]qrst', 'abcd[bddb]xyyx', 'aaaa[qwer]tyui', 'ioxxoj[asdfgh]zxcvbn'];
            expect(addressesSupportingTLS(dummyInput)).to.equal(2);
        });

        it('real input', () => {
            expect(addressesSupportingTLS(readLines('day7/input.data'))).to.equal(110);
        });
    });

    describe('can solve day 7 part 2', () => {
        it('dummy input', () => {
            const dummyInput = ['aba[bab]xyz', 'xyx[xyx]xyx', 'aaa[kek]eke', 'zazbz[bzb]cdb'];
            expect(addressesSupportingSSL(dummyInput)).to.equal(3);
        });

        it('real input', () => {
            expect(addressesSupportingSSL(readLines('day7/input.data'))).to.equal(242);
        });
    });
});
