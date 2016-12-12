import {Heading, direction} from './heading';

export function numberOfBlocksAway(path) {
    const steps = extractSteps(path);

    let heading = new Heading(direction.NORTH);
    let position = [0, 0];

    for (let step of steps) {
        let turn = step[0];
        heading = heading.turn(turn);

        let distance = parseInt(step.substring(1));
        for (let d = 0; d < distance; d++) {
            if (heading.direction == direction.NORTH) position = [position[0] + 1, position[1]];
            if (heading.direction == direction.SOUTH) position = [position[0] - 1, position[1]];
            if (heading.direction == direction.EAST) position = [position[0], position[1] + 1];
            if (heading.direction == direction.WEST) position = [position[0], position[1] - 1];
        }
    }
    return position.reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
}

export function firstPositionEncounteredTwice(path) {
    const steps = extractSteps(path);

    let heading = new Heading(direction.NORTH);
    let position = [0, 0];

    let positions = [position];
    for (let step of steps) {
        let turn = step[0];
        heading = heading.turn(turn);

        let distance = parseInt(step.substring(1));
        for (let d = 0; d < distance; d++) {
            if (heading.direction == direction.NORTH) position = [position[0] + 1, position[1]];
            if (heading.direction == direction.SOUTH) position = [position[0] - 1, position[1]];
            if (heading.direction == direction.EAST) position = [position[0], position[1] + 1];
            if (heading.direction == direction.WEST) position = [position[0], position[1] - 1];

            if (positions.find(p => p[0] == position[0] && p[1] == position[1]))
                return position.reduce((a, b) => Math.abs(a) + Math.abs(b), 0);

            positions.push(position);
        }
    }
    return 0;
}

function extractSteps(path) {
    return path.replace(/ /g, '').split(',');
}
