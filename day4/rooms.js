export class Room {
    constructor(info) {
        this.name = info.substring(0, info.lastIndexOf('-')).replace(/-/g, '');

        const sectorAndChecksum = info.substring(info.lastIndexOf('-') + 1, info.length);
        this.sector = parseInt(sectorAndChecksum.substring(0, sectorAndChecksum.lastIndexOf('[')));
        this.checksum = sectorAndChecksum.substring(sectorAndChecksum.lastIndexOf('[') + 1, sectorAndChecksum.lastIndexOf(']'));
    }

    calculateChecksum(){
        return buildChecksum(charOccurences(this.name));
    }

    isReal() {
        return this.calculateChecksum() == this.checksum;
    }
}

export function count(aString, aChar) {
    return aString.match(new RegExp(aChar, 'g') || []).length;
}

export function charOccurences(aString) {
    const occurences = {};
    for (let c of aString) {
        occurences[c] = count(aString, c);
    }
    return occurences;
}

export function buildChecksum(occurences) {
    return Object.keys(occurences).sort((a, b) => {
        const diff = occurences[b] - occurences[a];
        if (diff != 0) return diff;

        return b > a ? -1 : 1;
    }).splice(0, 5).join('');
}