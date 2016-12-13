
// const assembly = {elevator: 1, pairs: [{g: 2, m: 1}, {g: 3, m: 1}]};
// const move = {elevator: 2, items: [{pair: 0, item: 'm'}]};
export function letsMove(assembly, move) {
    move.items.map(i => assembly.pairs[i.pair][i.item] = move.elevator);
    assembly.elevator = move.elevator;
    return assembly;
}