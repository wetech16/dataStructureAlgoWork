let str = "acbabda";
console.log(validPanlindom(str));

function validPanlindom(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      return isValid(i, j - 1, s) || isValid(i + 1, j, s);
    }
  }
  return true;
}

function isValid(i, j, s) {
  while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
