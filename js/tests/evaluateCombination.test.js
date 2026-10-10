import test from "node:test";
import assert from "node:assert/strict";

import { evaluateCombination } from "../evaluateCombination.js"

test("Report success on single combination", () => {
  const inputs = [
    // [midi, combination]
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
    // [midi, combination]
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
    // [midi, combination]
    // Deliberately incorrect
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
