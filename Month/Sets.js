const listOfNumbers = [1,2,3,5,5,5,6, 6]
const mySet = new Set(listOfNumbers);
console.log( typeof mySet);

// For adding the vlaues to the Object;
mySet.add("Apple");
mySet.add("Banana");
mySet.add("Pineapple");
mySet.add("Orange");
mySet.add("Graps");

// For checking if object have particular propertis;
console.log(mySet.has("Apple"));



// And how to delete the value;
mySet.delete("Banana");


// clear all the propertis;
// mySet.clear();

// console.log(mySet);


// For iterating  over the ;

console.log("==================");


for(let values of mySet)
{
    console.log(values);
    
}


// Create a set name (letters);
// add ("a", "b", "c", ) as propperties; 
// Iterate over through;

const Letters = new Set();
Letters.add("a");
Letters.add("b");
Letters.add("c");



// Iterate thrrough the object;

for(let lime of Letters)
{
    console.log(lime);
    
}





