let score = "32";
console.log(typeof score);


// To convert the score varible which is string to number;
let validInNumber = Number(score);
console.table(typeof([score, validInNumber]));


// "33" == 33;
// "33abx" == "NAN" type of is number;
// true == 1 and false == 0;

let isloggedIn = 1;

let booleanisLoggein = Boolean(isloggedIn);

console.log(typeof booleanisLoggein);

// 1 === true and 0 === false;
// "" => false;
// "nie" => true;


let secondNumber = 33;
let stringNumber = String(secondNumber);
console.log(stringNumber);


// Operations start from here!!
let value = 3;
let negValue = -value;
// console.log(negValue);

console.log(value + value);
console.log(value - value);
console.log(value * value);
console.log(value / value);
console.log(value ** value);


// Concat!!

let str1 = "hello";
let str2 = 'Nitin';
console.log(str1 + " " + str2);


console.log("1" + 2) // "12";
console.log(1 + "2") //3;
console.log("1" + 2 + 2);

console.log(+true);

let num1, num2, num3;
num1 = num2 =  num3 = 2 + 2;


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// Prefix and Postfix increament;
let x = 3;
const y = x++;

console.log(`x:${x}, Y:${y}`);

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);