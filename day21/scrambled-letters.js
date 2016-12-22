const swapPosition = (ops, pwd) => {
    const {min, max} = ops[5] < ops[2] ? {min: ops[5], max: ops[2]} : {min: ops[2], max: ops[5]};
    return pwd.slice(0, min) + pwd.slice(max, max + 1) + pwd.slice(min + 1, max) + pwd.slice(min, min + 1)
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

export const perform = (operation, pwd) => {
    const ops = operation.split(' ');
    const select = {
        swapposition: swapPosition,
        swapletter: swapLetter,
        reversepositions: reverse,
        rotateleft: rotateLeft,
        rotateright: rotateRight,
    };

    return select[ops[0] + ops[1]](ops, pwd);
};
