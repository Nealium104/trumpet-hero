import combinations from "../data/combinations.js"

function validateIndex(index) {
    if (index < 1 || index > 3) {
        throw new Error(`Attempted to access invalid valve index '${index}'. Allowed: 1, 2, 3.`);
    }
}

/**
  * Returns the correctness of a valve combination matching a MIDI note as either
  * 'success' for the canonical valve combination (e.g., G4 is open),
  * 'alternate' for alternate combinations (e.g., G4 could be 1 and 3), or
  * 'failure' (e.g, G4 is NOT 123)
  * @func
  * @param {string} midi - The MIDI number of the note (e.g., 60 for C4)
  * @param {string} combination - The combination as a binary mask (e.g., 0b000)
*/
export function evaluateCombination(midi, combination) {
  const possibleResults = Object.freeze({
    Success: 'success',
    Alternate: 'alternate',
    Failure:  'failure'
  });

  const noteCombinations = combinations[midi];
  if (!noteCombinations) throw new RangeError(`MIDI note ${midi} not in combinations`);
  if (combination === noteCombinations[0]) return possibleResults.Success
  if (noteCombinations.includes(combination)) return possibleResults.Alternate
  return possibleResults.Failure
}

/** Returns a single bitmask for a given combination in array form
  * @func
  * @param {boolean[]} combination - The array of booleans representing a combination
  * @returns {number} - The same array in a bitmask form (e.g., 0b101 as values 1 and 3 pressed)
*/
export function combinationToBitmask(combination) {
  // [boolean, boolean, boolean]
  let collect = "0b";
  for (const valve of combination) {
    collect += +valve;
  }
  return +collect;
}

/** Returns an array representing a bitmask as combination array
  * @func
  * @param {number} bitmask - The bitmask representing a combination (e.g., 0b001)
  * @returns {boolean[]} - The same bitmask in array form (e.g., [null, false, false, true])
*/
export function bitmaskToCombination(bitmask) {
  const bitLength = 3;
  const activeIndexes = [null];

  for (let i = bitLength - 1; i >= 0; i--) {
    if ((bitmask & (1 << i)) !== 0) {
      activeIndexes.push(true);
    } else {
      activeIndexes.push(false);
    }
  }
  return activeIndexes;
}

export function convertValveToBit(valve){
  // [1, 0b100 = 4],
  // [2, 0b010 = 2],
  // [3, 0b001 = 1]

  let result = (valve >> 2) & 2;
  return result.toString(2).padStart(3, "0");
  // return result
}

export function convertBitToValve(bit) {
  return ((bit & 1) << 2) | (bit & 2) | ((bit & 4) >> 2);
}

export function withValvePressed(initialBitmask, valvePressed) {
  const bit = convertBitToValve(valvePressed);
  console.log(`valvePressed: ${valvePressed}`)
  console.log(`valve converted to bit: ${bit.toString(2).padStart(3)}`)
  return initialBitmask | bit;
}

export function withValveReleased(initialBitmask, valveReleased) {
  const bit = convertBitToValve(~(1 << valveReleased));
  return initialBitmask & bit;
}
