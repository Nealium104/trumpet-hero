import { combinationToBitmask } from "./evaluateCombination.js";

export class Trumpet {
    constructor({
      currentCombinationbitmask = 0b000
    }) {
        this.currentCombinationBitmask = currentCombinationbitmask;
        this.valveCombination = this.;
    }

    #validateIndex(index) {
        if (index < 1 || index > 3) {
            throw new Error(`Attempted to access invalid valve index '${index}'. Allowed: 1, 2, 3.`);
        }
    }

    pressValve(index) {
        this.#validateIndex(index);
        this.valveCombination[index] = true;
    }

    releaseValve(index) {
        this.#validateIndex(index);
        if (index > 0) this.valveCombination[index] = false;
    }

    // returns bitmask
    getCurrentCombinationBitmask() {
      return combinationToBitmask(this.valveCombination.slice(1));
    }

    getCurrentValveCombination() {
      return BitmaskToCombination();
    }

    // translate and store valve combination to a bitmask
    setCurrentCombination(combination) {
      this.valveCombination = [null, ...(combination)];
      this.currentCombinationBitmask = combinationToBitmask(this.valveCombination.slice(1));
      return this.currentCombinationBitmask; // bitmask value
    }
}
