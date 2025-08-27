// Create an array of student and add five student and
// create function that takes two argument which is allStudent and studentName 
// Iterate through allStudent and find the StudentName;

let allStudent = ["Nitin", "Mike", "Amanda", "Yuki", "Yuri"];
function findStudent(allStudent, studentName)
{
    for(let Student of allStudent)
    {
        if(Student === studentName)
        {
            console.log("Found it!!");
            return 0;
        }
    }
    console.log("Not Found it!!");
    return 1;
    
}
findStudent(allStudent, "Jejus");


// O(n):
let grossires = ["Milk", "Banana", "Eggs", "chicken", "apple"];

const searchItem = (item, gro)=>{
    for(let items of item)
    {
      if( items === gro)
      {
        console.log("Found it");
        return 0;
        
      }
    }

    console.log("Not Foundt");
    return 1;
    
}
searchItem(grossires, "apple");




// O(1): Constant;
const numbers = [1, 2, 3 ,4 , 5];
const getElement = (arr, Element) =>{

    return arr[Element];
}
console.log(getElement(numbers, 2));






// Comparing Paris;

function pairs(arr){
    for(let i of arr)
    {
        for(let i of arr )
        {
            console.log(`Pairs: (${i}, ${j})`);
        }
    }
}

function pairss(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            console.log(`Pairs: (${arr[i]}, ${arr[j]})`);
            
        }
    }
}

pairss(numbers);