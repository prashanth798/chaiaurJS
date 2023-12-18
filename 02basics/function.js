function addNum(num1, num2){
    return num1 + num2;
}

console.log(`The result is : ${addNum(2,3)}`);

function returnPrice(...num){
    console.log(num);
    return num
}

console.log(returnPrice(1,2,3,4,5));


let obj = {
    name: "Prashanth",
    email : "prashanth70998@gmail.com"
}

function objFunc(obj){
    return obj.email;
}

console.log(objFunc(obj));