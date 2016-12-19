import {describe, it} from 'mocha';
import {expect} from 'chai';
import {elfWithAllPresents, nextElfWithGift} from "./elves";

describe('Day 19', () => {
    describe('The elf with all the gifts', () => {
        it('one elf with a gift won!', () => {
            const elvesCount = 1;

            expect(elfWithAllPresents(elvesCount)).to.equal(1);
        });

        it("elf one steals elf's two gift", () => {
            const elvesCount = 2;

            expect(elfWithAllPresents(elvesCount)).to.equal(1);
        });

        it("elf 3 steals gifts from two other elves", () => {
            const elvesCount = 3;

            expect(elfWithAllPresents(elvesCount)).to.equal(3);
        });

        it("dummy input", () => {
            const elvesCount = 5;

            expect(elfWithAllPresents(elvesCount)).to.equal(3);
        });

        it("real input", function () {
            this.timeout(30000);
            const elvesCount = 3012210;

            expect(elfWithAllPresents(elvesCount)).to.equal(1830117);
        });
    });

});