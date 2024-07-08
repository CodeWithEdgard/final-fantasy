
let op = prompt("Input the Operations: one of +, -, *, / ");
let first = Number(prompt("Input the first number:"));
let second = Number(prompt("Input the second number:"));

let result;
while(op || first || second != "q") {
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
}
