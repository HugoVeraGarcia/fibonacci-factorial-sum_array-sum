let resultado = 1;
function factorial(n) {
  if (n !== 0) {
    resultado *= n;
    n -= 1;
    factorial(n);
  }
  return resultado;
}

console.log(factorial(10));
