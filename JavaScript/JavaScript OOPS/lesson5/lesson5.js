class Student {
  //Only for Object Properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Methods
  login() {
    console.log(this.name + " just logged in");
  }

  logout() {
    console.log(this.name + " just logged out");
  }
}

var student1 = new Student("Danisha", 22);
var student2 = new Student("Fardin", 23);

student1.login();
student1.logout();

student2.login();
student2.logout();
