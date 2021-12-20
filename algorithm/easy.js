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
  for (let i = 0; i < a.length; i++) {
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

swapTwoElements(0, 1, [1, 2]);
