//Alert a Message

window.alert("Hello, World!");

// Open a New Window

window.open("https://www.facebook.com");

//Location

console.log(window.location);

//Manipulate Location

window.location.href = "https://www.twitter.com";

//Set Timeout

window.setTimeout(function() {
    window.alert("Delayed alert!");
}, 1000);

//Event Handling 

window.onload = function() {
    alert('The page is loaded')
  };

//GlobalScope

var x = 5;
console.log(window.x) 
console.log(x) 

//Storage

setsorage.setItem('Hasan', 'Abrar') //Key and value: string
setstorage.getItem('Hasan') // Key : string









