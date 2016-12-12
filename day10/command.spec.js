import {describe, it} from 'mocha';
import {expect} from 'chai';
import Command from "./command";

describe('A Command', () => {
    let aFactory;
    let aCommand;
    beforeEach('', () => {
        aFactory = new FakeFactory();
        aCommand = {low: {type: 'bot', value: '66'}, high: {type: 'output', value: '33'}}
    });

    it('takes a command', () => {
        expect(new Command(aFactory, aCommand).command).to.equal(aCommand);
    });

    it('execute the command', () => {
        const command = new Command(aFactory, aCommand);
        command.execute('17', '61');
        expect(aFactory.chipToBot.botNumber).to.equal('66');
        expect(aFactory.chipToBot.chip).to.equal('17');
        expect(aFactory.chipToOutput.outputNumber).to.equal('33');
        expect(aFactory.chipToOutput.chip).to.equal('61');
    });
});

class FakeFactory {
    giveChipToBot({botNumber, chip}) {
        this.chipToBot = {botNumber, chip};
    }

    putChipOnOutput({outputNumber, chip}) {
        this.chipToOutput = {outputNumber, chip};
    }
}