// The Document Object Model

// document object
console.log(document);
console.log(typeof document);

// ----------------------------------------------------------

// document properties
console.log(document.location);
console.log(document.URL);
// and so on...
// ----------------------------------------------------------

// document methods
// document.getElementById();
// document.getElementsByClassName();
// and so on...

// ----------------------------------------------------------

// Querying the DOM

// Grab the first p tab
let query = document.querySelector("p");
console.log(query);
// ----------------------------------------------------------

// Grab by class
// let query2 = document.querySelector(".text-div");
// console.log(query2);

// Grab by class
let query2 = document.querySelector("div.text-div");
console.log(query2);
// ----------------------------------------------------------

// querySelectorAll
let queryAll = document.querySelectorAll(".para");
console.log(queryAll);

// Cycle though the node list
queryAll.forEach(paraArgs => {
  console.log(paraArgs);
});

// ----------------------------------------------------------

// querySelector - grabs a single element
// querySelectorAll - grabs multiple elements

// Note: We cannot use the forEach method on HTMLCollection to loop through it

// ----------------------------------------------------------

// get element by id
// document.getElementById

const get1 = document.getElementById("container");
console.log(get1);

// get element by class
// document.getElementsByClassName

const get2 = document.getElementsByClassName("container_2");
console.log(get2);
// get element by tag name
// document.getElementsByTagName
const get3 = document.getElementsByTagName("h2");
console.log(get3);

// ----------------------------------------------------------

// Overrides to a text
const headings = document.querySelector("h2");
// headings.innerText =  "Hi Danisha";

// Append to a text
headings.innerText += " Hi Danisha";

// ----------------------------------------------------------

const allHeadings = document.querySelectorAll("p");

// allHeadings.forEach(all => {
//   console.log(all.innerHTML);
//   all.innerText += " new text";
// });

// ----------------------------------------------------------

// fetch div with class content
const content = document.querySelector(".content");

//Array of people
const people = ["mario", "luigi", "yoshi"];

// Cycle through array + output in an html template
people.forEach(person => {
  content.innerHTML += `<p> ${person} </p>`;
});

// ----------------------------------------------------------

// reference to element we want to change
// get first ancor tag on the html
const link = document.querySelector("a");

// get and set attribute
// GET Attribute method
// we want the href attribute from a link
console.log(link.getAttribute("href"));

// set attribue
//  syntax --- > link.setAttribute('what attribute', 'which value you want to place in the href attribute');
link.setAttribute("href", "https://www.google.com");
console.log(link.getAttribute("href"));

// change text of a href element
link.innerText = "This is google seach engine..";

// ----------------------------------------------------------
// FORM error green or red

const message = document.querySelector(".error");

console.log(message);

console.log(message.getAttribute("class"));

message.setAttribute("class", "success");

console.log(message.getAttribute("class"));

message.setAttribute("style", "color:green");

// ----------------------------------------------------------

// STYLE conflicts
// we cannot add a style in our html and js at the same time

// solution - we use the style property

const title = document.querySelector(".title");

console.log(title.style);

console.log(title.style.color);

title.style.backgroundColor = "grey";

title.style.padding = "100px";

// update color
title.style.color = "red";

title.style.fontSize = "26px";

// delete a style
title.style.fontSize = "";

// ----------------------------------------------------------

// Error + Successss

const messageContent = document.querySelector("#contentMsg");
console.log(messageContent.classList);

// add & remove classes
messageContent.classList.add("errorMsg");
// messageContent.classList.remove("errorMsg");

// add & remove classes
messageContent.classList.add("successMsg");
// messageContent.classList.remove("successMsg");

// ----------------------------------------------------------
// Query all p elements
// Cycle through
// Success be green
// Error be red
const challenge = document.querySelectorAll("article");

challenge.forEach(challenge => {
  // console.log(challenge.innerText); // does not show hidden elements
  // console.log(challenge.textContent); // show hidden elements

  // includes -- if a string has a certain words of phrase
  if (challenge.textContent.includes("error")) {
    challenge.setAttribute("class", "errorMsg");
  } else if (challenge.textContent.includes("success")) {
    challenge.setAttribute("class", "successMsg");
  } else {
    challenge.setAttribute("class", "none");
  }
});

// ----------------------------------------------------------
// add classes to class
const getElement = document.querySelector(".getElement");
getElement.classList.toggle("testttt");
