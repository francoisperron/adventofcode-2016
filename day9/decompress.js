export function decompress(sequence) {

    const chars = sequence.slice('');
    const decompressed = [];
    let index = 0;
    while(index < chars.length){
        const current = chars[index];
        if(current != '('){
            console.log('add ' + current);
            decompressed.push(current);
            index++;
        }else {
            const markerEnd = chars.slice(index).indexOf(')');
            const marker = chars.slice(index + 1, index + markerEnd + 1);
            const numberOfChar = parseInt(marker.split('x')[0]);
            const times = parseInt(marker.split('x')[1]);

            const charsToAdd = chars.slice(index + marker.length + 1, index + marker.length + 1 + numberOfChar).repeat(times);
            console.log('add ' + charsToAdd);
            decompressed.push(charsToAdd);

            index += marker.length + numberOfChar + 1;
        }
    }
    return decompressed.reduce((a,b) => a.concat(b));
}

