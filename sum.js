function sum(n) {
  if (n > 0) {
    return n + sum(n - 1);
    /* const sumReturn = sum(n-1);
        const sumNumbers = n + sumReturn;
        return sumNumbers; */
  }
  return n;
}
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
