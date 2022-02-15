/* 
function sortArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log(i);
    let pIndex = i;
    let value = arr[pIndex];
    while (pIndex > 0 && arr[pIndex - 1] > value) {
      arr[pIndex] = arr[pIndex - 1];
      pIndex--;
      console.log(arr);
    }
    arr[pIndex] = value;
    console.log(arr);
  }
}
 */

/* 
[ 5, 4, 2, 1, 3 ]
1
[ 5, 5, 2, 1, 3 ]
[ 4, 5, 2, 1, 3 ]
2
[ 4, 5, 5, 1, 3 ]
[ 4, 4, 5, 1, 3 ]
[ 2, 4, 5, 1, 3 ]
3
[ 2, 4, 5, 5, 3 ]
[ 2, 4, 4, 5, 3 ]
[ 2, 2, 4, 5, 3 ]
[ 1, 2, 4, 5, 3 ]
4
[ 1, 2, 4, 5, 5 ]
[ 1, 2, 4, 4, 5 ]
[ 1, 2, 3, 4, 5 ] 
*/

let a = [5, 4, 2, 1, 3];
console.log(a);
sortArray(a);
console.log(a);

// function sortArray(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     console.log(i);
//     let pIndex = i;
//     let value = arr[pIndex];
//     while (pIndex > 0 && arr[pIndex - 1] > value) {
//       arr[pIndex] = arr[pIndex - 1];
//       pIndex--;
//       console.log(arr);
//     }
//     arr[pIndex] = value;
//     console.log(arr);
//   }
// }
