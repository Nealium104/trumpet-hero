import test from "node:test";
import assert from "node:assert/strict";

import { Trumpet } from "../trumpet.js";

test("test start bitmask", () => {
  const sets = [
    // combination, bitmask
    [
      [null, true, false, false],
      0b100
    ]
  ];

  for (const set of sets) {
    const [combination, bitmask] = set;
    const trumpet = new Trumpet({
      currentCombinationbitmask: bitmask,
    });
    const expected = bitmask;
    const actual = trumpet.getCurrentCombinationBitmask();
    assert.equal(actual, expected);
  }
});

test("test set new combination from array", () => {
  const trumpet = new Trumpet();

  const sets = [
    // [
      // [combination array],
      // expected bitmask
    // ]
    [
      [null, false, false, true],
      0b001
    ],
    [
      [null, true, false, true],
      0b101
    ],
    [
      [null, true, true, true],
      0b111
    ],
    [
      [null, false, false, false],
      0b000
    ]
  ]

  for (const set of sets) {
    const [valveCombination, expected] = set;
    const actual = trumpet.setCurrentCombination(valveCombination);
    assert.equal(actual, expected);
  }
});

test("test valve presses", () => {
  const trumpet = new Trumpet();

  // test is continual; each press adds
  const sets = [
    // valveIndex, expected bitmask
    [1, 0b100],
    [3, 0b101],
    [2, 0b111]
  ];

  for (const set of sets) {
    const [valve, expected] = set;
    trumpet.pressValve(valve);
    const actual = trumpet.getCurrentCombinationBitmask();
    console.log(actual);
    assert.equal(
      actual,
      expected,
      `valve ${valve}, actual bitmask ${actual}`
    );
  }
});

test("test valve releases", () => {
  const trumpet = new Trumpet();

  const sets = [];
});
