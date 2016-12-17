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
    // works for part 1, but fails for part 2 since tail call recursion is disabled in babel :(
    // https://babeljs.io/learn-es2015/#ecmascript-2015-features-tail-calls
    // return input.length != 0 ? checksumRound(input.slice(2, input.length), [...pairs, input.slice(0,2)]) : pairs.map(matches).join('');
};

export const checksum = (input) => {
    const inputChecksum = checksumRound(input);
    return inputChecksum.length % 2 == 0 ? checksum(inputChecksum) : inputChecksum;
};