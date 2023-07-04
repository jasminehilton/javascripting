let sum = function(num1, num2) {
  return num1 + num2;
};

const args = process.argv.slice(2);

sum(Number(args[0]), Number([1]));
