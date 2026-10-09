import test from "node:test";
import assert from "node:assert/strict";

import { convertPitch } from "../pitchToMidiNum.js"

test("note with octave", () => {
  const actual = convertPitch("C4");
  const expected = 60;
  assert.equal(actual, expected);
});

test("note with octave and accidental", () => {
  const cases = [
    ["B#3", 60],
    ["Db2", 37],
    ["Eb8", 111],
    ["Dbb4", 60],
    ["Fx9", 127],
    ["Fbb3", 51]
  ];

  for (const set of cases) {
    const [setPitch, expected] = set;
    const actual = convertPitch(setPitch);
    assert.equal(actual, expected, `notated pitch: ${setPitch}`);
  }
});
