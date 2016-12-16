export const dragonCurve = (input) => input + '0' + input.split('').reverse().map(c => 1 - c).join('');

export const dragonCurves = (input, size) => {
    let output = input;
    while (output.length < size){
        output = dragonCurve(output);
    }
    return output.slice(20);
};