import {describe, it} from "mocha";
import {expect} from 'chai';
import {isTriangle, numberOfTrianglesIn} from "./triangles";
import {readInput, readInputVerticaly} from './read_input';

describe('Day 3', () => {
    describe('side 1 + side 2', () => {
        it('> side 3 is possible', () => {
            expect(isTriangle(5, 10, 7)).to.equal(true);
        });

        it('< side 3 is impossible', () => {
            expect(isTriangle(5, 10, 25)).to.equal(false);
        });
    });

    describe('side 1 + side 3', () => {
        it('> side 2 is possible', () => {
            expect(isTriangle(5, 7, 10)).to.equal(true);
        });

        it('< side 3 is impossible', () => {
            expect(isTriangle(5, 25, 10)).to.equal(false);
        });
    });

    describe('side 2 + side 3', () => {
        it('> side 1 is possible', () => {
            expect(isTriangle(7, 5, 10)).to.equal(true);
        });

        it('< side 3 is impossible', () => {
            expect(isTriangle(25, 5, 10)).to.equal(false);
        });
    });

    describe('counts number of triangles', () => {
        it('counts them', () => {
            const input = [[5, 7, 10], [5, 25, 10]];
            expect(numberOfTrianglesIn(input)).to.equal(1);
        });
    });

    describe('input', () => {
        it('has 1902 triangles to test', () => {
            expect(readInput().length).to.equal(1902);
        });

        it('has 982 real triangles', () => {
            expect(numberOfTrianglesIn(readInput())).to.equal(982);
        });
    });

    describe('input verticaly', () => {
        it('has 1902 triangles to test', () => {
            expect(readInputVerticaly().length).to.equal(1902);
        });

        it('has 1826 real triangles', () => {
            expect(numberOfTrianglesIn(readInputVerticaly())).to.equal(1826);
        });
    });
});

