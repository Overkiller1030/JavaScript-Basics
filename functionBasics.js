function add7(a){
  return (a + 7);
}

let num1 = prompt("Enter a number to add 7 to it", "");
console.log(`${+num1} + 7 = ${add7(+num1)}`);  // Correct

function multiply(a, b){
  return a * b;
}

let num2 = prompt("Enter a number", "");
let num3 = prompt("Enter another number to multiply", "");

console.log(`${+num1} * ${+num2} = ${multiply(num1, num2)}`);

function capitalize(x) {
  x = x.toLowerCase();
  return x.at(0).toUpperCase() + x.slice(1);
}

let string = prompt("Enter a string", "");
capitalize(string);
console.log(`Your string is ${string}. Your string with only the first
letter capitalized is ${capitalize(string)}`);

function lastLetter(x){
  return x.at(-1);
}

let string2 = prompt("Enter another string", "");
console.log(`The last letter of your string is: ${lastLetter(string2)}`);