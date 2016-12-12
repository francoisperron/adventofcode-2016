import Bot from "./bot";
import Command from "./command";

export default class Factory {
    constructor() {
        this.bots = [];
        this.outputs = [];
    }

    giveChipToBot({botNumber, chip}) {
        const bot = this.wakeUpBot(botNumber);
        bot.take(chip);
    }

    giveCommandToBot({botNumber, command}) {
        const bot = this.wakeUpBot(botNumber);
        bot.execute(new Command(this, command));
    }

    putChipOnOutput({outputNumber, chip}) {
        this.outputs.push({outputNumber, chip});
    }

    wakeUpBot(botNumber) {
        let bot = this.bots.find(b => b.number == botNumber);
        if (bot == undefined) {
            bot = new Bot(botNumber);
            this.bots.push(bot);
        }
        return bot;
    }
}
