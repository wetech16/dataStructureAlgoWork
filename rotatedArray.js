(function main() {
    function rotateBinary(arr){
        let low = 0
        let high = arr.length -1;
        let n = arr.length -1;
        while(low <=high) {
            let mid = Math.floor(low/2 + high/2);
            let prev = (mid+n-1)%n
            let next = (mid +1)%n
            if(arr[low] < arr[high])return low
            if(arr[mid]<= arr[next] && arr[mid]<=arr[prev]) return mid
            if(arr[mid] <= arr[high]) high = mid -1
            if(arr[mid] >= arr[low]) low = mid +1
        }
    }
   let arr = [12, 14,15,4]
   let ans = rotateBinary(arr)
   console.log(ans)
}) ()