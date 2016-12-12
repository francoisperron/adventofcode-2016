export class Screen {
    constructor(col, row) {
        const newLine = () => Array.from(new Array(col), () => '.');
        this.pixels = Array.from(new Array(row), () => newLine());
    }

    fill(row, col) {
        for (let i = 0; i < col; i++) {
            for (let j = 0; j < row; j++) {
                this.pixels[i][j] = '#';
            }
        }
        return this;
    }

    rotateColumn(x, by) {
        while (by--) {
            const bottom = this.pixels[this.pixels.length - 1][x];
            for (let y = this.pixels.length - 1; y >= 0; y--) {
                this.pixels[y][x] = y > 0 ? this.pixels[y - 1][x] : bottom;
            }
        }
        return this;
    }

    rotateRow(y, by) {
        while (by--) {
            const right = this.pixels[y][this.pixels[0].length - 1];
            for (let x = this.pixels[0].length - 1; x >= 0; x--) {
                this.pixels[y][x] = x > 0 ? this.pixels[y][x - 1] : right;
            }
        }
        return this;
    }

    process(sequences){
        sequences.forEach(s => this.processSequence(s));
        return this;
    }

    processSequence(s) {
        const parts = s.split(' ');
        parts[0] == 'rect' ? this.processFill(parts[1]) : this.processRotate(parts[1], parts[2], parts[4]);
    }

    processFill(rectangle) {
        const size = rectangle.split('x').map(i => parseInt(i));
        this.fill(size[0], size[1]);
    }

    processRotate(type, what, how) {
        const element = parseInt(what.substr(2));
        const by = parseInt(how);
        type == 'column' ? this.rotateColumn(element, by) : this.rotateRow(element, by);
    }
}