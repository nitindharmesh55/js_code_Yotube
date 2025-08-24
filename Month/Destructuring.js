// Destructuring; allows us to unpacks the value from data structure (arrray Object) into separate distinct variables;


// Arrays: destructuring;

const foo = ["one", "two", "three"];
const [a , b , c] = foo;
console.table([a, b, c]);

function fn(){
    return [1, 2];
}


let[omtimus, megatron] = fn();
console.table({omtimus, megatron})

const [love, ...time] = foo;
console.table({love, time})


// ChllangesL

// 1. your task is to use the color array to extract the first
// three values from the colors aarray and assign them to separate variables name colors 1 and color2 color3 
// After log all the values;

const colors  = ["red", "green", "lime", "Yellow", "Orange"];
const [color1, color2, color3, ...color] = colors;
console.table({color1, color2, color3, color});


// Destructuring the object now!!;

function student(name, position, rollNumber){
    return{
        name, position, rollNumber
    }

};

const Nitin = student("Nitin", "First", 25);

const {name, position, rollNumber} = Nitin;
console.table({name, position, rollNumber});

// Your task to use object destrcuting to extract the name , age, and country from the person Object;
// After extracting the properties log each properties values to the conosle;

const person = {
    NName:"Nitin",
    age:22,
    gender:"male",
    country:"japan"
};

const {NName, age, country} = person;
console.table({NName, age, country});

const num = {x:100, y:200};
const {x:num1, y:num2} = num;
console.table({num1, num2});





let { a:p,b:q,...rest} = {a:100, b:200, c:300, d:400};
console.log(p);


// Your task is to extract value from the given object  value be like name ,age, and country properits and from the person object and assign them to separate variable named
// personaname , personAge , personCountry;


const {NName:personName, age:personAge, country:personCountrry} = person;
console.table({personName, personAge, personCountrry})

