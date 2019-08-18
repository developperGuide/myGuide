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
