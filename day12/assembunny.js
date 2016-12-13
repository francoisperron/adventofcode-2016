export function run(instruction, registers) {
    const parts = instruction.split(' ');

    const copy = (v, r) => registers[r] = isNaN(parseInt(v)) ? registers[v] : parseInt(v);
    const inc = (r) => registers[r]++;
    const dec = (r) => registers[r]--;
    const jump = (r, v) => registers[r] == 0 ? 0 : registers.pointer += parseInt(v) - 1;

    const select = {cpy: copy, inc: inc, dec: dec, jnz: jump};

    return select[parts[0]](parts[1], parts[2]);
}

export function program(instructions, registers) {

    while (registers.pointer < instructions.length) {
        run(instructions[registers.pointer], registers);
        registers.pointer++;
    }

    return registers;
}