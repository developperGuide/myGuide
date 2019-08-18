// BEFORE THE CLASS KEYWORD WAS IMPLEMENTED IN JS

// Create constructor function
// This represents our User class
function User(name, age) {
  //properties
  this.name = name;
  this.age = age;
  this.online = false; // set as default for all users

  // methods
  // this.login = function() {
  //   console.log(this.name + "has logged in");
  // };
}

// Methods
// The prototype for our class User
// Create a prototype for our class User -- custom method
User.prototype.login = function() {
  this.online = true;
  console.log(this.name + " has logged in");
  return this; // for method chaining
};

User.prototype.logout = function() {
  this.online = false;
  console.log(this.name + " has logged out");
  return this; // for method chaining
};

// Object
var test1 = new User("danisha", 22);
console.log(test1);
test1.login();

//  ------------------------------------------------------------

// Prototype Inheritences

// This is how you extends without using CLASS
// This is a REST parameter those ... (3 DOTS)
// It takes these parameters u defined in your Admin as an Array
// Put it in an array
// Inherit
function Admin(...args) {
  // Array
  // args is going to be an array of the properties we defined in our new Admin
  // console.log(args);

  // To call User, you can use either .call or .apply method
  // 1. User.call(this);
  // 2. User.apply(this);

  // Explanation
  // User.apply(this, [arg1, arg2]);
  // User.apply(this, [name, age]);
  // this - User properties + Object Admin
  // arg1 - name
  // arg2 - age
  User.apply(this, args);
  // Add custom properties only for this Admin
  this.role = "super admin";
}

//Inherits methods from User to admin
// Admin having its own prototype methods
// Or
// Object.setPrototypeOf(Admin.prototype, User.prototype);
Admin.prototype = Object.create(User.prototype);

//Adding extra method on the Admin and not User

// Syntax
// Admin.prototype.yourFunctionName = function(){}

Admin.prototype.deleteUser = function(cust) {
  //Method filter with an Arrow function included

  // Using Arrow function
  custArrayList = custArrayList.filter(u => {
    //compare username in array with username input inside the method deleteUser
    return u.name != cust.name;
  });

  // Normal Javascript
  // custArrayList = custArrayList.filter(function myFunction(u) {
  //   //compare username in array with username input inside the method deleteUser
  //   return u.name != cust.name;
  // });
  // console.log("user has been deleted");
};

var admin = new Admin("admin", 20);
console.log(admin);

admin.login().logout();

var custArrayList = [test1, admin];

// ------------------------------------------------------------------

// * IMPORTANT NOTE ---- Using the CLASS keyword all of this things are done automatically
// -- Here we are doing everthing manually
// In short
// Using Class - > Automatically create prototype
// Not using Class -> Manually create prototype
