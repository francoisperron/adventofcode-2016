export default class Command {
    constructor(factory, command) {
        this.factory = factory;
        this.command = command;
    }

    execute(lowChip, highChip) {
        this.giveChip(lowChip, this.command.low);
        this.giveChip(highChip, this.command.high);
    }

    giveChip(chip, command) {
        if (command.type == 'bot') {
            this.factory.giveChipToBot({botNumber: command.value, chip: chip});
        } else {
            this.factory.putChipOnOutput({outputNumber: command.value, chip: chip});
        }
    }
}
