(function main() {
    function binarySearch(arr,searchNum, first){
        let low = 0;
        let high = arr.length -1;
        let resultIndex = -1; 
        while(low <= high) {
            let mid = Math.floor(low/2+high/2);
            if(searchNum == arr[mid]) {
                resultIndex = mid
                first ? high = mid -1 : low = mid +1
            }
            else if (searchNum < arr[mid]) high = mid -1;
            else low = mid +1
        }
        return resultIndex
    }
    let arr = [1,3,5,7,7,7,10]
    let firstIndex = binarySearch(arr, 7, true)
    let lastIndex = binarySearch(arr, 7, false)
    let count = 0
    if (firstIndex !== -1) count = lastIndex - firstIndex +1
    console.log("count", count )
})()