// In this tutorial we are using google chrome canary
// as it supports a lot of es6 features
// otherwise we can use babel compiler

const pi = 3.142;
console.log(pi); // global version of const pi
//   pi = 10; // cannot change, will have an error

// area of a circle

function calcArea(r) {
  const pi = 10; //local version of const pi above
  console.log(pi);
  console.log("the area is: " + pi * r * r);
}
calcArea(5);
