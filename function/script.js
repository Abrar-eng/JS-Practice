// Define a function named "greet" that takes a parameter "name"
function greet(name) {
    // Inside the function, concatenate the name with a greeting message
    var greeting = "Hello, " + name + "!";
    
    // Use the "console.log" method to print the greeting to the browser's console
    console.log(greeting);
    
    // Return the greeting
    return greeting;
}

// Call the "greet" function with a name argument and store the result in a variable
var result = greet("Abrar");

// Display the result in an alert dialog
window.alert(result);