const map = new Map();
const keyone = "Name";
const keyTwo  = "age";
const keyThree = function(){
    console.log(`hey this is ${this.name}`)
};

// map.set("name of key or data type", "value for the key");

map.set(keyone, "Nitin");
map.set(keyTwo, 22);
map.set(keyThree, keyThree)
map.get(keyThree)


// getting all the keys 
map.keys(); // all the keys 


map.values()// get all the values;

// map.size()// get size of the object

for(let [key, value]of map)
{
    console.log(`${key} ---  ${value}`);
    
}


// Get the mapkeys;

for(let key of map.keys()){
    console.log(key);
    
}




// console.log(map);

for(let value of map.values()){
    console.log(value);
    
}

console.log("========================================================================================================")


// Create a new map;
// 2. set these properties {a, b, c};
// 3. Set these value {1, 2 , 3};
// 4. get "a" from that map;
// 5. check the size of the that map;
// 6. Delete the properties "b" then check the size;

const newTime = new Map();
const a = "a";
const b = "b";
const c = "C";

newTime.set(a, 1);
newTime.set(b, 2);
newTime.set(c, 3);


// Getting the value of a;
console.log(newTime.get(a));

console.log("got the value of the map");

// Check the size of the map;
console.log(newTime.size);

// Deleting the b;
newTime.delete(b);

console.log(newTime.size);

console.log(newTime);



// Iterating over through the keys of map objectl

for(let keyss of newTime.keys())
{
    console.log(keyss);
    
}


// Iterating over throguh the values;
for(let valuess of newTime.values())
{
    console.log(valuess);
    
}