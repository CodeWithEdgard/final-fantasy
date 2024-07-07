alert("alert");

let decision = window.confirm("confirm");
let message = decision ? "Deleting data" : "Cancelled";
console.log(message);

let name = window.prompt("What is your name?")
name = name ? name : "annon";
console.log(name);