//Object literals

// Create Object
let user = {
  //Key : Value
  name: "Danisha",
  age: 22,
  email: "fd@gmail.com",
  hobby: ["playing", "eating", "shopping"]
};

// Output object
console.log(user);

// Output object properties
console.log(user.name);
console.log(user["name"]);

// Modify object propertie's value
user["email"] = "dan@gmail.com";
console.log(user["email"]);

// check the tyoe of user
console.log(typeof user); // return object

// ---------------------------------------------------------------------------

// Add methods to Object
let customer = {
  name: "fardin",
  address: "castel",
  hobby: ["car", "car sport", "programming"],
  //method 1
  login: function() {
    console.log("login user");
  },
  test() {
    console.log("test user");
  },
  //method 2
  logout: function() {
    console.log("logout user");
  },
  favHobby: function() {
    // this  -- refers to our customer object
    // console.log(this.hobby);

    this.hobby.forEach(function(hobby) {
      console.log(hobby);
    });
    // this.hobby.forEach(hobby => {
    //   console.log(hobby);
    // });
  }
};

customer.favHobby();

// ---------------------------------------------------------

let foodLovers = {
  description: "To all of the food lovers in Mauritius",

  // Array of object
  foods: [
    { name: "MCDonalds", location: "Shoprite" },
    { name: "Happy Rajah", location: "Jumbo" },
    { name: "Mug & Beans", location: "Bagatelle" }
  ],

  displayFood() {
    // this.foods.forEach(function(foods) {
    //   console.log(foods);
    // });

    this.foods.forEach(foods => {
      console.log(foods);
    });
  }
};

foodLovers.displayFood();

// -----------------------------------------------------------------------------------

// Math Object
console.log(Math);

let area = 1.223;

console.log(Math.ceil(area));
console.log(Math.floor(area));
console.log(Math.round(area));
console.log(Math.trunc(area));

// random numbers
