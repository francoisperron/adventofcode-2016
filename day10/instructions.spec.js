import {describe, it} from 'mocha';
import {expect} from 'chai';
import {parseTakeCommand, parseGiveCommand} from "./instructions";

describe('Parses', () => {
    it('bot take a chip', () => {
        const {botNumber, chip} = parseTakeCommand('value 5 goes to bot 2');
        expect(botNumber).to.equal(2);
        expect(chip).to.equal(5);
    });

    it('bot gives chips', () => {
        const {botNumber, command} = parseGiveCommand('bot 2 gives low to output 1 and high to bot 0');
        expect(botNumber).to.equal(2);
        expect(command.low.type).to.equal('output');
        expect(command.low.value).to.equal(1);
        expect(command.high.type).to.equal('bot');
        expect(command.high.value).to.equal(0);
    });
});
