// a = [2, 4, 1, 5, 3];
// mergeSort(a);
// console.log(a);

// function mergeSort(a) {
//   function merge(leftArr, rightArr, arr) {
//     let i = 0,
//       j = 0,
//       k = 0,
//       nl = leftArr.length,
//       nr = rightArr.length;
//     while (i < nl && j < nr) {
//       if (leftArr[i] < rightArr[j]) {
//         arr[k] = leftArr[i];
//         i++;
//         k++;
//         console.log(arr);
//       } else {
//         arr[k] = rightArr[j];
//         j++;
//         k++;

//         console.log(arr);
//       }
//     }
//     while (i < nl) {
//       arr[k] = leftArr[i];
//       i++;
//       k++;
//       console.log(arr);
//     }
//     while (j < nr) {
//       arr[k] = rightArr[j];
//       j++;
//       k++;
//       console.log(arr);
//     }
//   }
//   console.log(a);
//   let n = a.length;
//   if (n < 2) return;
//   let mid = Math.floor(n / 2);
//   let left = [];
//   let right = [];
//   for (let i = 0; i < mid; i++) {
//     left[i] = a[i];
//   }
//   for (let i = mid; i < n; i++) {
//     right[i - mid] = a[i];
//   }
//   mergeSort(left);
//   mergeSort(right);
//   merge(left, right, a);
// }

let a = [2, 4, 1, 3, 5];
mergeSort(a);
console.log(a);

function mergeSort(arr) {
  let n = arr.length;
  if (n < 2) return;
  let left = [];
  let right = [];
  let mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    left[i] = arr[i];
  }
  for (let i = mid; i < n; i++) {
    right[i - mid] = arr[i];
  }
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);

  function merge(leftArr, rightArr, a) {
    let i = 0,
      j = 0,
      k = 0;
    let nl = leftArr.length;
    let nr = rightArr.length;
    while (i < nl && j < nr) {
      if (leftArr[i] < rightArr[j]) {
        a[k] = leftArr[i];
        i++;
        k++;
      } else {
        a[k] = rightArr[j];
        j++;
        k++;
      }
    }
    while (i < nl) {
      a[k] = leftArr[i];
      i++;
      k++;
    }
    while (j < nr) {
      a[k] = rightArr[j];
      j++;
      k++;
    }
  }
}
