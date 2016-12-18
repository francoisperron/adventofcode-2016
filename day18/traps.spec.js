import {describe, it} from 'mocha';
import {expect} from 'chai';
import {newTile, newRow, room, safeTilesIn, safeTilesInRoom} from "./traps";

const input = '.^^^^^.^^^..^^^^^...^.^..^^^.^^....^.^...^^^...^^^^..^...^...^^.^.^.......^..^^...^.^.^^..^^^^^...^.';

describe('Day 18', () => {
    describe('A new tile', () => {
        it('is a trap when previous row tiles trap patterns', () => {
            expect(newTile('^^.')).to.equal('^');
            expect(newTile('.^^')).to.equal('^');
            expect(newTile('^..')).to.equal('^');
            expect(newTile('..^')).to.equal('^');
        });
        it('not a trap when previous row tiles are ...', () => {
            expect(newTile('...')).to.equal('.');
        });

    });

    describe('Calculate next row from row', () => {
        it('on dummy inputs', () => {
            expect(newRow('..^^.')).to.equal('.^^^^');
            expect(newRow('.^^^^')).to.equal('^^..^');
            expect(newRow('.^^.^.^^^^')).to.equal('^^^...^..^');
        });
    });

    describe('Builds room from initial row', () => {
        it('from dummy input', () => {
            expect(room('..^^.', 3)).to.deep.equal(['..^^.','.^^^^','^^..^']);
        });
    });

    describe('Counts number of safe tiles in room', () => {
        it('on a room', () => {
            const dummyRoom = ['..^^.','.^^^^','^^..^'];

            expect(safeTilesIn(dummyRoom)).to.equal(6);
        });

        it('on dummy input', () => {
            const dummyRoom = room('.^^.^.^^^^', 10);

            expect(safeTilesIn(dummyRoom)).to.equal(38);
        });

        it('on real input', () => {
            const realRoom = room(input, 40);

            expect(safeTilesIn(realRoom)).to.equal(1956);
        });

        it('on real input optimized part 1', () => {
            expect(safeTilesInRoom(input, 40)).to.equal(1956);
        });

        it.skip('on real input optimized part 2', function() {
            this.timeout(50000);
            expect(safeTilesInRoom(input, 400000)).to.equal(19995121);
        });
    });
});
