import crypto from 'crypto';

export function generateKey(string) {
    return crypto.createHash('md5').update(string).digest('hex');
}
