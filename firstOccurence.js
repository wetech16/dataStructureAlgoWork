(function main() {
    function binarySearch(low, high,arr, searchNum) {
        let resultIndex = -1;
        while(low <= high) {
            let mid = Math.floor(low/2 + high/2)
            if(searchNum == arr[mid]) {
                resultIndex = mid;
                low = mid + 1;
            } 
            else if (searchNum > arr[mid]) low = mid +1
            else high = mid - 1
            console.log("mid",mid)
        }
        return resultIndex
    }
    let arr = [1,3,4, 5,10,10, 10,10,15,21]
    let low = 0;
    let high = arr.length -1
    let resultIndex = binarySearch(low, high,arr, 10)
    console.log(resultIndex);
})()