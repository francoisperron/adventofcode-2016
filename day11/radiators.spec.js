/*
 The first floor contains a promethium generator and a promethium-compatible microchip.
 The second floor contains a cobalt generator, a curium generator, a ruthenium generator, and a plutonium generator.
 The third floor contains a cobalt-compatible microchip, a curium-compatible microchip, a ruthenium-compatible microchip, and a plutonium-compatible microchip.
 The fourth floor contains nothing relevant.

 promethium = P
 cobalt = B
 curium = C
 ruthenium = R
 plutonium = L

 F4 .  .  .  .  .  .  .  .  .  .  .
 F3 .  .  .  .  BM .  CM .  RM .  LM
 F2 .  .  .  BG .  CG .  RG .  LG .
 F1 E  PG PM .  .  .  .  .  .  .  .

 possible moves:
 1. up 1
 2. up 2
 3. down 1
 4. down 2

 is floor valid:
 M avec son G || pas de G

 */

const map = [
    ['F4', '.', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. '],
    ['F3', '.', '. ', '. ', '. ', 'BM', '. ', 'CM', '. ', 'RM', '. ', 'LM'],
    ['F2', '.', '. ', '. ', 'BG', '. ', 'CG', '. ', 'RG', '. ', 'LG', '. '],
    ['F1', 'E', 'PG', 'PM', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. ']
];

console.log(map);


const map2 = [
    ['F4', '.', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. '],
    ['F3', '.', '. ', '. ', '. ', 'BM', '. ', 'CM', '. ', 'RM', '. ', 'LM'],
    ['F2', 'E', 'PG', 'PM', 'BG', '. ', 'CG', '. ', 'RG', '. ', 'LG', '. '],
    ['F1', '.', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. ', '. ']
];
