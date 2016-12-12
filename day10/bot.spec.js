import {describe, it} from 'mocha';
import {expect} from 'chai';
import Bot from './bot';

describe('A bot', () => {

    let aCommand;
    beforeEach('', () => {
        aCommand = new FakeCommand();
    });

    it('has a number', () => {
        expect(new Bot('22').number).to.equal('22');
    });
    it('takes chips', () => {
        expect(new Bot('22').take('1').chips).to.deep.equal(['1']);
    });
    it('takes a command', () => {
        expect(new Bot('22').execute(aCommand).command).to.equal(aCommand);
    });

    describe('Command execution', () => {
        it('executes a command when it receives a command when having two chips', () => {
            const bot = new Bot(1).take('2').take('5').execute(aCommand);
            expect(aCommand.low).to.equal('2');
            expect(aCommand.high).to.equal('5');
            expect(bot.chips.length).to.equal(0);
        });
        it('executes a command when it receives a a second chip when having a chip and commands', () => {
            const bot = new Bot(1).take('2').execute(aCommand).take('5');
            expect(aCommand.low).to.equal('2');
            expect(aCommand.high).to.equal('5');
        });
        it('does not execute the command when it receives a command when having less than two chips', () => {
            const bot = new Bot(1).take('5').execute(aCommand);
            expect(aCommand.low).to.equal(undefined);
            expect(aCommand.high).to.equal(undefined);
            expect(bot.chips.length).to.equal(1);
        });
    });
});

class FakeCommand {
    execute(low, high){
        this.low = low;
        this.high = high;
    }
}