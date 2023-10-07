What is Function ?

A JavaScript function is a reusable block of code that performs a specific task or a set of tasks. Functions are a fundamental building block of JavaScript and are used to encapsulate and organize code, making it more modular and easier to manage. Functions allow you to group together a sequence of statements into a single unit, which can be invoked (called) multiple times with different inputs or parameters.

Here are some key characteristics and components of JavaScript functions:

1. Function Declaration: 
Functions are typically declared using the function keyword, followed by a name and a pair of parentheses. For example:

function greet() {
    // Function body - contains the code to be executed
    console.log("Hello, world!");
}

2. Parameters: 
Functions can accept parameters (also known as arguments), which are values or variables passed into the function to customize its behavior. Parameters are defined within the parentheses when declaring the function.

function greet(name) {
    console.log("Hello, " + name + "!");
}

3. Function Body: 
The function body is enclosed within curly braces {} and contains the code that defines what the function does when called. This is where the actual work of the function is performed.

4. Return Statement: 
Functions can return a value using the return statement. The returned value can be used elsewhere in your code.

function add(a, b) {
    return a + b;
}

5. Function Invocation: 
To execute a function and trigger its code, you "call" or "invoke" the function by using its name followed by parentheses.

greet("Alice"); // Calls the greet function with "Alice" as the argument
var sum = add(3, 5); // Calls the add function and stores the result in the 'sum' variable

6. Function Scope: 
Functions have their own scope, which means that variables declared inside a function are typically not accessible outside of that function. This helps isolate and protect data within the function.

7. Anonymous Functions: 
Functions can also be defined without a name and are known as anonymous functions. They are often used as arguments to other functions or for creating closures.

var multiply = function(x, y) {
    return x * y;
};

8. Arrow Functions: 
Arrow functions are a concise way to define functions, introduced in ECMAScript 6 (ES6). They have a more compact syntax and handle the this keyword differently compared to regular functions.

const square = (x) => x * x;



