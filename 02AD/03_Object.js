// Singleton:- created by constructor;
// Object Literals;


// Constructor;
// Object.create;- this is the constructor;

// Literal;
// const jsUser = {}

const symm = Symbol("Key1");
const jsUser = {
    name:"Nitin",
    age:22,
    [symm]:"Key1",
    location:"Japan",
    email:"nitin@google.com",
    islogged: false
};

// Acessing the values of object!
console.log(jsUser["name"]);
console.log(jsUser.age);
console.log(jsUser.email);
console.log(jsUser[symm]);


// Changin value of object;
jsUser.email = "Ntin@gpt.com";

// Locking object;

// Object.freeze(jsUser);


// Adding function;
jsUser.greeting = function(){
    console.log(`hello ${this.name} js User`);
    
}

jsUser.greeting();

