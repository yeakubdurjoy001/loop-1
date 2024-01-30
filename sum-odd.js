let sum = 0;

for (let i = 81; i <= 131; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log("The sum of all the odd numbers from 81 to 131 is: " + sum);
