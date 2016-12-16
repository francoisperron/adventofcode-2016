export class Disk {
    constructor(positions, originalPosition) {
        this.positions = positions;
        this.originalPosition = originalPosition;
        this.position = originalPosition;
    }

    tick(nb) {
        const ticks = nb % this.positions;
        this.position = this.position + ticks == this.positions ? 0 : this.position + ticks;
    }

    reset() {
        this.position = this.originalPosition;
    }
}

export class Sculpture {
    constructor(disks) {
        this.disks = disks;
    }

    pushAt(time) {
        this.disks.forEach((d, i) => d.tick(time + i + 1));
    }

    capsulePasses() {
        return this.disks.every(d => d.position == 0);
    }

    reset() {
        this.disks.forEach(d => d.reset());
    }
}

export function firstTimeToGetACapsule(disks) {
    const sculpture = new Sculpture(disks);
    let time = 0;
    while (!sculpture.capsulePasses()) {
        sculpture.reset();
        sculpture.pushAt(time);
        time++;
    }
    return time - 1;
}