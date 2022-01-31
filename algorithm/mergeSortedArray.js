function merge(nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let indexMerge = m + n - 1;
  while (index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[indexMerge--] = nums1[index1--];
    } else {
      nums1[indexMerge--] = nums2[index2--];
      console.log(index2);
    }
  }
}

let n1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let n2 = [0, 0, 0];
let n = 3;
merge(n1, m, n2, n);
console.log(n1);
