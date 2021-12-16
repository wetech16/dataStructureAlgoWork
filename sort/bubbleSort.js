function sortArray(arr) {
  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        swap(k, k + 1);
      }
      sum++;
    }
  }
  console.log(sum);
}

let a = [1, 43, 2, 5, 3, 1];
sortArray(a);
console.log(a);
