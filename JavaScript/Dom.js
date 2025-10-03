// Callback functions ;

// function logGet(){
    // console.log("Get");
    
// }
// logGet();

// function logSet(callback){
//     setTimeout(()=>{
//         console.log("Set");
//         callback();
//     }, 2000);
// }

// logSet(redyGo);

// function redyGo(){
//     console.log("Redy");
//     console.log("Go");
    
// }
// 




function fetchData(callback){
    setTimeout(()=>{
        const data = [1, 2 , 3 , 4];
        callback(data);
    })
}

function Process(data){
    console.log(data.map(items => items * 2));
    
}

fetchData(Process);



// Promises;
const channel = new Promise((resolve, reject) => {
    const iswrong = true;
    if (iswrong) {
        reject("Something went wrong");
    } else {
        resolve("Nitin-Rajdharmesh");
    }
});

channel.then((data)=>[
    console.log(data)
    
]).catch((error) =>{
    console.log(error);
    
})



function logGet(){
    console.log("Get");
    
}
logGet();

function logSet(callback){
 
}

const promise = new Promise((resolve, reject) =>{
   setTimeout(()=>{
        console.log("Set");
        resolve();
    }, 2000);
})

promise.then((data) =>{
    redyGo();
}).catch((erroor)=>{
    console.log("fuck this");
    
})

// logSet(redyGo);

function redyGo(){
    console.log("Redy");
    console.log("Go");
    
}





// New Promise ;

const FetchData = new Promise((resolve, reject) => {

    const arr = [1, 2 , 3 , 4 , 5];
    resolve(arr);
    reject(new Error("Something Went Wrong"));
});

FetchData.then((data) =>{
    return data.map((ind) => ind * 2);
}).then((data) =>{
    console.log(data);
}).catch((error) =>{
    console.log(error);
});

console.log("Nitin");