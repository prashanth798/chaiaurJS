//singleton objects are formed only through constructor

//object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Prashanth",
    email: "prashanthkk798@gmail.com",
    mobile: 7907935664,
    dob: "31-07-1998",
    [mySym] : "myKey"
}

const user = Object.create(JsUser);
user.name = "Ptrdc"
console.log(user);

// console.log(JsUser[mySym]);

JsUser.greetings = function() {
    console.log(`Hello the user is: ${this.name}`);
}
// ();
JsUser.greetings();


const regularUser =  {
    domain: "google.com",
    fullName: {
        firstname: "abcd",
        lastname : "efgh"
    }
}

console.log(regularUser.fullName.firstname);

//combining 2 objects 

const obj3 = {...JsUser, ...regularUser} 
console.log(Object.keys(obj3)); //these convers the keys or values into an array
console.log(Object.values(obj3));

console.log(regularUser.hasOwnProperty("domain"));
console.log(Object.entries(obj3)); // converst whole object into array
console.log(Object.assign({}, JsUser,regularUser));
console.log(Object.assign( JsUser, regularUser));