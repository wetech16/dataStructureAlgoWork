// function sortArray(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let hole = i;
//     let value = arr[i];
//     while (hole > 0 && arr[hole - 1] > value) {
//       arr[hole] = arr[hole - 1];
//       hole--;
//     }
//     arr[hole] = value;
//   }
// }
let a = [5, 4, 2, 1, 3];
sortArray(a);
console.log(a);

function sortArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    let value = arr[index];
    while (index > 0 && arr[index - 1] > value) {
      arr[index] = arr[index - 1];
      index--;
    }
    arr[index] = value;
  }
}
