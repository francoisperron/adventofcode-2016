import crypto from 'crypto';

export const generateKey = (string) => crypto.createHash('md5').update(string).digest('hex');

const generatedKeys = {};
export const generateStretchedKey = (string) => {
    if (generatedKeys[string] == undefined){
        const do2017times = Array.from(Array(2017).keys());
        generatedKeys[string] = do2017times.reduce(s => generateKey(s), string);
    }
    return generatedKeys[string];
};

export const containsTriplet = (key) => {
    const threeChars = /(.)\1\1/;
    const char = key.match(threeChars);
    return char == null ? undefined : char[1];
};

export const containsQuintuplet = (key, char) => key.includes(char.repeat(5));

export const validKey = (salt, index, char, keygen = generateKey) => {
    const aThousandTimes = Array.from(Array(1000).keys());
    return aThousandTimes.some(i => containsQuintuplet(keygen(salt + (index + i + 1)), char));
};

export function generateKeys(salt, keygen = generateKey) {

    let keys = [];
    let index = 0;
    while (keys.length < 64) {
        const key = keygen(salt + index);
        const char = containsTriplet(key);

        if (char != undefined && validKey(salt, index, char, keygen)) {
            keys.push({key, index});
        }
        index++;
    }
    return keys;
}