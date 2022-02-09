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

let a = [4, 2, 1, 3];
console.log(a);
sortArray(a);
console.log("sorted", a);

function sortArray(arr) {
  for (let j = 0; j < arr.length; j++) {
    console.log(j);
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1);
        console.log(arr);
      }
    }
  }

  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}
