
// Write a piece of code that will write numbers from 100 to 0 to the console, 
// but in steps of 10; so 100, 90, 80... etc.

/*
let num = 100;
while(num > 0) {
  console.log(num);
  num -= 10;
}
  */


// Modify the previous program so that it asks the user
// for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).

let maxValue = Number(prompt("Input the first number "));
let minValue = Number(prompt("Input the second number"));

console.log(!Number.isNaN(maxValue));
console.log(!Number.isNaN(minValue));

if(!Number.isNaN(maxValue) && !Number.isNaN(minValue) && maxValue > minValue) {
  for (let n = maxValue; n > minValue; n -= 10) {
    console.log(n);
  }
} else {
  console.log("not a number");
}
