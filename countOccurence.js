(function main() {
  // function binarySearch(arr,searchNum, first){
  //     let low = 0;
  //     let high = arr.length -1;
  //     let resultIndex = -1;
  //     while(low <= high) {
  //         let mid = Math.floor(low/2+high/2);
  //         if(searchNum == arr[mid]) {
  //             resultIndex = mid
  //             first ? high = mid -1 : low = mid +1
  //         }
  //         else if (searchNum < arr[mid]) high = mid -1;
  //         else low = mid +1
  //     }
  //     return resultIndex
  // }
  function binarySearch(arr, target, first) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
    while (low <= high) {
      let mid = Math.floor(low / 2 + high / 2);
      if (target == arr[mid]) {
        result = mid;
        first ? (high = mid - 1) : (low = mid + 1);
      } else if (target < arr[mid]) high = mid - 1;
      else low = mid + 1;
    }
    return result;
  }
  let arr = [1, 3, 5, 7, 7, 7, 7, 10, 10];
  let firstIndex = binarySearch(arr, 10, true);
  let lastIndex = binarySearch(arr, 10, false);
  let count = 0;
  if (firstIndex !== -1) count = lastIndex - firstIndex + 1;
  console.log("count", count);
})();
