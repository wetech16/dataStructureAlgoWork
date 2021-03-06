function copyLeftHalfofArray() {
  let array = [1, 2, 3, 4, 5];
  let left = [];
  let mid = Math.floor(array.length / 2);
  for (let i = 0; i < mid; i++) {
    left[i] = array[i];
  }
  console.log(left);
}

function copyRightHalfofArray() {
  let array = [1, 2, 3, 4, 5, 6, 7];
  let right = [];
  let mid = Math.floor(array.length / 2);
  for (let i = mid; i < array.length; i++) {
    right[i - mid] = array[i];
  }
  console.log(right);
}

function swapTwoElements(indexA, indexB, arr) {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
  console.log(arr);
}

function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    let index = i;
    let value = a[i];

    while (index > 0 && a[index - 1] > value) {
      a[index] = a[index - 1];
      index--;
    }
    a[index] = value;
  }
}

function partition(a, start, end) {
  function swap(indexA, indexB) {
    let temp = a[indexA];
    a[indexA] = a[indexB];
    a[indexB] = temp;
  }

  let pivot = a[end];
  let partitionIndex = start;
  for (let i = start; i < end; i++) {
    if (a[i] <= pivot) {
      swap(i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(partitionIndex, end);
  return partitionIndex;
}

// pointers and swap
// public void sortColors(int[] nums) {
//   private void swap(int[] nums, int i, int j) {
//     int t = nums[i];
//     nums[i] = nums[j];
//     nums[j] = t;
//   }
//   int zero = -1, one = 0, two = nums.length;
//   while (one < two) {
//       if (nums[one] == 0) {
//           swap(nums, ++zero, one++);
//       } else if (nums[one] == 2) {
//           swap(nums, --two, one);
//       } else {
//           ++one;
//       }
//   }
// }

swapTwoElements(0, 1, [1, 2]);

/* 
a logic merge of compared arr1 and arr2:
main [ 5, 4 ] [ 1, 3, 2 ] [ 5, 4, 1, 3, 2 ]
[ 5, 4 ] [ 1, 3, 2 ] [ 1, 3, 2, 5, 4 ]
sorted [ 1, 3, 2, 5, 4 ]
 */
function merge(left, right, arr) {
  let ln = left.length;
  let rn = right.length;
  let i = 0;
  j = 0;
  k = 0;
  while (i < ln && j < rn) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < ln) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < rn) {
    arr[k] = right[j];
    j++;
    k++;
  }
  console.log(left, right, arr);
}
