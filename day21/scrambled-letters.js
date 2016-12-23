const swapPosition = (ops, pwd) => {
    const {min, max} = ops[5] < ops[2] ? {min: parseInt(ops[5]), max: parseInt(ops[2])} : {
            min: parseInt(ops[2]),
            max: parseInt(ops[5])
        };
    return pwd.slice(0, min) + pwd.slice(max, max + 1) + pwd.slice(min + 1, max) + pwd.slice(min, min + 1) + pwd.slice(max + 1, pwd.length);
};

const swapLetter = (ops, pwd) => {
    const {l1, l2} = {l1: ops[2], l2: ops[5]};
    return pwd.replace(new RegExp(l1, 'g'), l2.toUpperCase()).replace(new RegExp(l2, 'g'), l1).toLowerCase();
};

const reverse = (ops, pwd) => {
    const {from, to} = {from: parseInt(ops[2]), to: parseInt(ops[4])};
    return pwd.slice(0, from) + pwd.slice(from, to + 1).split('').reverse().join('') + pwd.slice(to + 1, pwd.length);
};

const rotateLeft = (ops, pwd) => {
    const nbTimes = Array.from(new Array(parseInt(ops[2])).keys());
    return nbTimes.reduce(newPwd => newPwd.substring(1) + newPwd.charAt(0), pwd);
};

const rotateRight = (ops, pwd) => {
    const nbTimes = Array.from(new Array(parseInt(ops[2])).keys());
    return nbTimes.reduce(newPwd => newPwd.charAt(newPwd.length - 1) + newPwd.substring(0, newPwd.length - 1), pwd);
};

const move = (ops, pwd) => {
    const {from, to} = {from: parseInt(ops[2]), to: parseInt(ops[5])};
    const newPwd = pwd.slice(0, from) + pwd.slice(from + 1);
    return newPwd.slice(0, to) + pwd.charAt(from) + newPwd.slice(to);
};

const rotatePosition = (ops, pwd) => {
    const index = pwd.indexOf(ops[6]);
    ops[2] = index < 4 ? index + 1 : index + 2;
    return rotateRight(ops, pwd)
};

const reverseRotatePosition = (ops, pwd) => {
    const index = pwd.indexOf(ops[6]);
    //     # pos shift newpos
    //     #   0     1      1
    //     #   1     2      3
    //     #   2     3      5
    //     #   3     4      7
    //     #   4     6      2
    //     #   5     7      4
    //     #   6     8      6
    //     #   7     9      0
    //     # from reddit!
    ops[2] = index / 2 + (index % 2 == 1 || index == 0 ? 1 : 5);
    return rotateLeft(ops, pwd)
};

export const perform = (operation, pwd) => {
    const ops = operation.split(' ');
    const select = {
        swapposition: swapPosition,
        swapletter: swapLetter,
        reversepositions: reverse,
        rotateleft: rotateLeft,
        rotateright: rotateRight,
        moveposition: move,
        rotatebased: rotatePosition
    };

    return select[ops[0] + ops[1]](ops, pwd);
};

export const scramble = (operations, pwd) => operations.reduce((newPwd, operation) => perform(operation, newPwd), pwd);

export const performReverse = (operation, pwd) => {
    const ops = operation.split(' ');
    const select = {
        swapposition: swapPosition,
        swapletter: swapLetter,
        reversepositions: reverse,
        rotateleft: rotateRight,
        rotateright: rotateLeft,
        moveposition: (ops, pwd) => {
            const reverseOps = new Array(5);
            reverseOps[2] = ops[5];
            reverseOps[5] = ops[2];
            return move(reverseOps, pwd);
        },
        rotatebased: reverseRotatePosition
    };

    return select[ops[0] + ops[1]](ops, pwd);
};

export const unscramble = (operations, pwd) => operations.reverse().reduce((newPwd, operation) => performReverse(operation, newPwd), pwd);