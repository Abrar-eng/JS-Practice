# What is Array?

An array is a fundamental data structure in JavaScript used to store a collection of values. These values can be of any data type, including numbers, strings, objects, or even other arrays. Arrays provide a way to group and organize data, making it easier to work with collections of items.
Here's an explanation of arrays in JavaScript with some example code:

### Creating an Array
```js
// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Creating an array of strings
const fruits = ["apple", "banana", "cherry"];
```
### Accessing Elements
```js
console.log(numbers[0]); // Outputs: 1
console.log(fruits[1]);  // Outputs: "banana"
```
### Modifying Elements
```js
numbers[2] = 99;      // Replaces 3 with 99
fruits[0] = "orange"; // Replaces "apple" with "orange"
```
### Array Methods
```js
//push(): Adds one or more elements to the end of an array.

fruits.push("grape"); // Adds "grape" to the end of the 'fruits' array
```
```js
//pop(): Removes and returns the last element of an array.

const lastFruit = fruits.pop(); // Removes and returns "cherry"
```
```js
//length: Property that returns the number of elements in an array.

const numElements = numbers.length; // Returns 5
```
```js
//forEach(): Iterates through each element of an array and executes a function for each element.

numbers.forEach(function(number) {
  console.log(number);
});
```
```js
//map(): Creates a new array by applying a function to each element of an existing array.

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
```

# What is Callback Function?

A callback function, often referred to simply as a "callback," is a function passed as an argument to another function in JavaScript. Callbacks are a fundamental concept in JavaScript and are widely used in asynchronous programming, event handling, and other scenarios where you want to execute a function after a specific task or event has completed.

Here are the key characteristics and uses of callback functions,

1. Passing Functions as Arguments
2. Asynchronous Operations
3. Event Handling
4. Error Handling

Here's a simple example of using a callback function
```js
// Define a function that takes a callback as an argument
function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Task completed!");
    // Call the callback function
    callback();
  }, 1000);
}

// Define a callback function
function callbackFunction() {
  console.log("Callback executed!");
}

// Call the function with the callback
doSomethingAsync(callbackFunction);
```


