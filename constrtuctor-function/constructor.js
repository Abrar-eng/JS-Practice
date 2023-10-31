// Define a constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // Method to display the full name
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

// Create objects using the constructor function
const person1 = new Person("Abrar", "Hasan", 30);
const person2 = new Person("Fahim", "Hasan", 25);

// Access properties and methods of the objects
console.log(person1.firstName); 
console.log(person2.getFullName()); 