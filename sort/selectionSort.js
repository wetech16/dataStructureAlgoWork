function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[min]) {
        min = k;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}
let a = [1, 3, 5, 2, 4, 1];
sortArray(a);
console.log(a);
