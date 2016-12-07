import {describe, it} from "mocha";
import {expect} from 'chai';
import {patternIn, Ipv7, addressesSupportingTLS} from "./ipv7";
import {readLines} from "../read_file";

describe('Day 7', () => {
    describe('detects Autonomous Bridge Bypass Annotation (ABBA) pattern', () => {
        it('in abba', () => {
            expect(patternIn('abba')).to.equal(true);
        });

        it('not in baba', () => {
            expect(patternIn('baba')).to.equal(false);
        });

        it('not in aaaa', () => {
            expect(patternIn('aaaa')).to.equal(false);
        });

        it('in ioxxoj', () => {
            expect(patternIn('ioxxoj')).to.equal(true);
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

        describe('can solve day 7 part 1', () => {
            it('dummy input', () => {
                const dummyInput = ['abba[mnop]qrst','abcd[bddb]xyyx','aaaa[qwer]tyui','ioxxoj[asdfgh]zxcvbn'];
                expect(addressesSupportingTLS(dummyInput)).to.equal(2);
            });

            it('real input', () => {
                expect(addressesSupportingTLS(readLines('day7/input.data'))).to.equal(110);
            });
        });
    });
});
