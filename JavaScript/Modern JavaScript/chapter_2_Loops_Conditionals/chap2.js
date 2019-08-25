// For Loop
for (let i = 0; i < 5; i++) {
  console.log("No. " + i);
}

// Array
const arrayList = ["car", "watch", "football", "chocolates"];

// Loop through Array
for (let i = 0; i < arrayList.length; i++) {
  // console.log(i); // get the index
  // console.log(arrayList[i]); //get the values
  let html = `
        <div class='card'>
            ${arrayList[i]}
        </div>
    `;
  console.log(html);
}

// While loop
j = 10;
while (j < 15) {
  console.log("No. " + j);
  j++;
}

const cars = ["Bmw", "Mercedes", "Hyundai"];

let c = 0;
while (c < cars.length) {
  console.log(cars[c]);
  c++;
}

// do..while loop
// syntax
// do {
//     statement
//     i++;
// } while (condition)

//If statement
// If .. else .. elseif
// Switch

// Ternary Operator

// If ... else

let name = "danisha";
let checkName = name == "danisha" ? "yes my name is danisha" : "no";
console.log(checkName);

// If ... elseif ... else
// Syntax: var variable = (condition) ? (true block) : ((condition2) ? (true block2) : (else block2))

let hobby = "playing";

let checkHobby =
  hobby == "playing"
    ? "loves playing..."
    : hobby == "eating"
    ? "loves eating ..."
    : "null";
console.log(checkHobby);
