/*
  Display the message "Bingo!" when the number is greater than 90 but less than 110,
  otherwise display the message: "Miss". Use the if statement.
*/

/*
let num = prompt("Input a number:");
if (num > 90 && num < 110) {
  alert("Bingo!!!");
} else (
  alert("Miss")
);
*/

// Rewrite the code from the previous task, 
// replacing if with a ternary conditional operator.
let numTern = prompt("input a number");
numTern > 90 && numTern < 110 ? alert("Bingoo") : console.log("Miss");

