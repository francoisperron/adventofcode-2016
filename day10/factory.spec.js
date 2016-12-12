import {describe, it} from 'mocha';
import {expect} from 'chai';
import Factory from "./factory";

describe('A Factory', () => {
    let aFactory;
    beforeEach('', () => {
        aFactory = new Factory();
    });

    it('keeps bots', () => {
        aFactory.giveChipToBot({botNumber:'1', chip: '55'});
        aFactory.giveChipToBot({botNumber:'1', chip: '44'});
        expect(aFactory.bots.length).to.equal(1);
        expect(aFactory.bots[0].number).to.equal('1');
        expect(aFactory.bots[0].chips[0]).to.equal('55');
        expect(aFactory.bots[0].chips[1]).to.equal('44');
    });

    it('gives command to bot', () => {
        const aFakeCommand = {};
        aFactory.giveCommandToBot({botNumber:'1', command: aFakeCommand});
        expect(aFactory.bots[0].number).to.equal('1');
        expect(aFactory.bots[0].command.factory).to.equal(aFactory);
        expect(aFactory.bots[0].command.command).to.equal(aFakeCommand);
    });
});