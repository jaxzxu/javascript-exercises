const sumAll = function(num1, num2) {
  let error = "ERROR";
  let sum = 0;
  if (!Number.isInteger(num1) || !Number.isInteger(num2))
  return error;
  if (num1 < 0 || num2 < 0)
  return error;
  let biggerValue = Math.max(num1, num2);
  let smallerValue = Math.min(num1, num2);
  for (let i = smallerValue; i < biggerValue + 1; i++) {
      sum = sum + i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
