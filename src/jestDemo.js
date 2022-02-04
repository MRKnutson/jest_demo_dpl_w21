import { add } from ".";

export const divide = (num1, num2) => {
  return num1 / num2;
};

export const addAndDivideBy2 = (num1, num2) => {
  let num = add(num1, num2);
  return num / 2;
};
