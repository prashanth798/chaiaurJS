const num = 56000.78946;

const num1 = new Number(300)

// console.table([num, num1]);

// console.log(123.8789.toFixed(3)); //500.000    123.870

// console.table([num.toFixed(3), num.toPrecision(4), num.toLocaleString("en-IN")]);

console.table([Math.min(3,4,5),
    Math.max(8,88,894,6,4),
    Math.floor(4.9),
    Math.ceil(3.1),
    Math.random(),
    Math.round(3.6)
]);

max = 20;
min = 10;

console.log(Math.floor((Math.random())* (max - min +1)+min));