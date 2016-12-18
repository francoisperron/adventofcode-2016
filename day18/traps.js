export const TRAP = '^';
export const SAFE = '.';

export const newTile = (previous) => {
    const trapPatterns = ['^^.', '.^^', '^..', '..^'];
    return trapPatterns.includes(previous) ? TRAP : SAFE;
};

export const newRow = (row) => {
    const paddedRow = SAFE + row + SAFE;
    return row.split('').map((r, i) => newTile(paddedRow.slice(i, i + 3))).join('');
};

export const room = (initialRow, nbRows) => {
    const doNbRowstimes = Array.from(Array(nbRows - 1).keys());
    return doNbRowstimes.reduce(r => [...r, newRow(r[r.length - 1])], [initialRow]);
};

export const safeTilesInRow = (row) => {
    const safeRegexp = new RegExp('\\' + SAFE, 'g');
    return row.match(safeRegexp).length;
};

export const safeTilesIn = (room) => room.map(safeTilesInRow).reduce((a, b) => a + b);

export const safeTilesInRoom = (row, nbRows) => {
    let safeTiles = 0;
    while (nbRows--){
        safeTiles += safeTilesInRow(row);
        row = newRow(row);
    }
    return safeTiles;
};