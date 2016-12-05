import crypto from 'crypto';

export class PasswordDecrypter {
    constructor(hasher) {
        this.hasher = hasher;
    }

    of(input) {
        let password = new Password();
        let counter = 0;
        while (password.isIncomplete()) {
            let hash = this.hasher(input + counter);
            if (isHashValid(hash)) {
                password.setCharAt(hash.charAt(5), hash.charAt(6));
                console.log('Password: ' + password.getCode());
            }
            counter++;
        }
        return password;
    }
}

export class Password {
    constructor() {
        this.code = new Array(8).fill('');
    }

    setCharAt(position, char) {
        if (position <= 8 && this.code[position] == '') this.code[position] = char;
    }

    isIncomplete() {
        return !this.code.every(e => e != '');
    }

    getCode() {
        return this.code.join('');
    }
}

export function isHashValid(string) {
    return string.slice(0, 5) == '00000';
}

export function md5Hash(string) {
    return crypto.createHash('md5').update(string).digest('hex')
}
