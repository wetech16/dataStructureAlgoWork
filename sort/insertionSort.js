function sortArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    let hole = i;
    let value = arr[i];
    while (hole > 0 && arr[hole - 1] > value) {
      arr[hole] = arr[hole - 1];
      hole--;
    }
    arr[hole] = value;
  }
}
let a = [5, 1, 2, 4, 3];
sortArray(a);
console.log(a);
