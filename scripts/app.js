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

class Pet {
  constructor(name, age) {
    //make scale of 1-10
    // this.hunger =
    //make scale of 1-10
    //this.sleepiness =
    //make scale of 1-10
    //this.boredom =
    this.age = age;
    this.name = name;
  }
}
// figure out how to name pet what the user enters into promppt//
const Baby = new Pet("Tank", 5);
const Adult = new Pet("Boots", 10);
const Elder = new Pet("Big Bird", 15);

console.log(Baby, Adult, Elder);

// end of game ?
// if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
//   console.log("Game over!");
//}

///Start game prompt when click Adopt Pet Button
$("#start").on("click", function () {
  let name = prompt("What is your name?");
  alert(
    `Hi ${name}! Name your pet in the input below, then it's time to go meet your new family member!!!`
  );
});

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
  var div = document.getElementyById("subbutton");
  div.style.display = "none";
}

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
