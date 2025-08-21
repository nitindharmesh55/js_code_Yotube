let Villan = ["Zeldris", "Madara","Obitio","Akaza"];
let heros =  ["Meliodas", "Naruto", "Sasuke", "Tanjiro"];

// If we push one array to another array it just create another array inside the original array;
// Villan.push(heros);

// if we cancate one array with another array it will concate but doesnt chaange the exixting array;

const allHeros = Villan.concat(heros);
console.log(allHeros);


// SpredOperator give induvidial elements!

let newheros = [...Villan, ...heros];
console.log(newheros);


let AnotherArray = [1,2,3,[4,5,6], 7, [6,7], [4, 5]];

let realAnotherArray = AnotherArray.flat(Infinity);
console.log(realAnotherArray);


// Check if the array or not;
console.log(Array.isArray("Nitin"));

// Createing array ;
console.log(Array.from("Nitin"));



console.log(Array.from({Name:"Nitin"}));// it cannot create the array;


// 
let score1 = 100;
let score2 = 200;
let score3 = 300;
let scoreArray = Array.of(score1, score2, score3)
console.log(scoreArray);


// give more attention to the ISArray and From and Of Array propertirs!
