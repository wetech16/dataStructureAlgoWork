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

swapTwoElements(0, 1, [1, 2]);
