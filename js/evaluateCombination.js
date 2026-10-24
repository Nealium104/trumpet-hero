import combinations from "../data/combinations.js"

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
  * @param {boolean[]} - The array of booleans representing a combination
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
