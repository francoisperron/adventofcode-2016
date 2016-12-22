const swapPosition = (ops, pwd) => {
    const {min, max} = ops[5] < ops[2] ? {min: ops[5], max: ops[2]} : {min: ops[2], max: ops[5]};
    return pwd.slice(0, min) + pwd.slice(max, max + 1) + pwd.slice(min + 1, max) + pwd.slice(min, min + 1)
};

const swapLetter = (ops, pwd) => {
    const {l1, l2} = {l1: ops[2], l2: ops[5]};
    return pwd.replace(new RegExp(l1,'g'), l2.toUpperCase()).replace(new RegExp(l2,'g'), l1).toLowerCase();
};

export const perform = (operation, pwd) => {
    const ops = operation.split(' ');
    const select = {swapposition: swapPosition, swapletter: swapLetter};

    return select[ops[0] + ops[1]](ops, pwd);
};
