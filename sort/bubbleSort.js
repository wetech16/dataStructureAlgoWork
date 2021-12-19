// function sortArray(arr) {
//   function swap(a, b) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr.length - i - 1; k++) {
//       if (arr[k] > arr[k + 1]) {
//         swap(k, k + 1);
//       }
//       sum++;
//     }
//   }
//   console.log(sum);
// }

let a = [1, 43, 2, 5, 3, 1];
sortArray(a);
console.log(a);

function sortArray(a) {
  for (let i = 0; i < a.length; i++) {
    // a.length -1 also works
    for (let k = 0; k < a.length - 1 - i; k++) {
      if (a[k] > a[k + 1]) {
        let temp = a[k];
        a[k] = a[k + 1];
        a[k + 1] = temp;
      }
    }
  }
}
