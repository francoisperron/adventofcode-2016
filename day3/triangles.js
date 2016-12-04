export function isTriangle(side1, side2, side3) {
    return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1);
}

export function numberOfTrianglesIn(input) {
    return input.map(i => isTriangle(parseInt(i[0]),parseInt(i[1]),parseInt(i[2]))).filter(t => t == true).length;
}