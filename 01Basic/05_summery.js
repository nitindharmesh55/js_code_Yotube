// Primity Datatype == call by value;

// 1. string
// 2. number
// 3. Boolean
// 4. Null
// 5. undefined
// 6. symboll
// 7. bigint


// Non Primitive Data type = reference type ;
// 1. Arrays
// 2. Objects
// 3. Functions



// Examples; 
// 1. is javascript is dynamic or static;
// Javascript is dynamically typed 
// What is dynamically :- is one where type of variable checked during runtime!


// const isloggedIn = true;  Boolean;

// symboll

const id = Symbol('123');
console.log(id);


const hero = ["shaktiman","spiderman", "pokiemon"];
const heros = {
    name:"Superman",
    age:32,
    height:"188cm",
    city:"Ctypton",
    race:"Alien"
}

const myfunction = function(){
    console.log("Hello! world");
}
myfunction();

console.log(typeof id)
console.log(typeof myfunction);
