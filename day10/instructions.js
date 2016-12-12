import Factory from "./factory";

export function parseTakeCommand(instruction) {
    const parts = instruction.split(' ');
    return {botNumber: parseInt(parts[5]), chip: parseInt(parts[1])};
}

export function parseGiveCommand(instruction) {
    const parts = instruction.split(' ');
    return {
        botNumber: parseInt(parts[1]),
        command: {low: {type: parts[5], value: parseInt(parts[6])}, high: {type: parts[10], value: parseInt(parts[11])}}
    };
}

export function parseInstructions(instructions) {
    const execute = (factory, i) => {
        i.charAt(0) == 'v' ? factory.giveChipToBot(parseTakeCommand(i)) : factory.giveCommandToBot(parseGiveCommand(i));
    };

    const factory = new Factory();
    instructions.forEach(i => execute(factory, i));

    const part2 = factory.outputs.filter(o => [0, 1, 2].includes(o.outputNumber)).map(o => o.chip).reduce((a,b) => a * b, 1);
    console.log('Part2: ' + part2);
    return part2;
}