export const winnerPart1 = (count) => {
    let elves = Array.from(Array(count + 1).keys()).map(v => parseInt(v));
    elves.splice(0, 1);

    while (elves.length !== 1) {
        const isOdd = elves.length % 2 != 0;
        elves = elves.filter((e, i) => i % 2 == 0);

        if (isOdd)
            elves.shift();
    }

    return elves[0];
};


export const josephusPart2 = (count) => {
    const pow = Math.floor(Math.log(count) / Math.log(3));
    const candidate = Math.pow(3, pow);

    if (lastElf(count, candidate))
        return candidate;

    return inLowerPart(count, candidate) ?
        count - candidate :
        2 * count - 3 * candidate;
};

const lastElf = (count, candidate) => count == candidate;
const inLowerPart = (count, candidate) => count - candidate <= candidate;
