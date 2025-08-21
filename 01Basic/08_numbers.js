// Numbers and Maths!!;
const score = 400;

const Balance = new Number(100);
console.log(Balance);


// 1. Tostrings;
console.log(Balance.toString().length);

// 2. toFixed();
console.log(Balance.toFixed(2));


// 3. Precision
const otherNumber = 22.8955;
console.log(otherNumber.toPrecision(2));


// 4. toLocalStrings
const hundreds =  1000000;
console.log(hundreds.toLocaleString("en-IN")); // give us commans 


// 5. Math();
// console.log(Math());


// 6. Absolute Value abs();
console.log(Math.abs(-4)); // 4;

// 7. Round() it will round the number;
console.log(Math.round(5.9));//6


// 8. ceil top numbers;
console.log(Math.ceil(4.2));

// 9. floor;
console.log(Math.floor(4.2));


// 10 min;
console.log(Math.min(5,2,4,6));

// 11 .Max;

// 12 Random;

console.log(Math.random()* 10);

// Getting number between 10 to 20;
let min = 10;
let max = 20;
const result = Math.floor(Math.random() * (max - min + 1) + min);
console.log(result);




