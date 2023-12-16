// Stack primitive
// Heap non primitive

let myName = "Prashanth";
anotherName = myName;

anotherName = "Priya";

// console.log(myName+  "    " + anotherName);

let myObj = {
    name : "Prashanth",
    email: "user@gmail.com"
}

let myObj2 = myObj;

myObj2.email = "user@hotmail.com";

console.table([myName, anotherName, myObj.email, myObj2.email])