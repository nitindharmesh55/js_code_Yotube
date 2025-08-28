let stringArray = ["a", "b", "c", "d", "e"];
let numberArray = [1, 2, 3, 4, 5];
let booleanArray = [true, false];
let objectArray = [{}, {}, {}];

let mixedArray = ["A", 1, true, {}];


// Creating the Array

class myArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
        
    }



    get(item)
    {
         return this.data[item]
    }


    pop()
    {   if(this.length === 0) return undefined;
        let lastItem = this.data[this.length - 1 ];
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }


    shift()
    {
        // Getting firstIndex;
        let firstItem = this.data[0];

        // Re-indexing the array;

          for (let i = 0; i < this.length; i++)
          {
            this.data[i] = this.data[i + 1];
          }
          delete this.data[this.length - 1];
          this.length--;
          return firstItem;

    }

    deleteByIndex(item)
    {
       for (let i = item; i < this.length; i++)
       {
        this.data[i] = this.data[i];
       }
       delete this.data[this.length - 1];
       this.length--;
    }
};
const newArray =  new myArray();
newArray.push("Banana")
newArray.push("pineApple")
newArray.push("Orange")
newArray.push("Graps")
newArray.push("Apple");
newArray.pop();
console.log(newArray.get(1));
// newArray.pop();
// newArray.pop();
// newArray.pop();
console.log("=======================================")

console.log(newArray.shift());

console.log("==========================================")

console.log(newArray);

console.log("========================================");
newArray.deleteByIndex(2);
console.log(newArray);


