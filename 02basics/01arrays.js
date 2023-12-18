const myArr = [1,2,3,4,5];

// console.log(myArr.includes(4));

myArr.push("abc")

myArr.push(10)

myArr.pop()
// console.log(myArr);

myArr.unshift("abcd")
myArr.unshift(12)
myArr.shift()
// console.log(myArr);

const newArr = [12,123,1234]
const newArrString = newArr.join()//this will convert everything to string
myArr.push(newArr.join())
// console.log(myArr);

let marvel = ["thor", "IronMan", "spiderman"]
let dc = ["batman", "flash", "superman"]

// console.log(marvel.slice(1,2));   //slice will retuen those elements and will not cg=hange the orginal array
// console.log(marvel);

// console.log((dc.splice(1,2)));// splice will create a new array and remove those elements from the orginal array
// console.log(dc);



// marvel.push(dc)// array inside array scenario
const mergedArr = marvel.concat(dc) //this will merge the Array
const mergedArr1 = [...mergedArr, ...dc]
console.log(mergedArr1);


console.log(Array.isArray("Prashanth"))
console.log(Array.from("Prashnth"));
let a = 100;
let b = 200;
let c= 300;
console.log(Array.of(a,b,c))




