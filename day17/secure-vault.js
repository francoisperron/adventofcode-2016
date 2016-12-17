import crypto from 'crypto';

export const hash = (passcode) => crypto.createHash('md5').update(passcode).digest('hex').slice(0, 4);

export const openDoors = (hashCode) => {
    const open = 'bcdef';
    const directions = 'UDLR';
    return hashCode.split('').map((h, i) => open.includes(h) ? directions[i] : '').join('');
};

export const moves = (hashCode, p) => {
    const positionsMoves = [
        {x: p.x + 1, y: p.y, path: p.path + 'R'},
        {x: p.x - 1, y: p.y, path: p.path + 'L'},
        {x: p.x, y: p.y + 1, path: p.path + 'D'},
        {x: p.x, y: p.y - 1, path: p.path + 'U'}];
    const isValid = (p) => openDoors(hashCode).includes(p.path.slice(-1)) && isInsideTheVault(p);
    const isInsideTheVault = (p) => p.x > -1 && p.y > -1 && p.x < 4 && p.y < 4;

    return positionsMoves.filter(isValid);
};

export function shortestPath(passCode) {

    let possibleMoves = [];
    let position = {x: 0, y: 0, path: ''};
    while (!(position.x == 3 && position.y == 3)) {
        console.log(position);
        let hashCode = hash(passCode + position.path);
        possibleMoves = [...possibleMoves, ...moves(hashCode, position)];
        position = possibleMoves.shift();
    }
    return position.path;
}