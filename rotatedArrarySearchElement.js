(function main() {
  function rotateBinary(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let n = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor(low / 2 + high / 2);
      if (num == arr[mid]) return mid;
      if (arr[mid] <= arr[high]) {
        // right part is sorted
        if (num > arr[mid] && num <= arr[high]) low = mid + 1;
        else high = mid - 1;
      } else {
        //left part is sorted
        if (arr[low] <= num && num < arr[mid]) high = mid - 1;
        else low = mid + 1;
      }
    }
  }
  let arr = [12, 14, 15, 4];
  let ans = rotateBinary(arr, 12);
  console.log(ans);
})();
