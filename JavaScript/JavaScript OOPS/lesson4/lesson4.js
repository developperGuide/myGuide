// CREATE a class

class User {
  // Constructor function - construct our object,
  //it creates them
  // fire whenever we want to create a new User object
  // for e.g. this is how it connects to it ,
  // though the User() -- var user1 = new User();
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
// The 'new' keyword
// creates a new empty object
// take object and set the value of 'this' inside the new empty object

var userOne = new User("danisha auckbaraullee", 22, "danisha@gmail.com");
var userTwo = new User("fardin auckbaraullee", 23, "fardin@gmail.com");

//Accessing the object properties
console.log(userOne);
console.log(userOne.name);
console.log(userOne.age);
console.log(userOne.email);

console.log(userTwo);
console.log(userTwo.name);
console.log(userTwo.age);
console.log(userTwo.email);
