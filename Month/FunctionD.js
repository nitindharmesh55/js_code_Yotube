const person = {
    name:"John Wick",
    age:30,
    country:"America"
}

function printPersonInfo({name, age, country}){
    console.log(`Name:${name}`);
    console.log(`Age:${age}`);
    console.log(`Country:${country}`);
}
printPersonInfo(person);

// Nested Destructuring;

const songs = [
    {name:"Titanic", Singer:"Celion deon", Year:1999},
    {name:"Perfect", Singer:"Ed-sheeran", Year:2022},
    {name:"Love", Singer:"Nitin", Year:2026}
];

const [{Singer}, {Singer:seond}] = songs;
console.table({Singer, seond});








// Destrutring mixers;
const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};


// Extracting 

const {user:{
    name, age, address:{city, country},
    hobbies, score:{math, science, history},
    email,
},} = data;

console.table({
    name, age, address, city, country, hobbies, score, math, science, history, email
})