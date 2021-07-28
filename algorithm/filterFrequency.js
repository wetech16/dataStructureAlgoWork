// function main(frequency, filterFrequency) {
//   let filterArr = [];
//   let pass = true;
//   for (let i = 0; i < frequency.length; i++) {
//     for (let j = 0; j < filterFrequency.length; j++) {
//       if (
//         frequency[i] < filterFrequency[j][0] ||
//         frequency[i] > filterFrequency[j][1]
//       ) {
//         pass = false;
//       }
//     }
//     if (pass) filterArr.push(frequency[i]);
//     pass = true;
//   }
//   return filterArr;
// }

function main(frequency, filterFrequency) {
  let firstIndex = 0;
  let secondIndex = Number.MAX_SAFE_INTEGER;
  filterFrequency.forEach((item) => {
    if (item[0] > firstIndex) firstIndex = item[0];
    if (item[1] < secondIndex) secondIndex = item[1];
  });

  let filterArr = [];
  frequency.forEach((item) => {
    if (item >= firstIndex && item <= secondIndex)
      filterArr.push(item);
  });

  return filterArr;
}

let frequency = [8, 9, 11, 12, 16, 18, 19];
let filterFrequency = [
  [8, 13],
  [9, 15],
  [11, 13],
  [7, 14],
  [12, 100],
];
console.log(main(frequency, filterFrequency));
