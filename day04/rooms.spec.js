import {describe, it, beforeEach} from "mocha";
import {expect} from 'chai';
import {Room, count, charOccurences, buildChecksum, rotate, rotateName} from './rooms';
import {readLines} from '../read_file';

describe('Day 4', () => {

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

        it('the checksumRound', () => {
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

        it('can build the checksumRound', () => {
            expect(buildChecksum({'z': 1, 'y': 1, 'x': 1, 'b': 3, 'a': 3})).to.equal('abxyz');
        });

        it('can build the checksumRound in alphabathic order', () => {
            expect(buildChecksum({
                'j': 3,
                'y': 1,
                'f': 2,
                'v': 2,
                'n': 2,
                'l': 1,
                'u': 3,
                'p': 3,
                'i': 1,
                'b': 1,
                's': 1,
                'z': 2,
                'a': 1
            })).to.equal('jpufn');
        });

        it('keeps only 5 char in the checksumRound', () => {
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

    it('can solve input part 1', () => {
        const rooms = readLines('day04/input.data').map(l => new Room(l)).filter(r => r.isReal() == true);
        const sectorSum = rooms.map(r => r.sector).reduce((a, b) => a + b, 0);
        expect(sectorSum).to.equal(245102);
    });

    describe('can rotate letters', () => {
        it('a becomes b rotated once', () => {
            expect(rotate('a', 1)).to.equal('b');
        });

        it('a becomes c rotated twice', () => {
            expect(rotate('a', 2)).to.equal('c');
        });

        it('z becomes b rotated twice', () => {
            expect(rotate('z', 2)).to.equal('b');
        });

        it('z stays z rotated n*26 times', () => {
            expect(rotate('z', 10 * 26)).to.equal('z');
        });

        it('z becomes b rotated 26+26+26+2 times', () => {
            expect(rotate('z', 26 + 26 + 26 + 2)).to.equal('b');
        });

        it('- becomes spaces ', () => {
            const notTakenIntoAccount = 12312;
            expect(rotate('-', notTakenIntoAccount)).to.equal(' ');
        });
    });

    describe('can rotate name', () => {
        it('works for the given example', () => {
            expect(rotateName('qzmt-zixmtkozy-ivhz', 343)).to.equal('very encrypted name');
        });
    });


    it('can solve input part 2', () => {
        const rooms = readLines('day04/input.data').map(l => new Room(l));
        const norhtPole = rooms.filter(r => rotateName(r.name,r.sector).includes('pole'))[0];
        expect(norhtPole.sector).to.equal(324);
    });
});
