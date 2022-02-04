import { testFunction, TEST_STRING, add } from "../src";

it("returns 'test string'", () => {
  const expected = TEST_STRING;
  const result = testFunction();

  expect(result).toBe(expected);
});

describe("it adds two numbers", () => {
  test("it adds 1 and 1", () => {
    expect(add(1, 1)).toBe(2);
  });

  test("it adds 0 and 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("it adds big numbers", () => {
    expect(add(10000, 10000)).toBe(10000 + 10000);
  });

  test("it adds negative numbers", () => {
    expect(add(10000, -10000)).toBe(10000 + -10000);
  });

  test("it adds decimals", () => {
    expect(add(10000.05, 10000.05)).toBe(20000.1);
  });

  test("it adds decimals", () => {
    expect(add(0.2, 0.3)).toBe(0.5);
  });

  test("it handles invalid input", () => {
    expect(() => {
      add("1", 1);
    }).toThrow("Invalid Args");
  });
});
