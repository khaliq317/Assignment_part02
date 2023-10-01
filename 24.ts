// Test for equality and inequality

let x = "khaliq";
let y = "adnan";
console.log(x==="khaliq");
console.log(x===y);

// Tests using lowerCase function
console.log(x==="Khaliq");        // Here capital K
console.log(x==="khaliq");

// Numerical tests
let a = 10;
let b = 12;
console.log(a===b);
console.log(b===12);

//Greater than equal to and less than equal to
console.log(a>=b);
console.log(a<=b);

// Using "and" and "oR" operator
console.log(a<b && b>a);
console.log(a>b && b>a);
console.log(a<b || b>a);
console.log(a>b || b==a);

// Test whether an item is in array
let arr = ["apple","banana","cherry"];
console.log(arr.includes("apple"));

// Test whether an item is not an array
console.log(arr.includes("grapes"));

