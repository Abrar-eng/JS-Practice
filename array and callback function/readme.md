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




