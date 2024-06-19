/* JavaScript Notes */

const MyArray = ["I", "love", "chocolate", "frogs"];
const madeAsString = MyArray.join(" ");
console.log(madeAsString);

/* Functions */

function hello(name = "User") {
  console.log(`Hello ${name}`)
}

hello("Eric");
hello();


/* Anonymous function takes a function as a parameter */

(function () {
  alert("hello");
});

/*addEventListener looks for an event and a function */

function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);


/* instead of defining logKey(), pass an anonymous function as the second parameter */

textBox.addEventListener("keydown", function(event) {
  console.log(`You pressed "${event.key}".`)
});

/* Arrow functions are also options as an alternative */

textBox.addEventListener("keydown", event => 
  console.log(`You pressed "${event.key}".`)
);

const TextBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

TextBox.addEventListener("keydown", event => {
  output.textContent = `You pressed "${event.key}".`;
});