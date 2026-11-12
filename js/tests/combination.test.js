import test from "node:test";
import assert from "node:assert/strict";

import {
  convertBitToValve,
  withValvePressed,
  withValveReleased,
  bitmaskToCombination,
  combinationToBitmask,
  evaluateCombination
} from "../combination.js"

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

test("Convert a given bitmask to a combination array", () => {
  const sets = [
    // [bitmask, combination[boolean, boolean, boolean]]
    [0b000, [null, false, false, false]],
    [0b010, [null, false, true, false]],
    [0b100, [null, true, false, false]],
    [0b001, [null, false, false, true]],
    [0b011, [null, false, true, true]],
    [0b101, [null, true, false, true]],
    [0b111, [null, true, true, true]],
    [0b110, [null, true, true, false]],
    [0b011, [null, false, true, true]],
  ];

  for (const set of sets) {
    const [bitmask, expected] = set;
    const actual = bitmaskToCombination(bitmask);
    assert.deepEqual(actual, expected, `bitmask ${bitmask}, actual combination ${actual}`);
  }

});

test("Press valve at position", () => {
  const sets = [
  // [
  //   [initialBitmask, valvePressed],
  //   expected bitmask
  // ]
    [
      [0b000, 3],
      0b001
    ],
    [
      [0b001, 1],
      0b101
    ],
    [
      [0b101, 3],
      0b101
    ]
  ];
  for (const set of sets) {
    const [initialBitmask, valvePressed] = set[0];
    const expected = set[1];

    const actual = withValvePressed(initialBitmask, valvePressed);
    assert.equal(actual, expected, `Valve pressed ${valvePressed}, Expected bitmask ${expected.toString(2).padStart(3, '0')}, actual ${actual.toString(2).padStart(3, '0')}`)
  }
});

test("Release value from position", () => {
  // [
  //   [initialBitmask, valvePressed],
  //   expected bitmask
  // ]
  const sets = [
    [
      [0b000, 3],
      0b000
    ],
    [
      [0b101, 1],
      0b001
    ],
    [
      [0b101, 3],
      0b100
    ]
  ];
  for (const set of sets) {
    const [initialBitmask, valveReleased] = set[0];
    const expected = set[1];

    const actual = withValveReleased(initialBitmask, valveReleased);
    assert.equal(actual, expected, `Valve released ${valveReleased}, Expected bitmask ${expected.toString(2)}, actual ${actual.toString(2)}`)
  }

});

test("reverse bit", () => {
  const sets = [
    // [ initial, expected ]
    [0b000, 0b000],
    [0b001, 0b100],
    [0b101, 0b101],
    [0b110, 0b011],
    [0b011, 0b110]
  ];

  for (const set of sets) {
    const [initial, expected] = set;
    const actual = convertBitToValve(initial);
    assert.equal(actual, expected);
  }

})
