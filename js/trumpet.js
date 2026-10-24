import { combinationToBitmask } from "./evaluateCombination";

export class Trumpet {
    constructor() {
        this.currentCombinationArray = [null, false, false, false];
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

    // returns bitmask
    getCurrentCombination() {
      return combinationToBitmask(this.currentCombinationArray.slice(1));
    }

    // translate and store valve combination to a bitmask
    setCurrentCombination(combinationArray) {
      this.currentCombinationArray = [null, ...combinationToBitmask(combinationArray)];
      return this.currentCombinationArray; // bitmask value
    }
}
