import crypto from 'crypto';

export class Password{
    constructor(hasher){
        this.hasher = hasher;
    }

    of(input){
        let password = '';
        let counter = 0;
        while(this.incompletePassword(password)){
            let hash = this.hasher(input+counter);
            if(isHashValid(hash)) {
                password +=hash.charAt(5);
                console.log('Password: ' + password);
            }
            counter++;
        }
        return password;
    }

    incompletePassword(password) {
        return password.length != 8;
    }
}

export function isHashValid(string) {
    return string.slice(0,5) == '00000';
}

export function md5Hash(string) {
    return crypto.createHash('md5').update(string).digest('hex')
}
