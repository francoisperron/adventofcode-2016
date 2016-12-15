import crypto from 'crypto';

export function generateKey(string) {
    return crypto.createHash('md5').update(string).digest('hex');
}

export function possibleKey(key) {
    const char = key.match(/(.)\1{2}/);
    return char == null ? undefined : char[1];
}

export function validKey(key, char) {
    return key.includes(char.repeat(5));
}