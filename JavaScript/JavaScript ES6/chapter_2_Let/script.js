// Global Variable
var x = 10;
if (x > 5) {
  //   var x = 5;
  // Local Variable
  let x = 5;
  console.log("inside " + x);
}

console.log("outside " + x);
console.log(x);

// Example 2

// Fetch all fruits, li
var fruits = document.getElementsByTagName("li");

// Loop thorgh the fruits
// When click on one li, it display the index of the fruit in the console
// replave var by let as var ignore the code that follows after
// var -- global
//  let -- local for the loop only
for (let i = 0; i < fruits.length; i++) {
  fruits[i].onclick = function() {
    console.log(i);
  };
}

// console.log(i); // use var in the loop to be able to see the result
