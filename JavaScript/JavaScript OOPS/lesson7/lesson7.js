// =============
// <USER>
//   Properties
//   Methods
//     | ---- Inherits
//     V
// <ADMIN>
//   Will have all properties and methods of class URLSearchParams
//   Can create own methods
// =============

class User {
  //Properties
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  // Methods
  login() {
    console.log(this.username + "has logged in");
    return this;
  }

  logout() {
    console.log(this.username + "has logged out");
    return this;
  }
}

// Class Inheritence
// extends User (blueprint/template)
// does not require a constructor

class Admin extends User {
  deleteUser(cust) {
    // The fiter method
    // --allows us to cycle though each
    // --element inside the array and then filter
    // --one of them or more of them out of
    // --the array

    //Method filter with an Arrow function included
    custArrayList = custArrayList.filter(c => {
      //compare username in array with username input inside the method deleteUser
      return c.username != cust.username;
    });
  }
}

// Objects
var customer1 = new User("John123", "password");
var customer2 = new User("Samarah", "password");
var customer3 = new User("Micheal", "password");
var admin = new Admin("admin", "admin123");

//Array
var custArrayList = [customer1, customer2, customer3, admin];

// delete a user from array
admin.deleteUser(customer1);
console.log(custArrayList);
