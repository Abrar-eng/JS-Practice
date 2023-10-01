//String methods

const single = 'single quotes'
const double = "double quotes"
const backtick = `backtick`
// console.log(single, double, backtick);

const char = single.charAt(0).toUpperCase()
// console.log(char);

const browserType = "mozila"
if(browserType.includes("zila")){
    //console.log("found Zila");
}else{
    //console.log("no zilla found");
}

if(browserType.startsWith("zila")){
    //console.log("start withzilla");
}else{
    //console.log("mozilla not found");
}

if(browserType.endsWith("zila")){
    //console.log("ends with zila");
}else{
    //console.log("mozilla  not found");
}

const tagline = "MDN - Resources for developers, by developers";
//console.log(tagline.indexOf("developers"));
//console.log(tagline.indexOf("R"));


// Number Problems
// Integer and floating Numbers
let myIntNum = 562;
let myFloatNum = 0.562;

// String in Numbers
let num1 = 5;
let num2 = 10;
// console.log('The result is ',  num1 + num2); // The result is  15

let x = 456; // without decimal
let y = 2.65; // with decimal

// Number with 15 digits will be readalbe in javascript
let readalbeNum = 999999999999999;
let notReadalbeNum = 99999999999999999; // result for this 100000000000000000


// console.log(notReadalbeNum);

// Floating point arithmatic is not always accurate
let p = .1;
let q = .2;
// console.log(p + q); // result is 0.30000000000000004

// console.log(x);





// Math Problems
let numOne = 5;
let numTwo = 10;

let addition = numOne + numTwo;
let subtraction = numOne - numTwo;
let multification = numOne * numTwo;
let divition = numOne / numTwo;

// Increment and Decrement

let incementNum = 5;
incementNum ++; 
incementNum += 10; 

let decrementNum = 10;
decrementNum --; 
decrementNum -=5; 
// console.log(incementNum);

// comparison

let comparisonZero = numOne ==  numTwo;
let comparisonOne = numOne !==  numTwo;
let comparisonTwo = numOne >  numTwo;
let comparisonThree = numOne < numTwo;
let comparisonFour = numOne >= numTwo;
let comparisonFive = numOne <= numTwo;

console.log(comparisonThree);


