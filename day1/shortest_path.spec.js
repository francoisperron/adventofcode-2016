import {describe, it} from "mocha";
import {expect} from 'chai';
import {numberOfBlocksAway, firstPositionEncounteredTwice} from './shortest_path';

const input = 'L5, R1, L5, L1, R5, R1, R1, L4, L1, L3, R2, R4, L4, L1, L1, R2, R4, R3, L1, R4, L4, L5, L4, R4, L5, R1, R5, L2, R1, R3, L2, L4, L4, R1, L192, R5, R1, R4, L5, L4, R5, L1, L1, R48, R5, R5, L2, R4, R4, R1, R3, L1, L4, L5, R1, L4, L2, L5, R5, L2, R74, R4, L1, R188, R5, L4, L2, R5, R2, L4, R4, R3, R3, R2, R1, L3, L2, L5, L5, L2, L1, R1, R5, R4, L3, R5, L1, L3, R4, L1, L3, L2, R1, R3, R2, R5, L3, L1, L1, R5, L4, L5, R5, R2, L5, R2, L1, L5, L3, L5, L5, L1, R1, L4, L3, L1, R2, R5, L1, L3, R4, R5, L4, L1, R5, L1, R5, R5, R5, R2, R1, R2, L5, L5, L5, R4, L5, L4, L4, R5, L2, R1, R5, L1, L5, R4, L3, R4, L2, R3, R3, R3, L2, L2, L2, L1, L4, R3, L4, L2, R2, R5, L1, R2';

describe('The shortest path of', () => {
    it('R2 is 2 blocks away', () => {
        expect(numberOfBlocksAway("R2")).to.equal(2);
    });

    it('R10 is 10 blocks away', () => {
        expect(numberOfBlocksAway("R10")).to.equal(10);
    });

    it('R2, L3 is 5 blocks away', () => {
        expect(numberOfBlocksAway("R2, L3")).to.equal(5);
    });

    it('R2, R2, R2 is 2 blocks away', () => {
        expect(numberOfBlocksAway("R2, R2, R2")).to.equal(2);
    });

    it('R5, L5, R5, R3 is 12 blocks away', () => {
        expect(numberOfBlocksAway("R5, L5, R5, R3")).to.equal(12);
    });

    it('R8, R4, R4, R8 is 8 blocks away', () => {
        expect(numberOfBlocksAway("R8, R4, R4, R8")).to.equal(8);
    });

    it('day one input', () => {
        expect(numberOfBlocksAway(input)).to.equal(226);
    });
});

describe('The first position encountered twice of', () => {
    it('R8, R4, R4, R8 is 4 blocks away', () => {
        expect(firstPositionEncounteredTwice("R8, R4, R4, R8")).to.equal(4);
    });

    it('day one input', () => {
        expect(firstPositionEncounteredTwice(input)).to.equal(79);
    });
});


