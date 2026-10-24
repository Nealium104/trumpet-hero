import test from "node:test";
import assert from "node:assert/strict";

import { combinationToBitmask, evaluateCombination } from "../evaluateCombination.js"

test("Report success on single combination", () => {
  const inputs = [
    // [midi, correctCombination]
    [60, 0b000],
    [65, 0b100],
    [68, 0b011],
  ];

  const expected = 'success';
  for (const input of inputs) {
    const [midi, combination] = input;
    const actual = evaluateCombination(midi, combination);
    assert.equal(actual, expected, `midi ${midi}, combination ${combination}`);
  }
});

test("Report alternate", () => {
  const inputs = [
    // [midi, alternateCombination]
    [64, 0b001],
    [66, 0b111],
    [72, 0b011],
  ];

  const expected = 'alternate';
  for (const input of inputs) {
    const [midi, combination] = input;
    const actual = evaluateCombination(midi, combination);
    assert.equal(actual, expected, `midi ${midi}, combination ${combination}`);
  }
});

test("Report failure", () => {
  const inputs = [
    // [midi, incorrectCombination]
    [60, 0b001],
    [61, 0b011],
    [64, 0b111],
    [70, 0b000],
    [72, 0b100],
  ];

  const expected = 'failure';
  for (const input of inputs) {
    const [midi, combination] = input;
    const actual = evaluateCombination(midi, combination);
    assert.equal(actual, expected, `midi ${midi}, combination ${combination}`);
  }
});

test("Convert a given combination in array form to expected bitmask", () => {
  const sets = [
    // [combination[boolean, boolean, boolean], bitmask]
    [[false, false, false], 0b000],
    [[false, true, false], 0b010],
    [[true, false, false], 0b100],
    [[false, false, true], 0b001],
    [[false, true, true], 0b011],
    [[true, false, true], 0b101],
    [[true, true, true], 0b111],
    [[true, true, false], 0b110],
    [[false, true, true], 0b011],
  ];
  for (const set of sets) {
    const [combinationArray, expected] = set;
    const actual = combinationToBitmask(combinationArray);
    assert.equal(actual, expected, `combination array ${combinationArray}, actual bitmask ${actual}`);
  }
});
