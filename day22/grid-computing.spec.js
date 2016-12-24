import {describe, it} from 'mocha';
import {expect} from 'chai';
import {node, viablePairs, fewestSteps, findPreciousData} from "./grid-computing";
import {readLines} from "../read_file";

describe('Day 22', () => {
    describe('Parse input', () => {
        it('parse node position, size and used space', () => {
            expect(node('/dev/grid/node-x0-y0     92T   72T    20T   78%')).to.deep.equal({
                x: 0,
                y: 0,
                size: 92,
                used: 72
            })
        });
    });

    describe('Finds valid pairs', () => {
        it('finds one pair when theres enought space', () => {
            const nodes = [
                {x: 0, y: 0, size: 10, used: 5},
                {x: 1, y: 1, size: 40, used: 30}
            ];
            expect(viablePairs(nodes)).to.equal(1);
        });
        it('finds two pairs when theres enought space on both of them', () => {
            const nodes = [
                {x: 0, y: 0, size: 10, used: 1},
                {x: 1, y: 1, size: 40, used: 1}
            ];
            expect(viablePairs(nodes)).to.equal(2);
        });

        it('finds multiple pairs when theres enought space on the first one', () => {
            const nodes = [
                {x: 0, y: 0, size: 100, used: 1},
                {x: 1, y: 1, size: 40, used: 40},
                {x: 2, y: 2, size: 40, used: 40}
            ];
            expect(viablePairs(nodes)).to.equal(2);
        });

        it('skips empty nodes', () => {
            const nodes = [
                {x: 0, y: 0, size: 100, used: 0},
                {x: 1, y: 1, size: 40, used: 0},
                {x: 2, y: 2, size: 40, used: 40}
            ];
            expect(viablePairs(nodes)).to.equal(2);
        });
    });

    describe('Part 1 - number of viable pairs', () => {
        it.skip('real data', function () {
            this.timeout(5000);
            const nodes = readLines('day22/input.data').map(l => node(l));
            expect(viablePairs(nodes)).to.equal(937);
        });
    });

    describe('Part 2 - fewest number of steps', () => {
        it('dummy input', () => {
            const nodes = readLines('day22/dummy.data').map(l => node(l));
            expect(fewestSteps(nodes)).to.equal(7);
        });
    });

    describe('Finds the data', () => {
        it('when y=0, x=greatest', () => {
            const nodes = [
                {x: 0, y: 0, size: 100, used: 0},
                {x: 2, y: 0, size: 40, used: 0},
                {x: 1, y: 0, size: 40, used: 40}
            ];
            expect(findPreciousData(nodes)).to.deep.equal({x: 2, y: 0, size: 40, used: 0});
        });
        it('on real input', () => {
            const nodes = readLines('day22/input.data').map(l => node(l));

            expect(findPreciousData(nodes)).to.deep.equal({x: 29, y: 0, size: 87, used: 66});
        });
    });

});
