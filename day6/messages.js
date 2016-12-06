function mergeArrays(a, b) {
    const merged = [];
    for(let i = 0; i < a.length; i++){
        merged.push(a[i]+b[i]);
    }
    return merged;
}

export function parseMessages(messages) {
    return messages.map(m => m.split('')).reduce((a,b) => mergeArrays(a,b));
}

export function mostCommonCharIn(string) {
    const grouped = {};
    string.split('').map(a => {if (a in grouped) grouped[a]++; else grouped[a] = 1; } );
    return Object.keys(grouped).reduce((a,b) => grouped[a] > grouped[b] ? a : b);
}