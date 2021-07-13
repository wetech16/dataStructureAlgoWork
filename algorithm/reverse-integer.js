/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  const xStrArr = Math.abs(x).toString().split("");
  const reversStr = xStrArr.reverse().join("");
  const num = Number(reversStr);
  if (isNegative && num > Math.pow(2, 31)) {
    return 0;
  }
  if (!isNegative && num > Math.pow(2, 31) - 1) {
    return 0;
  }
  return isNegative ? -num : num;
};

// var reverse = function (n) {
//   let isNegative = n < 0;
//   let reverse = 0;
//   let x = Math.abs(n);
//   while (x !== 0) {
//     reverse = reverse * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }
//   if (isNegative && reverse > Math.pow(2, 31)) return 0;
//   if (!isNegative && reverse > Math.pow(2, 31) - 1) return 0;
//   return isNegative ? -reverse : reverse;
// };
// console.log(reverse(-123));
