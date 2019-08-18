// Object Literals

// Create an object
var userOne = {
  email: "test@gmail.com",
  name: "Test1",
  // login: function () {

  // }
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  }
};

console.log(userOne.name);

// Test in console as such
// userOne
// userOne.login();
// userOne.logout();

// Updating Object Properties

userOne.name = "Test2";

// Different ways of accessing the properties

userOne.email;

// OR

//This way of accessing properties is useful when what we are accessing is dynamic
userOne["email"];
userOne["name"] = "Danisha";

// The value of prop may update
// var prop = "name";
// userOne[prop]; // will give you the name

var prop = "email";
userOne[prop]; // will give you the email

//adding property to the object
userOne.age = 25;
userOne;

//add methods to object
// userOne.calculateAge = function () {}