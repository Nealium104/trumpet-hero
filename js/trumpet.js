import { combinationToBitmask, withValvePressed, withValveReleased } from "./combination.js";

export class Trumpet {
    constructor(combinationBitmask = 0b000) {
        this.combinationBitmask = combinationBitmask;
    }

    pressValve(valve) {
      const currentCombination = this.getCombinationBitmask();
      const newCombination = withValvePressed(currentCombination, valve);
      console.log(newCombination);
      this.setCombinationBitmask(newCombination);
    }
    //
    // releaseValve(valve) {
    //     if (valve > 0) this.valveCombination[valve] = false;
    // }
    //
    // returns bitmask
    getCombinationBitmask() {
      return this.combinationBitmask;
    }

    // translate and store valve combination to a bitmask
    setCombinationBitmask(combinationBitmask) {
      this.combinationBitmask = combinationBitmask;
      return this.combinationBitmask;
    }

    getValveCombination() {
      // TODO
      return null;
    }

}
