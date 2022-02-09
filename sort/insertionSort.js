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
let a = [5, 4, 2, 1, 3];
console.log(a);
sortArray(a);

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
