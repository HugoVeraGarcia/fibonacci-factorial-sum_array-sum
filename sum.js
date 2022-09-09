function sum(n) {
  if (n > 0) {
    return n + sum(n - 1);
  }
  return n;
}
console.log(sum(4));
