class Student {
  //Only for Object Properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.score = 0; // same for all users - default
  }

  // Methods
  login() {
    console.log(this.name + " just logged in");
    return this;
  }

  logout() {
    console.log(this.name + " just logged out");
    return this;
  }

  updateScore() {
    this.score++; //increment score
    console.log(this.name, " score is now ", this.score);
    return this;
  }

  fadeIn() {
    console.log("Faddddeeee innnnn....");
    return this;
  }

  fadeOut() {
    console.log("Fadeeeeeee ouuttt .... ");
    return this;
  }
}

var student1 = new Student("Danisha", 22);
var student2 = new Student("Fardin", 23);

student1.login();
student1.logout();

student2.login();
student2.logout();

//Method Chainning

console.log("--------------------------");
student1.login().logout();

console.log("--------------------------");

student2
  .updateScore()
  .login()
  .logout();


var student3 = new Student("john", 18);
student3.fadeIn().fadeOut();