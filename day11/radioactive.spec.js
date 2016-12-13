import {describe, it} from 'mocha';
import {expect} from 'chai';
import {letsMove} from "./radioactive";

const dummyAssembly = {elevator: 1, pairs: [{g: 2, m: 1}, {g: 3, m: 1}]};
const myAssembly = {elevator: 1, pairs: [{g: 1, m: 1}, {g: 2, m: 3}, {g: 2, m: 3}, {g: 2, m: 3}, {g: 2, m: 3}]};

describe('Day 11', () => {
    describe('Represents assembly', () => {
        it('dummy', () => {
            expect(dummyAssembly.elevator).to.equal(1);
        });
        it('my', () => {
            expect(myAssembly.elevator).to.equal(1);
        });
    });

    describe('Move things', () => {
        it('Up with 1 item', () => {
            const assembly = {elevator: 1, pairs: [{g: 2, m: 1}, {g: 3, m: 1}]};
            const move = {elevator: 2, items: [{pair: 0, item: 'm'}]};
            const expectedAssembly = {elevator: 2, pairs: [{g: 2, m: 2}, {g: 3, m: 1}]};

            expect(letsMove(assembly, move)).to.deep.equal(expectedAssembly);
        });
    });
});