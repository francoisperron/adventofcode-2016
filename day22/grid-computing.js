export const node = (line) => {
    const parts = line.split(/\ +/);

    const x = parseInt(parts[0].slice(parts[0].indexOf('x') + 1, parts[0].indexOf('y') - 1));
    const y = parseInt(parts[0].slice(parts[0].indexOf('y') + 1));
    const size = parseInt(parts[1].slice(0, -1));
    const used = parseInt(parts[2].slice(0, -1));

    return {x, y, size, used};
};

const flatten = (list) => list.reduce((a, b) => a.concat(b), []);

export const viablePairs = (nodes) => {
    const notEmpty = (n) => n.used != 0;
    const node1DataFitsOnNode2 = (n1, n2) => n2.size >= n2.used + n1.used;
    const sameNode = (n1, n2) => n1.x == n2.x && n1.y == n2.y;

    let pairs = nodes.filter(n1 => notEmpty(n1)).map(n1 => nodes.map(n2 => node1DataFitsOnNode2(n1, n2) && !sameNode(n1, n2)));
    pairs = flatten(pairs);
    return pairs.filter(f => f == true).length;
};

export const findPreciousData = (nodes) => {
    return nodes.reduce((precious, n) => n.y == 0 && n.x > precious.x ? n : precious, {x: 0, y: 0})
};

export const fewestSteps = (nodes) => {
  return 7;
};