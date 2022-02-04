import { addAndDivideBy2, divide } from "../src/jestDemo";

describe("divide", () => {
  it("divides small numbers", () => {
    expect(divide(1, 1)).toBe(1);
  });

  it("divides large numbers", () => {
    expect(divide(5000, 2)).toBe(2500);
  });
});

describe("adds 2 numbers and divides by 2", () => {
  it("adds and divides by 2", () => {
    expect(addAndDivideBy2(1, 1)).toBe(1);
  });
});

const can = {
  name: "coke",
  ounces: 12,
};
const can2 = {
  name: "coke",
  ounces: 12,
};
const can3 = {
  name: "sprite",
  ounces: 24,
};

describe("the can", () => {
  test("it has twelve ounces", () => {
    expect(can.ounces).toBe(12);
  });

  test("it has a name", () => {
    expect(can.name).toBe("coke");
  });

  test("it does not have diet flavor", () => {
    expect(can.name).not.toBe("Diet");
  });
});

describe("the cokes on my desk", () => {
  test("have the same properties", () => {
    expect(can).toEqual(can2);
  });

  test("have the same properties", () => {
    expect(can).not.toEqual(can3);
  });

  test("Are not the same can", () => {
    expect(can).not.toBe(can2);
  });

  test("Ounces are at most 12 ounces", () => {
    expect(can.ounces).toBeLessThanOrEqual(12);
  });

  test("Ounces are not at most 12 ounces", () => {
    expect(can3.ounces).not.toBeLessThanOrEqual(12);
  });
});

describe("truthy and falsy values", () => {
  test("null is falsy", () => {
    expect(null).toBeFalsy();
  });

  test("undefined is falsy", () => {
    expect(undefined).toBeFalsy();
  });

  test("false is falsy", () => {
    expect(false).toBeFalsy();
  });

  test("NaN is falsy", () => {
    expect(NaN).toBeFalsy();
  });

  test("0 is falsy", () => {
    expect(0).toBeFalsy();
  });

  test("empty string is falsy", () => {
    expect("").toBeFalsy();
  });

  test("1 is truthy", () => {
    expect(1).toBeTruthy();
  });

  test("[] is truthy", () => {
    expect([]).toBeTruthy();
  });

  test("[].length is falsy", () => {
    expect([].length).toBeFalsy();
  });

  test("{} is truthy", () => {
    expect({}).toBeTruthy();
  });
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
