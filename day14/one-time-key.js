import crypto from 'crypto';

export const generateKey = (string) => crypto.createHash('md5').update(string).digest('hex');

export const containsTriplet = (key) => {
    const threeChars = /(.)\1\1/;
    const char = key.match(threeChars);
    return char == null ? undefined : char[1];
};

export const containsQuintuplet = (key, char) => key.includes(char.repeat(5));

export const validKey = (salt, index, char) => {
    const nextThousand = Array.from(Array(1000).keys());
    return nextThousand.some(i => containsQuintuplet(generateKey(salt + (index + i + 1)), char));
};

export function generateKeys(salt) {

    let keys = [];
    let index = 0;
    while (keys.length < 64) {
        const key = generateKey(salt + index);
        const char = containsTriplet(key);

        if (char != undefined && validKey(salt, index, char)) {
            keys.push({key, char, index});
        }
        index++;
    }
    return keys;
}