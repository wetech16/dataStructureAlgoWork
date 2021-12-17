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
let a = [5, 6, 2, 4, 3];
sortArray(a);
console.log(a);

function sortArray(a) {
  for (let i = 1; i < a.length; i++) {
    let setIndex = i;
    let value = a[i];
    while (setIndex > 0 && a[setIndex - 1] > value) {
      a[setIndex] = a[setIndex - 1];
      setIndex--;
    }
    a[setIndex] = value;
  }
}
