console.log("External Script");
document.querySelector("p").style.color = "red";
// Strings
/*
String
Number
BigInt
undefinded
Null 
boolean
object 
array( object);
function
Inbuilt objects like date();



*/
let myString = "This is a string";
myString = "This is another string";
myString = `This is a string is enclosed in back ticks`;
console.log(myString.length);
console.log(myString[1]);
let myNumber = 20;
myNumber = 20.5;
myNumber = -20.5;
myNumber = "my string" * 2;
console.log(myNumber);
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;
Number.MAX_SAFE_INTEGER;
const x = BigInt(Number.MAX_SAFE_INTEGER);
console.log(x);
console.log(x + 1);
let x; //undefined
x = null;
Symbol();
typeof x;
const person = {
  name: "Siva",
  age: 20,
  job: "web developer",
};
const people = ["Siva", "Bob", "Lilly"];
typeof person;
typeof people;
function sayHi() {
  console.log("hi");
}
typeof sayHi;
new Date();
new Date.getDate();
new Dage.getMonth();
