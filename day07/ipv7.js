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
        const inAddress = this.addressParts.filter(a => tlsPatternIn(a)).length > 0;
        const notInHNS = this.hyperNetSequences.filter(h => tlsPatternIn(h)).length == 0;
        return inAddress && notInHNS;
    }

    isSSL() {
        const ssl = this.addressParts.map(a => new SslPattern(a)).filter(s => s.isSsl());
        const hyper = this.hyperNetSequences.map(h => new SslPattern(h)).filter(s => s.isSsl());
        const reverse = ssl.map(s => s.reversePattern()).reduce((a,b) => a.concat(b), []);
        return reverse.find(bab => hyper.find(h => h.pattern.includes(bab))) != undefined;
    }
}

export function tlsPatternIn(string) {
    const chars = string.split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == chars[i + 3] && chars[i + 1] == chars[i + 2] && chars[i] != chars[i + 1]) return true;
    }
    return false;
}

export class SslPattern{
    constructor(string){
        this.pattern = [];
        const chars = string.split('');
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] == chars[i + 2] && chars[i] != chars[i + 1]) {
                this.pattern.push(chars[i] + chars[i+1] + chars[i+2]);
            }
        }
    }

    isSsl(){
        return this.pattern.length != 0;
    }

    reversePattern(){
        return this.pattern.map(p => p[1] + p[0] + p[1]);
    }
}

export function addressesSupportingTLS(addresses) {
    return addresses.filter(a => new Ipv7(a).isTLS()).length;
}

export function addressesSupportingSSL(addresses) {
    return addresses.filter(a => new Ipv7(a).isSSL()).length;
}
