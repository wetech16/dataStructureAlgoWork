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

function sortArray(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
}
