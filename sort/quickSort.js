// var items = [3, 4, 1, 5, 6, 2, 7];
// function swap(items, leftIndex, rightIndex) {
//   var temp = items[leftIndex];
//   items[leftIndex] = items[rightIndex];
//   items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//   var pivot = items[Math.floor((right + left) / 2)], //middle element
//     i = left, //left pointer
//     j = right; //right pointer
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j); //sawpping two elements
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// function quickSort(items, left, right) {
//   var index;
//   if (items.length > 1) {
//     index = partition(items, left, right); //index returned from partition
//     if (left < index - 1) {
//       //more elements on the left side of the pivot
//       quickSort(items, left, index - 1);
//     }
//     if (index < right) {
//       //more elements on the right side of the pivot
//       quickSort(items, index, right);
//     }
//   }
//   return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

// Method 2
// function quickSort(a, start, end) {
//   if (start < end) {
//     let pIndex = partition(a, start, end);
//     quickSort(a, start, pIndex - 1);
//     quickSort(a, pIndex + 1, end);
//   }
// }

// function partition(a, start, end) {
//   let random = Math.floor(Math.random() * (end - start) + start);
//   swap(random, end);
//   let pivot = a[end];
//   let pIndex = start;
//   for (let i = start; i < end; i++) {
//     if (a[i] <= pivot) {
//       swap(i, pIndex);
//       pIndex++;
//     }
//   }
//   swap(pIndex, end);
//   return pIndex;
//   function swap(indexA, indexB) {
//     let temp = a[indexA];
//     a[indexA] = a[indexB];
//     a[indexB] = temp;
//   }
// }
// let a = [7, 7, 3, 4, 1, 5, 6, 2, 7];
// quickSort(a, 0, a.length - 1);
// console.log(a);

// let a = [4, 3, 1, 2];
// quickSort(a, 0, a.length - 1);
// console.log(a);

// function quickSort(arr, start, end) {
//   if (start < end) {
//     let pIndex = partition(arr, start, end);
//     quickSort(arr, start, pIndex - 1);
//     quickSort(arr, pIndex + 1, end);
//   }
// }
// function partition(arr, start, end) {
//   let random = Math.floor(Math.random() * (end - start) + start);
//   console.log(arr, "main", "start", start, "end", end);
//   swap(random, end);
//   let pIndex = start;
//   let value = arr[end];
//   console.log(arr, "random 2 index swap");
//   for (let i = start; i < end; i++) {
//     if (arr[i] <= value) {
//       swap(i, pIndex);
//       console.log(
//         arr,
//         "i",
//         i,
//         "pIndex",
//         pIndex,
//         "arr[i]<arr[end] i-pIndex swap",
//         "pIndex+1"
//       );
//       pIndex++;
//     }
//   }
//   swap(pIndex, end);
//   console.log(arr, "pIndex-end swap");
//   console.log("");
//   return pIndex;
//   function swap(aItem, bItem) {
//     let temp = arr[aItem];
//     arr[aItem] = arr[bItem];
//     arr[bItem] = temp;
//   }
// }

// let a = [4, 3, 1, 2, 5, 7];
// kElement(a, a.length - 1);
// console.log(a);

// function kElement(nums, k) {
//   k = nums.length - k;
//   let l = 0,
//     h = nums.length - 1;
//   while (l < h) {
//     let j = partition(nums, l, h);
//     if (j == k) {
//       break;
//     } else if (j < k) {
//       l = j + 1;
//     } else {
//       h = j - 1;
//     }
//   }
//   return nums[k];
// }

// function partition(a, l, h) {
//   let i = l,
//     j = h + 1;
//   while (true) {
//     while (a[++i] < a[l] && i < h);
//     while (a[--j] > a[l] && j > l);
//     if (i >= j) {
//       break;
//     }
//     swap(a, i, j);
//   }
//   swap(a, l, j);
//   return j;
// }

// function swap(a, i, j) {
//   let t = a[i];
//   a[i] = a[j];
//   a[j] = t;
// }

let a = [4, 3, 1, 2, 6];
quickSort(a, 0, a.length - 1);
console.log(a);

function quickSort(arr, start, end) {
  if (start < end) {
    let pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }
}

function partition(arr, start, end) {
  let random = Math.floor(Math.random() * (end - start) + start);
  swap(random, end);
  let pIndex = start;
  let value = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < value) {
      swap(i, pIndex);
      pIndex++;
    }
  }
  swap(pIndex, end);
  return pIndex;
  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}
