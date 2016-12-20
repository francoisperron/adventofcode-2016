import {describe, it} from 'mocha';
import {expect} from 'chai';
import {winnerPart1, josephusPart2} from "./elves";

describe('Day 19', () => {
    describe('The elf with all the gifts', () => {
        it('one elf with a gift won!', () => {
            const elvesCount = 1;

            expect(winnerPart1(elvesCount)).to.equal(1);
        });

        it("elf one steals elf's two gift", () => {
            const elvesCount = 2;

            expect(winnerPart1(elvesCount)).to.equal(1);
        });

        it("elf 3 steals gifts from two other elves", () => {
            const elvesCount = 3;

            expect(winnerPart1(elvesCount)).to.equal(3);
        });

        it("dummy input", () => {
            const elvesCount = 5;

            expect(winnerPart1(elvesCount)).to.equal(3);
        });

        it.skip("real input", () => {
            const elvesCount = 3012210;

            expect(winnerPart1(elvesCount)).to.equal(1830117);
        });
    });

    describe('Part 2', () => {

        const input = [
            {elves: 1, winner: 1},
            {elves: 2, winner: 1},
            {elves: 3, winner: 3},
            {elves: 5, winner: 2},
            {elves: 6, winner: 3},
            {elves: 7, winner: 5},
        ];
        it("dummy input", () => {
            input.forEach(i => expect(josephusPart2(i.elves)).to.equal(i.winner));
        });
        it("real input", () => {
            const elvesCount = 3012210;

            expect(josephusPart2(elvesCount)).to.equal(1417887);
        });
    });
});