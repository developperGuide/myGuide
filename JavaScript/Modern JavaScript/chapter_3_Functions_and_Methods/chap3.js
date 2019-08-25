// Function declarion - when we dont store it in a variable
// Note - it can be declared anywhere on the script file and access anywhere
// globally -- can acess before declaration

heyFunction();
function heyFunction() {
  console.log("hey im here human..");
}
heyFunction();

// Function Expression - when we store a function inside a variable
// cannot access and then declared

// myFunction(); // - callig it here will generate an error in your console

const myFunction = function() {
  console.log("hello world ...");
};
myFunction();

// Arguments & Parameters
// \n - change line
// \t - tab

const customer = function(name, email, password) {
  console.log(
    `\t Customer Name is: ${name} \n \t Email is : ${email} and \n \t Password is : ${password}`
  );
};
customer("Sam", "samuel@gmail.com", "Samxyz@123");

// Arrow Function

// no arguments
const myArrowFunction1 = () => {};

// 1 argument
const myArrowFunction2 = arguments => {};

// more than 1 arguments
const myArrowFunction3 = (arg1, arg2) => {};

// Normal function vs Arrow Function

// -------------------------------------
const myNormalFunction = function() {
  return "hello world";
};
console.log(myNormalFunction());
// -------------------------------------

// -------------------------------------
const myArrowFunc = () => "hello arrow function";
console.log(myArrowFunc());
// -------------------------------------

// Example 1)

const calculateBill = function(text, products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return text + total;
};
console.log(calculateBill("Customer danisha bill is: ", [10, 20, 15], 0.2));

//  |
//  |   Convert to arrow function
//  |
//  V

const calculateBill2 = (text2, product2, tax2) => {
  let total2 = 0;
  for (let j = 0; j < product2.length; j++) {
    // total2 += product2[j] + (product2[j] * tax2);
    total2 += product2[j] + product2[j] * tax2;
  }
  return text2 + total2;
};

console.log(calculateBill2("Customer fardin bill is: ", [100, 200, 300], 0.2));

// ------------------------------------------------------

// Methods
let password = "testpassword";
let toUpper = password.toUpperCase();
console.log(toUpper);

// ------------------------------------------------------

// Callback
// callback function - pass a function as an argument
// passing a function in another function

const myCallBackFunc = calculateProduct => {
  let product = 100;
  calculateProduct(product);
};

myCallBackFunc(function(product) {
  console.log("Product Total is: " + product);
});

//  |
//  |   Convert to arrow function
//  |
//  V

myCallBackFunc(product => {
  console.log("Product Total is: " + product);
});

// ------------------------------------------------------
// ForEach

const devices = ["iphone", "samsung", "HTC", "Huawei"];

devices.forEach(function(devices) {
  console.log("Top Mobile brand :" + devices);
});

//  |
//  |   Convert to arrow function
//  |
//  V
console.log("---------------------------------");

// forEach Syntax
// arrayname.forEach(
//     function (arrayname, arrayindex) {
//         console.log();
//     }
// );

devices.forEach((devices, index) => {
  console.log("Top Mobile brand : " + index + " " + devices);
});

// ------------------------------------------------------
// Foreach and Callback mixed together

console.log("---------------------------------");

const arrayList = ["mouse", "keyboard", "speakers"];

const myFunc = (arrayList, index) => {
  console.log(`Accessorie name is: ${arrayList} and index is ${index}`);
};

arrayList.forEach(myFunc);

// ------------------------------------------------------
let ul = document.querySelector(".customerList");

const customerList = ["sam", "jack", "tom", "harry"];

let html = "";
customerList.forEach(function(customerList) {
  // create html template
  // html = `<li style='color:purple;'>${customerList}</li>` + html;
  html += `<li style='color:purple;'>${customerList}</li>`;
});

//  |
//  |   Convert to arrow function
//  |
//  V

console.log("---------------------------------");

customerList.forEach(customerList => {
  // create html template
  html += `<li style='color:purple;'>${customerList}</li>`;
});

console.log(html);
ul.innerHTML = html;
