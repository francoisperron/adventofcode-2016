export function isAnOpenSpace(p, input) {
    const equation = () => (p.x * p.x) + (3 * p.x) + (2 * p.x * p.y) + p.y + (p.y * p.y) + input;
    const numberOfBitOne = () => equation().toString(2).match(/1/g).length;

    return numberOfBitOne() % 2 != 1;
}

export function possiblePositions(p, input) {
    const positionsAround = [{x: p.x + 1, y: p.y}, {x: p.x - 1, y: p.y}, {x: p.x, y: p.y + 1}, {x: p.x, y: p.y - 1}];
    const isValid = (p) => isAnOpenSpace(p, input) && isInsideTheBuilding(p);
    const isInsideTheBuilding = (p) => p.x > -1 && p.y > -1;

    return positionsAround.filter(isValid);
}

export function addSteps(p, steps, visited) {
    if (isANewPosition(p,visited)) {
        visited[[p.x,p.y]] = 0;
    }
    visited[[p.x,p.y]] += steps;
}

export function isANewPosition(p, visited) {
    return visited[[p.x,p.y]] == undefined
}

export function stepsAt(p, visited) {
    return visited[[p.x, p.y]];
}
export function minimumSteps(input, start, stop) {

    let position = start;
    let positionsQueue = [];
    let visited = [];
    addSteps(position, 0, visited);

    while (!(position.x == stop.x && position.y == stop.y)) {
        let positionSteps = stepsAt(position, visited);
        const positions = possiblePositions(position, input).filter(p => isANewPosition(p, visited));
        positions.forEach(p => addSteps(p, positionSteps + 1, visited));
        positionsQueue.push(...positions);
        position = positionsQueue.shift();
    }

    return stepsAt(position, visited);
}