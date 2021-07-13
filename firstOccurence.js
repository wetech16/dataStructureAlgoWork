(function main() {
  function binarySearch(low, high, arr, searchNum) {
    let resultIndex = -1;
    while (low <= high) {
      let mid = Math.floor(low / 2 + high / 2);
      if (searchNum == arr[mid]) {
        resultIndex = mid;
        low = mid + 1;
      } else if (searchNum > arr[mid]) low = mid + 1;
      else high = mid - 1;
      console.log("mid", mid);
    }
    return resultIndex;
  }
  //   function binarySearch(low, high, arr, target, result) {
  //     if (low > high) return result;
  //     let mid = Math.floor(low / 2 + high / 2);
  //     if (target == arr[mid]) {
  //       result = mid;
  //       return binarySearch(mid + 1, high, arr, target, result);
  //     } else if (target < arr[mid])
  //       return binarySearch(low, mid - 1, arr, target, result);
  //     else return binarySearch(mid + 1, high, arr, target, result);
  //   }
  let arr = [1, 3, 4, 5, 10, 10, 10, 10, 15, 21];
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  let resultIndex = binarySearch(low, high, arr, 10, result);
  console.log(resultIndex);
})();
