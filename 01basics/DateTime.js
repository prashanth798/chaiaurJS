let date = new Date();

let myCreatedDate = new Date("04-09-2023")
console.log(date.toDateString());
console.table([
    date.toDateString(),
    date.toISOString(),
    date.toJSON(),
    date.toLocaleTimeString(),
    myCreatedDate.toLocaleString()
])

console.log(date.getMonth()); //date.getDay()

console.log(date.toLocaleString('default', {
    hour: "numeric" //cntl space will give suggestions for customisation 
}))