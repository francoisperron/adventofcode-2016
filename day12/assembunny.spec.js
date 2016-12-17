import {describe, it} from 'mocha';
import {expect} from 'chai';
import {run, program} from "./assembunny";
import {readLines} from "../read_file";

describe('Day 12', () => {
    describe('instructions', () => {
        it('cpy with int', () => {
            const registers = {a: 0};
            run('cpy 41 a', registers);

            expect(registers.a).to.equal(41);
        });
        it('cpy with register', () => {
            const registers = {a: 0, b: 10};
            run('cpy b a', registers);

            expect(registers.a).to.equal(10);
        });
        it('inc register', () => {
            const registers = {a: 10};
            run('inc a', registers);

            expect(registers.a).to.equal(11);
        });
        it('dec register', () => {
            const registers = {a: 10};
            run('dec a', registers);

            expect(registers.a).to.equal(9);
        });
        it('jumps forward by the given value -1 when reg is not 0', () => {
            const registers = {a: 10, pointer: 55};
            run('jnz a 2', registers);

            expect(registers.pointer).to.equal(56);
        });
        it('jumps backward too', () => {
            const registers = {a: 10, pointer: 55};
            run('jnz a -2', registers);

            expect(registers.pointer).to.equal(52);
        });
        it('does not jump when reg is 0', () => {
            const registers = {a: 0, pointer: 55};
            run('jnz a 2', registers);

            expect(registers.pointer).to.equal(55);
        });
    });

    describe('decodes', () => {
        it('dummy data', () => {
            const dummyData = [
                'cpy 41 a',
                'inc a',
                'inc a',
                'dec a',
                'jnz a 2',
                'dec a'
            ];
            const registers = {a: 0, b: 0, c: 0, d: 0, pointer: 0};
            program(dummyData, registers);

            expect(registers.a).to.equal(42)
        });
        it('real data part 1', () => {
            const registers = {a: 0, b: 0, c: 0, d: 0, pointer: 0};
            program(readLines('day12/input.data'), registers);

            expect(registers.a).to.equal(317993)
        });
        it.skip('real data part 2', function() {
            this.timeout(30000);
            const registers = {a: 0, b: 0, c: 1, d: 0, pointer: 0};
            program(readLines('day12/input.data'), registers);

            expect(registers.a).to.equal(9227647)
        });
    });
});
