const name = "Nitin";
const repeCount = 50;

// console.log(name + repeCount);
console.log(`Hello my Name is ${name} and my repo count is ${repeCount}`)

const getName = new String("NitinDharmesh");
console.log(getName.__proto__);

console.log(getName.toUpperCase());

console.log(getName.charAt(2));

console.log(getName.indexOf('t'));

const newString = getName.substring(0, 5);
console.log(newString);

const anotherString = getName.slice(0, 4);
console.log(anotherString);


const newStringone = "               Nitin            ";
console.log(newStringone);

console.log(newStringone.trim());


const urlName = "nitin@google.com";
console.log(urlName.replace("google", "Microsoft"));

console.log(urlName.includes("nitin"));

console.log(getName.split(" ", 5))