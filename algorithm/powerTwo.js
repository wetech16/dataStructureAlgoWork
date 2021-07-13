function main(n) {
  function isPowerTwo(n) {
    let i = 0;
    let total = 0;
    if (n === 0) return false;
    while (total < n) {
      total = Math.pow(2, i);
      i++;
    }
    return total == n;
  }
  for (let i = 1; i <= n; i++) {
    if (isPowerTwo(i)) console.log("POWER");
    else console.log(i);
  }
}
main(10);
