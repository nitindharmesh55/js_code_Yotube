function user(name, age, work)
{
    return{
        name:name,
        age:age,
        work:work,
        intro:()=>{
            console.log(`hey my name is ${this.name} and i'm ${this.age} years old now and also i'm a ${this.work}`);
            
        }
    }
}
const nitin = user("Nitin", 22, "Programmer");
console.log(nitin.intro());


// Challanges:
// 1. 
let  a = 10;
let b = 20;
let c = 30;

const obj = {a, b, c};
console.log(obj);


// 
const lib = {
    sum:(a, b)=>{
        return a + b;
    },
    mul:(a, b)=>{
        return a * b;
    }
}
console.log(lib.sum(10,20));
console.log(lib.mul(25,5));


const getPersionES6 = (name, age, height) => { return {name, age, height}};
const Nile = getPersionES6("Nile", 20, "165cm");
console.log(Nile);



// 1. create a function name(multiply) with 2 parameters(a, b) which will
// multily the parameter value;
// 2. Provide 1 as the default valuae to parameter "b";

function multiply(a, b = 1){
    return a * b;
}
console.log(multiply(10));


let array = [10,20];
let array2 = array;

array2[0] = 100;
console.log(array);


