(function main(){
    function binarySearch(arr, low, high, searchNum) {
      if (low > high) return -1
        let mid = Math.floor(low/2+high/2)
        if(searchNum == arr[mid]) return arr[mid];
        else if(searchNum < arr[mid]) return binarySearch(arr,low, mid-1, searchNum );
        else return binarySearch(arr, mid +1, high, searchNum);

    }
    let arr = [2,6,13,21,35,37,45,65]
    let low = 0;
    let high = arr.length - 1;
    let ans = binarySearch(arr,low, high, 45);
  console.log(ans)
})()