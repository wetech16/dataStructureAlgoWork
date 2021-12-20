function randomPartition(a, start, end) {
  function swap(indexA, indexB) {
    let temp = a[indexA];
    a[indexA] = a[indexB];
    a[indexB] = temp;
  }
  function partition(a, start, end) {
    let pivot = a[end];
    let partitionIndex = start;
    for (let i = start; i < end; i++) {
      if (a[i] <= pivot) {
        swap(i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(partitionIndex, end);
    return partitionIndex;
  }

  let random = Math.floor(Math.random() * (end - start) + start);
  swap(random, end);
  return partition(a, start, end);
}

function quickSort(a, start, end) {
  if (start < end) {
    let partitionIndex = randomPartition(a, start, end);
    quickSort(a, start, partitionIndex - 1);
    quickSort(a, partitionIndex + 1, end);
  }
}

let a = [7, 3, 3, 4, 1, 5, 6, 2, 7];
quickSort(a, 0, a.length - 1);
console.log(a);

// var items = [3, 4, 1, 5, 6, 2, 7];
// function swap(items, leftIndex, rightIndex) {
//   var temp = items[leftIndex];
//   items[leftIndex] = items[rightIndex];
//   items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//   var pivot = items[Math.floor((right + left) / 2)], //middle element
//     i = left, //left pointer
//     j = right; //right pointer
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j); //sawpping two elements
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// function quickSort(items, left, right) {
//   var index;
//   if (items.length > 1) {
//     index = partition(items, left, right); //index returned from partition
//     if (left < index - 1) {
//       //more elements on the left side of the pivot
//       quickSort(items, left, index - 1);
//     }
//     if (index < right) {
//       //more elements on the right side of the pivot
//       quickSort(items, index, right);
//     }
//   }
//   return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]
