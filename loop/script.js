// for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop

let count1 = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//Do-While Loop

let count2 = 0;
do {
    console.log(count);
    count++;
} while (count < 5);

// For...of Loop

const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

//For...in Loop

const person = {
    name: "John",
    age: 30,
    profession: "Developer"
};
for (const key in person) {
    console.log(key + ": " + person[key]);
}