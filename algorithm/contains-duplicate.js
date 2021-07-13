// var containsDuplicate = function (nums) {
//   let mySet = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (mySet.has(nums[i])) return true;
//     mySet.add(nums[i]);
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  let sortedArr = nums.sort((a, b) => a - b);
  console.log(sortedArr);
  for (let i = 0; i < nums.length; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) return true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 2, 4]));
