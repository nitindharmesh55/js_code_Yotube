const settingCog = document.querySelector('.fa-gear');
const dateDiv = document.querySelector('.Date');
const Love = document.querySelector(".love")
const dateBtn = document.getElementById("dateGet");
const Age = document.querySelector(".ageContent");
const AgeInput = document.querySelector("#dateInput");

// Adding on the Display;

const Year = document.getElementById("Year");
const Month = document.getElementById("Month");
const Day = document.getElementById("Day");
const Minute = document.getElementById("Minute");
const Second = document.getElementById("Second");


// Update The Age; 
const upDate = () => {
  const DateValue = AgeInput.value;

  localStorage.setItem("DOB", AgeInput.value);
  const DateOfBirth = new Date(DateValue);
  const Today = new Date();

  const diff = Today - DateOfBirth; // difference in milliseconds

  const ageYear = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const ageMonth = Math.floor((diff / (1000 * 60 * 60 * 24 * 30.44)) % 12);
  const ageDay = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30.44);
//   const ageHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const ageMinute = Math.floor((diff / (1000 * 60)) % 60);
  const ageSecond = Math.floor((diff / 1000) % 60);

  Year.innerHTML = ageYear;
  Month.innerHTML = ageMonth;
  Day.innerHTML = ageDay;
//   Hour.innerHTML = ageHour;
  Minute.innerHTML = ageMinute;
  Second.innerHTML = ageSecond;
};

const storeAge = localStorage.getItem("DOB");
if(storeAge){
    AgeInput.value = storeAge;
    upDate();
     Age.classList.remove("hide");
    Love.classList.add("hide")
        setInterval(upDate, 1000); // updates every second
}




settingCog.addEventListener('click', () => {
    dateDiv.classList.toggle('hide');

});

dateBtn.addEventListener("click", () => {

    Age.classList.toggle("hide");
    Love.classList.toggle("hide");


    upDate();
        setInterval(upDate, 1000); // updates every second
})



