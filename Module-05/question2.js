// Write a program that will print out (to the console) consecutive integers 10 times, 
// in two-second intervals (start with the number 1). 
// Use the functions setInterval, clearInterval and setTimeout.

let counter = 0;
let intervalID = setInterval(() => {
  counter++;
  console.log(`Executado ${counter} vezes`);
  if (counter === 10) {
    clearInterval(intervalID); 
  }
}, 2000);
