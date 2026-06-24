export class Trumpet {
    constructor() {
        // keep the first value null to treat the indexes like valve combos
        // e.g., 1-3 for D, 1-2 for E
        this.valves = [null, false, false, false];
    }

    #validateIndex(index) {
        if (index < 1 || index > 3) {
            throw new Error(`Attempted to access invalid valve index '${index}'. Allowed: 1, 2, 3.`);
        }
    }

    pressValve(index) {
        this.#validateIndex(index);
        this.valves[index] = true;
    }

    releaseValve(index) {
        this.#validateIndex(index);
        if (index > 0) this.valves[index] = false;
    }

    getCurrentCombo() {
        let combo = [];
        this.valves.forEach((isPressed, index) => {
            isPressed && combo.push(index + 1);
        });

        return combo.length > 0 ? combo.join("-") : "open";
    }
}
