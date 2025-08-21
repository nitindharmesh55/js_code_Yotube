const tinder = new Object();
tinder.name = "Emily";
tinder.age = "22",
tinder.nationality = "American";
tinder.female = true;
tinder.male = false;

console.log(tinder);

const regularTinder = {
    name: "Amanda",
    age:22,
    info:{
        emailPass:{
            email:"Amanda@google.com",
            password:"Amanda123",
        },
        body:{
            height:"165cm",
            Blood:"O -Ve"
        }

    }
}

// Assess the email;
console.log(regularTinder.info.emailPass);

// Ascess the  body
console.log(regularTinder.info.body);



// Combining two object!!

const obj1 = {1:"A", 2:"B", 3:"C"};
const obj2 = {4:"D", 5:"E", 6:"F"};

const object3 = {...obj1, ...obj2};
console.log(object3);

const obje4 = Object.assign({}, obj1, obj2);
console.log(obje4);
console.log(obj1);


const love = Object.keys(tinder).forEach((index)=>{
    console.log(index);
})

const loveValue = Object.values(tinder);

const Enitrieis = Object.entries(tinder);
console.log(Enitrieis);

// console.log(love);



