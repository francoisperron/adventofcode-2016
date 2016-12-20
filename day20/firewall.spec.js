import {describe, it} from "mocha";
import {expect} from 'chai';
import {nonBlockedIp, merge, parse, orderAscending, nonBlockedIps} from "./firewall";
import {readLines} from "../read_file";

const dummyInput = ['5-8', '0-2', '4-7'];
const dummyInputMax = 9;

const realInput = readLines('day20/input.data');
const realInputMax = 4294967295;

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

    describe('Finds allowed IPs count', () => {
        it('Dummy input', () => {
            const blackList = parse(dummyInput);
            expect(nonBlockedIps(blackList, dummyInputMax)).to.equal(2);
        });

        it('Dummy input without zero', () => {
            const noZeroInput = ['5-8', '4-7'];
            const blackList = parse(noZeroInput);
            expect(nonBlockedIps(blackList, dummyInputMax)).to.equal(5);
        });

        it('Real input', () => {
            const blackList = parse(realInput);
            expect(nonBlockedIps(blackList, realInputMax)).to.equal(146);
        });
    });

    describe('Parses input', () => {
        it('dummy input', () => {
            expect(parse(dummyInput)).to.deep.equal([[5, 8], [0, 2], [4, 7]]);
        });
        it('real input ', () => {
            expect(parse(realInput).length).to.equal(1176);
        });
    });

    it('Order in ascending order the blacklist', () => {
        expect(orderAscending([[5, 8], [0, 2], [4, 7]])).to.deep.equal([[0, 2], [4, 7], [5, 8]])
    });
});
