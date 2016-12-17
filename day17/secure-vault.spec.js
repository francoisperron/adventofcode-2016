import {describe, it} from 'mocha';
import {expect} from 'chai';
import {hash, shortestPath, openDoors, moves, longestPath} from "./secure-vault";

describe('Day 17', () => {
    describe('hash', () => {
        it('4 chars hash of passcode', () => {
            expect(hash('hijkl')).to.equal('ced9');
            expect(hash('hijklD')).to.equal('f2bc');
        });
        it('converts hash to open doors', () => {
            expect(openDoors('ced9'),{x: 0, y: 0}).to.equal('UDL');
        });
        it('calculates possible moves', () => {
            expect(moves('ced9', {x: 0, y: 0, path: ''})).to.deep.equal([{x: 0, y: 1, path: 'D'}]);
            expect(moves('ce89', {x: 3, y: 3, path: ''})).to.deep.equal([{x: 3, y: 2, path: 'U'}])
        });
    });

    describe('The shortest path', () => {
        it('with ihgpwlah', () => {
            expect(shortestPath('ihgpwlah')).to.equal('DDRRRD');
        });
        it('with kglvqrro', () => {
            expect(shortestPath('kglvqrro')).to.equal('DDUDRLRRUDRD');
        });
        it('with ulqzkmiv', () => {
            expect(shortestPath('ulqzkmiv')).to.equal('DRURDRUDDLLDLUURRDULRLDUUDDDRR');
        });
        it('my input', () => {
            expect(shortestPath('veumntbg')).to.equal('DDRRULRDRD');
        });
    });

    describe('The longest path', () => {
        it('with ihgpwlah', () => {
            expect(longestPath('ihgpwlah')).to.equal(370);
        });
        it('with kglvqrro', () => {
            expect(longestPath('kglvqrro')).to.equal(492);
        });
        it('with ulqzkmiv', () => {
            expect(longestPath('ulqzkmiv')).to.equal(830);
        });
        it('my input', () => {
            expect(longestPath('veumntbg')).to.equal(536);
        });
    });
});