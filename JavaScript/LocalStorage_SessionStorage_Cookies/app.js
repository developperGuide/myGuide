// LocalStorage

// localStorage.setItem(key,value);
localStorage.setItem("name" , "bob");

// localStorage.getItem(key)
let local = localStorage.getItem("name");
console.log(local);

// localStorage.removeItem(key)
localStorage.removeItem("name");

// ---------------------------------------------------------------

// sessionStorage
// sessionStorage.setItem(key,value);
sessionStorage.setItem("name" , "john");
sessionStorage.setItem("name" , "test");

// localStorage.getItem(key)
let session = sessionStorage.getItem("name");
console.log(session);

// localStorage.removeItem(key)
// sessionStorage.removeItem("name");

// ---------------------------------------------------------------

//Cookies
// set cookie

 let cookie1 = document.cookie  = "name=danisha; expires=" + new Date(2020,0,1).toUTCString();

// NEVER expires
let cookie2 = document.cookie  = "name=soobhen; expires=" + new Date(9999,0,1).toUTCString();

console.log(cookie1);
console.log(cookie2);