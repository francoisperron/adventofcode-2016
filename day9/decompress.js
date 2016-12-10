export function decompressPart1(sequence) {
    return decompress(sequence, 0, sequence.length, 'normal');
}

export function decompressPart2(sequence) {
    return decompress(sequence, 0, sequence.length, 'recurse');
}

function decompress(sequence, start, length, part) {
    let size = 0;
    for (let index = start; index < start + length;) {
        if (sequence.charAt(index) == '(') {
            const marker = new Marker();
            index++;
            while (sequence.charAt(index) != ')') {
                marker.add(sequence.charAt(index));
                index++;
            }
            index++;
            size += marker.numberOfTimes() * (part == 'recurse' ?
                decompress(sequence, index, marker.numberOfCharsToRepeat(), 'recurse') :
                marker.numberOfCharsToRepeat());

            index += marker.numberOfCharsToRepeat();
        }
        else {
            size++;
            index++;
        }
    }

    return size;
}

class Marker {
    constructor() {
        this.marker = '';
    }

    add(char) {
        this.marker += char;
    }

    numberOfCharsToRepeat() {
        return parseInt(this.marker.split('x')[0]);
    }

    numberOfTimes() {
        return parseInt(this.marker.split('x')[1]);
    }
}
