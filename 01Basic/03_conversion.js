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