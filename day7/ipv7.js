export class Ipv7 {
    constructor(address) {
        const addressParts = this.splitaddress(address);

        this.hyperNetSequences = [];
        this.addressParts = [];
        for (let i = 0; i < addressParts.length; i++) {
            if (i % 2 === 0) {
                this.addressParts.push(addressParts[i]);
            } else {
                this.hyperNetSequences.push(addressParts[i]);
            }
        }
    }

    splitaddress(address) {
        const separators = ['\\[', '\\]'];
        return address.split(new RegExp(separators.join('|'), 'g'));
    }

    isTLS() {
        const inAddress = this.addressParts.filter(a => patternIn(a) == true).length > 0;
        const notInHNS = this.hyperNetSequences.filter(h => patternIn(h) == true).length == 0;
        return inAddress && notInHNS;
    }
}

export function patternIn(string) {
    const chars = string.split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == chars[i + 3] && chars[i + 1] == chars[i + 2] && chars[i] != chars[i + 1]) return true;
    }
    return false;
}

export function addressesSupportingTLS(addresses) {
    return addresses.filter(a => new Ipv7(a).isTLS() == true).length;
}
