let fruits = ["apple", "Banana", "cherry", "grapes"];
let x = fruits[2];
console.log(x);
let y = fruits[4]; //Error brcause 4th index is empty
console.log(y);
fruits.push("orange"); //Resolve Error by adding 4th item in array
y = fruits[4];
console.log(y); //After adding 4th item in array,it will give value to 4th indes
// If we change index of cherry then
fruits.splice(2, 0, "guava");
let z = fruits[2];
console.log(z); //Now at index 2 is Guava but previously cherry was at this indexing
fruits.splice(1, 1); //Here by deleting new value, previous array is returned.
z = fruits[2];
console.log(z);
export {};
