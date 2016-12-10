export function decompressPart1(sequence) {
    return decompress(sequence, 0, sequence.length, 'normal');
}

export function decompressPart2(sequence) {
    return decompress(sequence, 0, sequence.length, 'recurse');
}

function decompress(sequence, start, length, part) {
    let size = 0;
    let index = start;
    while (index < start + length) {
        if (sequence.charAt(index) == '(') {
            const marker = new Marker(sequence, index);
            index += marker.lenght();

            const numberOfCharsToRepeat = part == 'recurse' ? decompress(sequence, index, marker.numberOfCharsToRepeat(), 'recurse') : marker.numberOfCharsToRepeat();
            size += marker.numberOfTimes() * numberOfCharsToRepeat;

            index += marker.numberOfCharsToRepeat();
        }
        else {
            size++;
            index++;
        }
    }

    return size;
}

export class Marker {
    constructor(sequence, index) {
        const markerEnd = sequence.slice(index).indexOf(')');
        this.marker = sequence.slice(index + 1, index + markerEnd);
    }

    lenght() {
        return this.marker.length + 2;
    }

    numberOfCharsToRepeat() {
        return parseInt(this.marker.split('x')[0]);
    }

    numberOfTimes() {
        return parseInt(this.marker.split('x')[1]);
    }
}
