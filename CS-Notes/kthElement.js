let a = [5, 2, 1, 3, 4];
let k = 1;
let ans = findKthLargest(a, k);
console.log(a, ans);

//sort
// function findKthLargest(arr, k) {
//   arr.sort((a, b) => a - b);
//   return arr[arr.length - k];
// }

//PriorityQueue

//Quick Sort
function findKthLargest(arr, k) {
  k = arr.length - k;
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    let pIndex = partition(arr, start, end);
    if (pIndex == k) break;
    if (pIndex < k) {
      start = pIndex + 1;
    } else {
      end = pIndex - 1;
    }
  }
  return arr[k];
}

function partition(arr, start, end) {
  let i = start,
    j = end + 1;
  while (true) {
    while (arr[++i] < arr[start] && i < end);
    while (arr[--j] > arr[start] && j > start);
    if (i >= j) {
      break;
    }
    swap(i, j);
  }
  swap(start, j);
  return j;
  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}
