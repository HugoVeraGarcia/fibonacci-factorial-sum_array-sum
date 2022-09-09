let primero = 1;
let segundo = 2;
let fibo = 3;
let total_even = 2;

const fibonacci = (n) => {
  if (fibo < n) {
    fibo = primero + segundo;
    primero = segundo;
    segundo = fibo;
    if (fibo % 2 === 0) total_even += fibo;
    fibonacci(n);
  }
  return total_even;
};

console.log(fibonacci(4000000));
