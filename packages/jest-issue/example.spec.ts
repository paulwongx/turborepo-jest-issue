import {value} from "./example";
import {jest} from '@jest/globals'

describe("example", () => {
  it("should be true", () => {
    expect(value).toBe(true);
  });
});