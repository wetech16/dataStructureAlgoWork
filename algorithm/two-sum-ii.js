/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let aPointer = 0;
  let bPointer = numbers.length - 1;
  while (aPointer <= bPointer) {
    let sum = numbers[aPointer] + numbers[bPointer];
    if (sum < target) {
      aPointer++;
    } else if (sum > target) {
      bPointer--;
    } else {
      return [aPointer + 1, bPointer + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
