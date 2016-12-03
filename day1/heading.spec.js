import {describe, it} from "mocha";
import {expect} from 'chai';
import {Heading, direction} from './heading';

describe('Heading', () => {
    it('have a direction', () => {
        expect(new Heading(direction.NORTH).direction).to.equal(direction.NORTH);
    });

    describe('north', () => {
        it('and turning right, gives a east heading', () => {
            expect(new Heading(direction.NORTH).turn('R').direction).to.equal(direction.EAST);
        });

        it('and turning left, gives a west heading', () => {
            expect(new Heading(direction.NORTH).turn('L').direction).to.equal(direction.WEST);
        });
    });

    describe('east', () => {
        it('and turning right, gives a south heading', () => {
            expect(new Heading(direction.EAST).turn('R').direction).to.equal(direction.SOUTH);
        });

        it('and turning left, gives a north heading', () => {
            expect(new Heading(direction.EAST).turn('L').direction).to.equal(direction.NORTH);
        });
    });

    describe('south', () => {
        it('and turning right, gives a west heading', () => {
            expect(new Heading(direction.SOUTH).turn('R').direction).to.equal(direction.WEST);
        });

        it('and turning left, gives a east heading', () => {
            expect(new Heading(direction.SOUTH).turn('L').direction).to.equal(direction.EAST);
        });
    });

    describe('west', () => {
        it('and turning right, gives a north heading', () => {
            expect(new Heading(direction.WEST).turn('R').direction).to.equal(direction.NORTH);
        });

        it('and turning left, gives a south heading', () => {
            expect(new Heading(direction.WEST).turn('L').direction).to.equal(direction.SOUTH);
        });
    });
});