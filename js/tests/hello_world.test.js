import test from "node:test";
import assert from "node:assert/strict";

import { helloWorld } from "../helloWorld.js"

test("This test works", () => {
  const actual = helloWorld(1);
  const expected = "Hello world! Here's the number 1";
  assert.equal(actual, expected);
});
