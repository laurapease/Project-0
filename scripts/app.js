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

const Pet1 = new Pet("Tank", 5);
const Pet2 = new Pet("Boots", 5);
const Pet3 = new Pet("Flipper", 1);

console.log(Pet1, Pet2, Pet3);
