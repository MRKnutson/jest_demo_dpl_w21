import { unwatchFile } from "fs";

export const TEST_STRING = "test string";

export function testFunction() {
  return TEST_STRING;
}

export function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Invalid Args");
  }
  return num1 + num2;
}
