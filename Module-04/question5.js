
// Write a program that first writes out all these numbers on the console, 
// then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), 
// then only those that are larger than 10 and at the same time smaller than 60.

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
console.log(numbers);

for(let number of numbers) {

  if(number % 2 == 0) {
    console.log(`even number: ${number}`)
  }
}
console.log("======")
for(let number of numbers) {
  if (number > 10 && number < 60) {
    console.log(`that are larger than 10 and at the same time smaller than 60: ${number}`);
  }
}
