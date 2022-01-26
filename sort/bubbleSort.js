// function sortArray(a) {
//     for (let i = 0; i < a.length; i++) {
//       // a.length -1 also works
//       for (let k = 0; k < a.length - 1 - i; k++) {
//         if (a[k] > a[k + 1]) {
//           let temp = a[k];
//           a[k] = a[k + 1];
//           a[k + 1] = temp;
//         }
//       }
//     }
//   }

let a = [1, 43, 2, 5, 3, 1];
sortArray(a);
console.log(a);

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
