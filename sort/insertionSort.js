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

function sortArray(a) {
  for (let i = 1; i < a.length; i++) {
    let setIndex = i;
    let value = a[i];
    console.log(a);
    while (setIndex > 0 && a[setIndex - 1] > value) {
      a[setIndex] = a[setIndex - 1];
      setIndex--;
      console.log(a);
    }
    a[setIndex] = value;
  }
}
