/*
    Write three functions with the names add, sub, and mult, which will take two numerical arguments. 
    The functions are to check if the given arguments are integers (use Number.isInteger). 
    If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. 
    The functions are to be declared using a function statement.
*/

let add = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
let sub = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
let mult = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

/*
    Write an action function that will take the callback function as its first argument and the other two arguments as numbers. 
    As a callback function, you will be able to pass one of the three functions from the previous task. 
    The action function will call the callback function passed to it and will return the obtained result. 
    The callback function will accept the second and third arguments from the action call.
*/

let action = (callback, a, b) => {
    return callback(a, b);
}

console.log(action(add, 12, 10));
console.log(action(sub, 12, 10));
console.log(action(mult, 10, 10.1));