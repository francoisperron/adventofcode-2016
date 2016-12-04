import {describe, it, beforeEach} from "mocha";
import {expect} from 'chai';
import {Room, count, charOccurences, buildChecksum} from './rooms';
import {readLines} from './read_input';

describe.only('Day 4', () => {

    let room;
    beforeEach('', () => {
        room = new Room("aaaaa-bbb-z-y-x-123[abxyz]");
    });

    describe('can parse', () => {
        it('the encrypted name, without the dashes', () => {
            expect(room.name).to.equal("aaaaabbbzyx");
        });

        it('the sector id', () => {
            expect(room.sector).to.equal(123);
        });

        it('the checksum', () => {
            expect(room.checksum).to.equal("abxyz");
        });
    });

    describe('can count', () => {
        it('the number of char in a string', () => {
            expect(count('aaaaa', 'a')).to.equal(5);
        });

        it('the occurence of each char in a string', () => {
            const occurences = charOccurences('aaaaabbbzyx');
            expect(occurences['a']).to.equal(5);
            expect(occurences['b']).to.equal(3);
            expect(occurences['z']).to.equal(1);
            expect(occurences['y']).to.equal(1);
            expect(occurences['x']).to.equal(1);
        });

        it('can build the checksum', () => {
            expect(buildChecksum({'z': 1, 'y': 1, 'x': 1, 'b': 3, 'a': 3})).to.equal('abxyz');
        });

        it('can build the checksum in alphabathic order', () => {
            expect(buildChecksum({'j': 3, 'y': 1, 'f': 2, 'v': 2, 'n': 2, 'l': 1, 'u': 3, 'p': 3, 'i': 1, 'b': 1, 's': 1, 'z': 2, 'a': 1 })).to.equal('jpufn');
        });

        it('keeps only 5 char in the checksum', () => {
            expect(buildChecksum({'a': 1, 'b': 3, 'c': 5, 'd': 9, 'e': 7, 'f': 11, 'g': 13})).to.equal('gfdec');
        });
    });

    describe('can determine', () => {
        it('if a room is real', () => {
            expect(room.isReal()).to.equal(true);
            expect(new Room("a-b-c-d-e-f-g-h-987[abcde]").isReal()).to.equal(true);
            expect(new Room("not-a-real-room-404[oarel]").isReal()).to.equal(true);
        });

        it('or not', () => {
            expect(new Room("totally-real-room-200[decoy]").isReal()).to.equal(false);
            expect(new Room("vagreangvbany-enoovg-fuvccvat-533[gncot]").isReal()).to.equal(false);
        });
    });

    it('can solve input', () => {
        const rooms = readLines().map(l => new Room(l)).filter(r => r.isReal() == true);
        const sectorSum = rooms.map(r => r.sector).reduce((a, b) => a + b, 0);
        expect(sectorSum).to.equal(245102);
    });
});
