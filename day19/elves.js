export const elfWithAllPresents = (count) => {
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