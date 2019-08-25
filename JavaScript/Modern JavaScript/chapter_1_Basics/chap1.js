// Variables
let variable_1 = "";

// Constant
const constant_1 = "";

// Data Types

//Number
let number = 10;

//String
let string = "hello world";

//Boolean
let scoreDefault = true;

// Includes
let movie = "The Founder {MacDonalds}";
console.log("INCLUDES: " + movie.includes("F"));
console.log("INCLUDES: " + movie.includes("A"));
console.log("INCLUDES: " + movie.includes("a"));

// String

// Convert to String
let num1 = 100;
num1 = String(num1);
console.log("Converted to a string -> " + num1);

// Convert to Number
let num2 = "200";
num2 = Number(num2);
console.log("Converted to a number -> " + num2);

//string concatination

let firstName = "danisha";
let lastName = "auckbaraullee";
let fullName = firstName + " " + lastName;
console.log("My full name is : " + fullName);

// getting characters
let characters = "I love sunshine";
console.log(characters[0]); // output: I

// length
console.log(characters.length);

//string methods

let convertToUpperCase = characters.toUpperCase();
let convertToLowerCase = characters.toLowerCase();

console.log(convertToUpperCase);
console.log(convertToLowerCase);

//indexOf
let email = "danisha661@live.co.uk";
console.log(email.indexOf("@"));

//lastIndexOf
console.log(email.lastIndexOf("a"));
console.log(email.lastIndexOf("k"));

//slice
let sentence_1 = "I love labrador";
console.log(sentence_1.slice(0, 10));

//substring
let sentence_2 = "I love lemon jui  ce";
console.log(sentence_2.substr(1, 5));

//replace
let sentence_3 = "I love front-end development";
console.log(sentence_3.replace("e", "a"));

// Maths Operators -- B I(indices i.e. **) D M A S
// + - / * %
// ++
// e.g. likes++ (plus 1)
// --
// e.g. likes-- (minus 1)

//Template String
const movieName = "Steve Job -- Founder of Apple Inc.";
const movieActor = "Steve Job";
const movieDuration = "2 hours";

let result = `I love the movie (${movieName}) by actor ${movieActor}. Duration of the movie is: ${movieDuration}`;
console.log(result);

// Array
let fruits = ["coconut", "banana", "papaya"];

console.log(fruits[0]);
console.log(fruits);

// Array Methods

//length
console.log(fruits.length);

// indexOf
console.log("The index of banana is " + fruits.indexOf("banana"));

//join
let joinArray = fruits.join(" & ");
console.log("I love: " + joinArray);

//concat
console.log("New array updated : " + fruits.concat(["peach", "apple"]));

//push -- Add
console.log("Push  -> " + fruits.push("strawberry"));
console.log("Push  -> " + fruits.push("berries"));

console.log(fruits);

//pop -- Delete

console.log("Pop  -> " + fruits.pop());
console.log("Pop  -> " + fruits.pop());
console.log(fruits);

// Comparisons

// > , <, =, !=, !==, !=== , &&, ||

// loose
// ==

// strict -- compare type and value
//  ===
//typeof
let typeof_1 = 250;
let typeof_2 = "Hey!!";
let typeof_3 = true;

console.log(typeof typeof_1);
console.log(typeof typeof_2);
console.log(typeof typeof_3);
