let myDate = new Date();
// console.log(myDate);


// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());



let myNewDate = new Date("2002-10-10");
console.log(myNewDate.toDateString());


let timeStapm = Date.now();

console.log(timeStapm);

let compare = timeStapm -  myNewDate.getTime();
console.log(Math.floor(compare / 1000));




// Getting Dates; 
const DatesTime = new Date();
console.log(DatesTime.getDay() + 1);
console.log(DatesTime.getFullYear());
console.log(DatesTime.getHours());





