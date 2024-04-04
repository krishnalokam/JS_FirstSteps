// Variables
let num1 = 4;
let num2 = 2;
const num3 = 4.5;
const num4 = -4.5;
const myVar = "A string";
const myVar2 = "Another String";

// Basic Math
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Floating point inaccuracy
console.log(0.1 + 0.2);
console.log(0.2 + 0.4);

// Other operations
console.log(13 % 5);
console.log(4 % 2);
console.log(2 ** 3);

//Incrementing and Decrementing operations
num1++;
console.log(num1);
num1 += 2;
console.log(num1);
num2--;
console.log(num2);
num2 -= 2;
console.log(num2);

num1 = 4;
num2 = 2;

//Comparison operators
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

//NaN
console.log(num1 * "string");

//Infinity
console.log(9_000_000 ** 9_000_000);
console.log(Number.NEGATIVE_INFINITY);

//Math
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.round(6.3));
console.log(Math.round(6.7));
console.log(Math.ceil(6.3));
console.log(Math.floor(6.7));

//Converting Strings
console.log(myVar + myVar2);
console.log(myVar + num1);
console.log("2" + 2);
console.log(parseInt("2") + 2);
console.log(2 + "");
console.log(`${2}`);

//BigInt
let maxInt = BigInt(Number.MAX_SAFE_INTEGER);
console.log(maxInt);
maxInt++;
console.log(maxInt);
maxInt++;
console.log(maxInt);

let bigNumber = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigNumber * 4n);
