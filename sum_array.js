let total = 0;

const sum_array = (data) => {
  //
  n = data.length;
  if (n > 0) {
    total += data.pop();
    sum_array(data);
  }
  return total;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum_array(data));
