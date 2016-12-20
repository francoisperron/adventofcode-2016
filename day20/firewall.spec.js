import {describe, it} from "mocha";
import {expect} from 'chai';
import {nonBlockedIp, merge, parse} from "./firewall";
import {readLines} from "../read_file";

const dummyInput = ['5-8','0-2','4-7'];
const realInput = readLines('day20/input.data');

describe('Day 20', () => {
    describe('Finds lowest non-blocked IP', () => {
        it('Dummy input', () => {
            const blackList = parse(dummyInput);
            expect(nonBlockedIp(blackList)).to.equal(3);
        });
        it.skip('Real input', () => {
            const blackList = parse(realInput);
            expect(nonBlockedIp(blackList)).to.equal(4793564);
        });
    });

    describe('Parses input', () => {
        it('dummy input', () => {
            expect(parse(dummyInput)).to.deep.equal([[5,8],[0,2],[4,7]]);
        });
        it('real input ', () => {
            expect(parse(realInput).length).to.equal(1176);
        });
    });
});
