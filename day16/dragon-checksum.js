export const dragonCurve = (input) => input + '0' + input.split('').reverse().map(c => 1 - c).join('');

export const dragonCurves = (input, size) => {
    const inputDragonCurve = dragonCurve(input);
    return inputDragonCurve.length < size ? dragonCurves(inputDragonCurve, size) : inputDragonCurve.slice(0, size);
};

export const matches = (input) => input[0] == input[1] ? '1' : '0';

export const checksumRound = (input) => {
    let pairs = [];
    while (input.length != 0) {
        pairs.push(input.slice(0, 2));
        input = input.slice(2, input.length);
    }
    return pairs.map(matches).join('');
};

export const checksum = (input) => {
    const inputChecksum = checksumRound(input);
    return inputChecksum.length % 2 == 0 ? checksum(inputChecksum) : inputChecksum;
};