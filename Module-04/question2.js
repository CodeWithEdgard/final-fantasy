/*
  Write a simple calculator application. Ask the user for the following input, 
  one by one: two numbers and a character representing a mathematical operation, 
  one of "+", "-", "*", "/". If the user input is valid, calculate the result and 
  show it to the user. If the user input is invalid, display a message that informs 
  the user that an error has occurred.
*/

let op = prompt("Input the Operations: one of +, -, *, / ");
let first = Number(prompt("Input the first number:"));
let second = Number(prompt("Input the second number:"));

let result;

if (!Number.isNaN(first) && !Number.isNaN(second)) {
  switch (op) {
    case ("+"):
      result = first + second;
      alert(result);
      break;
    case ("-"):
      result = first - second;
      alert(result);
      break;
    case ("*"):
      result = first * second;
      alert(result);
      break;
    case ("/"):
      result = first / second;
      alert(result);
      break;
    default: alert("an error has occurred.");
  }
} else (
  alert("this is not a number")
);