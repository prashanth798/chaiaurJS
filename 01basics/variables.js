console.log("Hello World!")
let studentName = "Prashanth";
var rollNo = 909894;
const mark = Symbol("100")
let height;
let isLoggedIn = null;

console.table([studentName, rollNo, mark, height, Boolean(isLoggedIn)]);
console.log(mark)

/*
Data types:
get the type of var using typeof 


Number
String 
bigInt
null
undefined

OBJECT
*/

let myObj = {
    name: "Opera",
    age: 25
}

const myFunc = function () {
    console.log("Hello World");
}

console.log(typeof myFunc);