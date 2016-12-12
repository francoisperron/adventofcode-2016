export default class Bot {
    constructor(number) {
        this.number = number;
        this.chips = [];
        this.command = undefined;
        return this;
    }

    take(chip) {
        this.chips.push(chip);
        if (this.chips.includes(17) && this.chips.includes(61)){
            console.log('Part1 :' + this.number);
        }
        this.executeWhenReady();
        return this;
    }

    execute(command) {
        this.command = command;
        this.executeWhenReady();
        return this;
    }

    executeWhenReady() {
        if (this.command == undefined || this.chips.length != 2)  return;
        const {low, high} = this.splitChips();
        this.command.execute(low, high);
        this.chips = [];
    }

    splitChips() {
        return this.chips[0] < this.chips[1] ? {low: this.chips[0], high: this.chips[1]} : {low: this.chips[1], high: this.chips[0]};
    }
}

