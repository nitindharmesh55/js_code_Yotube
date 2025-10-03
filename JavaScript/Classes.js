const pOne = Promise.resolve("Everything is Fine");
const pTwo = Promise.resolve("I Love You Nitin");
const pThree =  new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("Evevrything Worked!");
      
    }, 4000)
});

const Promisess = Promise.allSettled([pOne, pTwo, pThree]);

Promisess.then((data)=>{
  console.log(data);
  
})

// Promise.all;
// Promise.allSetteld;