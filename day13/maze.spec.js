import {describe, it} from 'mocha';
import {expect} from 'chai';
import {isAnOpenSpace, possiblePositions, solve, addSteps, isANewPosition, stepsAt} from './maze';

const dummyInput = 10;

describe('Day13', () => {
    it('Determines if a position is a wall or an open space', () => {
        expect(isAnOpenSpace({x: 1, y: 1}, dummyInput)).to.equal(true);
        expect(isAnOpenSpace({x: 1, y: 0}, dummyInput)).to.equal(false);
    });

    it('Determines possible moves from a position', () => {
        expect(possiblePositions({x: 0, y: 1}, dummyInput)).to.deep.equal([{x: 1, y: 1}, {x: 0, y: 0}])
    });

    it('Keeps visited positions', () => {
        const p = {x: 1, y: 1};
        const visited = [];
        addSteps(p, 1, visited);
        expect(stepsAt(p, visited)).to.equal(1);

        const p2 = {x: 1, y: 0};
        addSteps(p2, 2, visited);
        expect(stepsAt(p2, visited)).to.equal(2);
    });

    it('Knows visited positions', () => {
        const p = {x: 1, y: 1};
        const visited = [];
        expect(isANewPosition(p, visited)).to.equal(true);

        addSteps(p, 0, visited);
        expect(isANewPosition(p, visited)).to.equal(false);

        const p2 = {x: 0, y: 1};
        expect(isANewPosition(p2, visited)).to.equal(true);
    });

    describe('Can solve part 1', () => {
        it('dummy data 1 step', () => {
            expect(solve(10, {x: 1, y: 1}, {x: 1, y: 2}).minimumSteps).to.equal(1)
        });
        it('dummy data 2 steps', () => {
            expect(solve(10, {x: 1, y: 1}, {x: 2, y: 2}).minimumSteps).to.equal(2)
        });
        it('dummy data 11 steps', () => {
            expect(solve(10, {x: 1, y: 1}, {x: 7, y: 4}).minimumSteps).to.equal(11)
        });
        it('real data 86 steps', () => {
            expect(solve(1364, {x: 1, y: 1}, {x: 31, y: 39}).minimumSteps).to.equal(86)
        });
    });

    describe('Can solve part 2', () => {
        it('real data max position in 50 steps is 127', () => {
            expect(solve(1364, {x: 1, y: 1}, {x: 31, y: 39}).maxPositions).to.equal(127)
        });
    });
});
