// Specifications
// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// Create a Class(JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet:
// Hunger(1 - 10 scale)
// Sleepiness(1 - 10 scale)
// Boredom(1 - 10 scale)
// Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

///Start game prompt when click Adopt Pet Button

$("#start").on("click", function () {
  let name = prompt("What is your name?");
  alert(
    `Hi ${name}! Name your pet in the input below, then it's time to go meet your new family member!!!`
  );
});

class Pet {
  constructor(name, age) {
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = age;
    this.name = name;
  }
}
// figure out how to name pet what the user enters into prompt//

const Baby = new Pet("Tank", 5);
const Adult = new Pet("Boots", 10);
const Elder = new Pet("Big Bird", 15);

console.log(Baby, Adult, Elder);

// end of game ?
// if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
//   console.log("Game over!");
//}

//https://stackoverflow.com/questions/17433557/how-to-save-user-input-into-a-variable-in-html-and-js

function getUserName() {
  var nameField = document.getElementById("nameField").value;
  var result = document.getElementById("result");

  if (nameField.length < 3) {
    result.textContent = "Username must contain at least 3 characters";
    //alert('Username must contain at least 3 characters');
  } else {
    result.textContent = "Your pet's name is: " + nameField;
    //alert(nameField);
  }
}
var subButton = document.getElementById("subButton");
subButton.addEventListener("click", getUserName, false);

function hide() {
  let div = document.getElementyById("subbutton");
  div.style.display = "none";
}

function timer() {
  var sec = 300;
  var timer = setInterval(function () {
    document.getElementById("countdown").innerHTML = "00:" + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

timer();

// This timer works, but it is counting down FROM. Need a timer to count down from a specified number

//https://www.digitalocean.com/community/tutorials/js-building-countdown-timer

// function countdownTimer() {
//   const difference = +new Date("2020-10-01") - +new Date();
//   let remaining = "Time's up!";

//   if (difference > 0) {
//     const parts = {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / 1000 / 60) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };

//     remaining = Object.keys(parts)
//       .map((part) => {
//         if (!parts[part]) return;
//         return `${parts[part]} ${part}`;
//       })
//       .join(" ");
//   }

//   document.getElementById("timer").innerHTML = remaining;
// }

// countdownTimer();
// setInterval(countdownTimer, 1000);

//Button Functions  trying to

$("#feed").click(function () {
  Pet.food += 1;
});

$("#play").click(function () {
  Pet.activity += 1;
});

$("#sleep").click(function () {
  Pet.sleep += 1;
});

class Person {
  constructor(name, age, eyes, hair) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
  }
  setHair(hairColor) {
    this.hair = hairColor;
  }
  greet(otherPerson) {
    console.log("hi " + otherPerson + "!");
  }
  jump() {
    console.log("weeee!");
  }
}

class SuperHero extends Person {}
const superman = new SuperHero("Clark Kent", 30, "blue", "black");
console.log(superman);
