const someNumbers = [5, 8, 1, 9, 3, 12, 7];

let min = someNumbers[0];  
let max = someNumbers[0]; 

for (let i = 1; i < someNumbers.length; i++) {
  if (someNumbers[i] < min) {
    min = someNumbers[i];
  }

  if (someNumbers[i] > max) {
    max = someNumbers[i];
  }
}

console.log("Мінімальне значення: " + min);
console.log("Максимальне значення: " + max);
