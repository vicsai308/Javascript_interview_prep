// A callback function is a function passed into another function and executed later.
// Defintion: A function passed as an argument to another function to be executed later

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Bye!");
}

greet("John", sayBye);


// function(num) { ... } is the callback
// forEach() calls it for each item
const numbers = [1, 2, 3];

numbers.forEach(function (num) {
    console.log(num);
});


// Why callbacks are used

// Mostly for:

// 1. async operations (API calls)
// 2. event handling
// 3. array methods
// 4. Timers
