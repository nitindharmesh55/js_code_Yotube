
// Destrutring mixers;
const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    emails: "john.doe@example.com",
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
    hobbies, scores:{math, science, history},
    emails,
},} = data;

console.table({
    name, age, city, country, hobbies, math, science, history, emails
})


const {products:[product1, product2, product3]} = data;
console.table([product1, product2, product3]);

const {settings:{
    darkMode,notifications:{email, sms, push},language
}} = data;

console.table({darkMode, email, sms, push, language})