import {describe, it} from 'mocha';
import {expect} from 'chai';
import {Disk, Sculpture, firstTimeToGetACapsule} from './timing';

describe('day 15', () => {
    describe('A disk', () => {

        let disk;
        beforeEach('', () => {
            disk = new Disk(3, 1);
        });

        it('has a number of positions', () => {
            expect(disk.positions).to.equal(3);
        });
        it('starts at a given position', () => {
            expect(disk.position).to.equal(1);
        });
        it('can increase position', () => {
            disk.tick(1);
            expect(disk.position).to.equal(2);
        });
        it('wraps around', () => {
            disk.tick(2);
            expect(disk.position).to.equal(0);
        });
        it('wraps around multiple times', () => {
            disk.tick(3 + 3 + 3);
            expect(disk.position).to.equal(1);
        });
    });

    describe('A sculpture', () => {
        let dummyDisks;
        let sculpture;
        beforeEach('', () => {
            dummyDisks = [new Disk(5, 4), new Disk(2, 1)];
            sculpture = new Sculpture(dummyDisks);
        });

        it('is built with disks', () => {
            expect(sculpture.disks).to.deep.equal(dummyDisks);
        });

        it('has a button to push at a given time', () => {
            sculpture.pushAt(0);

            expect(sculpture.disks[0].position).to.equal(0);
            expect(sculpture.disks[1].position).to.equal(1);
        });

        it('do not let the capsule pass', () => {
            sculpture.pushAt(0);
            expect(sculpture.capsulePasses()).to.equal(false);
        });

        it('let the capsule pass', () => {
            sculpture.pushAt(5);
            expect(sculpture.capsulePasses()).to.equal(true);
        });
    });

    describe('Part 1', () => {
        it('works for dummy input', () => {
            const dummyDisks = [new Disk(5, 4), new Disk(2, 1)];
            expect(firstTimeToGetACapsule(dummyDisks)).to.equal(5)
        });
        it('works for real input', () => {
            const realDisks = [new Disk(17, 1), new Disk(7, 0), new Disk(19, 2), new Disk(5, 0), new Disk(3, 0), new Disk(13, 5)];
            expect(firstTimeToGetACapsule(realDisks)).to.equal(317371)
        });
    });

    describe('Part 2', () => {
        it('works for real input', () => {
            const realDisks = [new Disk(17, 1), new Disk(7, 0), new Disk(19, 2), new Disk(5, 0), new Disk(3, 0), new Disk(13, 5), new Disk(11, 0)];
            expect(firstTimeToGetACapsule(realDisks)).to.equal(2080951)
        });
    });
});


/*
 Disc #1 has 17 positions; at time=0, it is at position 1.
 Disc #2 has 7 positions; at time=0, it is at position 0.
 Disc #3 has 19 positions; at time=0, it is at position 2.
 Disc #4 has 5 positions; at time=0, it is at position 0.
 Disc #5 has 3 positions; at time=0, it is at position 0.
 Disc #6 has 13 positions; at time=0, it is at position 5.
 */