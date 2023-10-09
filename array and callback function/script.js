//creating an array and use a callback function

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a function that squares a number
function square(number) {
  return number * number;
}

// Define a callback function that processes each element of the array
function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function on each element and push the result into the 'result' array
    result.push(callback(arr[i]));
  }
  return result;
}

// Use the 'processArray' function with the 'square' callback
const squaredNumbers = processArray(numbers, square);

// Display the squared numbers
console.log("Squared numbers:", squaredNumbers);