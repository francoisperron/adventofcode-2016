export class Heading {
    constructor(aDirection) {
        this.direction = aDirection;
    }

    turn(rightOrLeft) {
        const newDirection = newDirections.find((d) => d.current == this.direction && d.turn == rightOrLeft).result;
        return new Heading(newDirection);
    }
}

export const direction = {
    NORTH: 'NORTH',
    EAST: 'EAST',
    WEST: 'WEST',
    SOUTH: 'SOUTH'
};

const newDirections = [
    {current: direction.NORTH, turn: 'R', result: direction.EAST},
    {current: direction.NORTH, turn: 'L', result: direction.WEST},
    {current: direction.EAST, turn: 'R', result: direction.SOUTH},
    {current: direction.EAST, turn: 'L', result: direction.NORTH},
    {current: direction.SOUTH, turn: 'R', result: direction.WEST},
    {current: direction.SOUTH, turn: 'L', result: direction.EAST},
    {current: direction.WEST, turn: 'R', result: direction.NORTH},
    {current: direction.WEST, turn: 'L', result: direction.SOUTH}
];

