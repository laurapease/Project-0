// background image if i toggle to a diffent img for sleep: img src="https://images-na.ssl-images-amazon.com/images/I/71ut-GH-boL._AC_SX522_.jpg"'
//   );

//charmander: img src "https://thumbs.gfycat.com/ShyImperturbableAlpaca-max-1mb.gif"

// charmeleon img src "https://66.media.tumblr.com/tumblr_ma4fpfD6Tu1rfjowdo1_500.gif"

//charlizard img src "https://66.media.tumblr.com/tumblr_ma4fsg8aDZ1rfjowdo1_500.gif"

// ball art img when 'PLAY' is clicked for animation: https://www.pinclipart.com/picdir/middle/420-4200946_rainbow-beach-ball-pixel-art-sphere-clipart.png

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
    `Hi ${name}! Meet your new pet! We call them Charmander, but you can name them whatever you'd like. First, click on 'Adopt Charmander.' Then name your pet. The timer will start once you've added your pet's name!!`
  );
});

// FEED BUTTON

//SOURCE: https://stackoverflow.com/questions/17433557/how-to-save-user-input-into-a-variable-in-html-and-js

function getUserName() {
  let nameField = document.getElementById("nameField").value;
  let result = document.getElementById("result");

  if (nameField.length < 3) {
    result.textContent = "Username must contain at least 3 characters";
    //alert('Username must contain at least 3 characters');
  } else {
    result.textContent = "Your pet's name is: " + nameField;
    //alert(nameField);
  }
}

let hunger = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let sleepiness = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let boredom = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let name;

let sleep = function () {
  Charmander.sleepiness -= 1;
  console.log("Nap time");
};
// wake() {
//   console.log("Wakey wakey!");
// }

let play = function () {
  Charmander.boredom -= 1;
  console.log("What fun!");
};

class Pet {
  constructor(name, hunger, sleepiness, boredom, age) {
    this.name = name;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.age = age;
  }
}

let Charmander = new Pet((name = "Charmander"), hunger, sleepiness, boredom, 0);
// let Abra = new Pet(name, hunger, sleepiness, boredom, 0);
// let Charmander = new Pet(name, hunger, sleepiness, boredom, 0);

console.log(Charmander);

const chooseName = document.getElementById("subButton");

chooseName.addEventListener("click", petAge);
let ageLevel = document.getElementById("age-level");
function petAge() {
  ageLevel.textContent = Charmander.age;
}
chooseName.addEventListener("click", petHunger);
let hungerLevel = document.getElementById("hunger-level");
function petHunger() {
  hungerLevel.textContent = Charmander.hunger;
}

chooseName.addEventListener("click", petBoredom);
let boredomLevel = document.getElementById("boredom-level");
function petBoredom() {
  boredomLevel.textContent = Charmander.boredom;
}

chooseName.addEventListener("click", petSleepiness);
let sleepinessLevel = document.getElementById("sleepiness-level");
function petSleepiness() {
  sleepinessLevel.textContent = Charmander.sleepiness;
}

//TIMER

function timer() {
  var sec = 200;
  var timer = setInterval(function () {
    document.getElementById("timer").innerHTML = "Timer: " + sec + " seconds";
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }

    if (sec === 140) {
      alert("Time to evolve to Charmeleon! Click the Charmeleon button!");
      console.log("Time to evolve to Charmeleon! Click the Charmeleon button!");
    }
    if (sec === 80) {
      alert("Time to evolve to Charlizard! Click the Charlizard button!");
      console.log("Time to evolve to Charlizard! Click the Charlizard button!");
    }
    if (sec % 10 === 0) {
      Charmander.hunger += 1;
      petHunger();
    }
    if (sec % 10 === 0) {
      Charmander.sleepiness += 1;
      petSleepiness();
    }
    if (sec % 20 === 0) {
      Charmander.age += 1;
      petAge();
    }
    if (sec % 10 === 0) {
      Charmander.boredom += 1;
      petBoredom();
    }
  }, 1000);
}

//BUTTONS

// FEED BUTTON DECREASES HUNGER BY 1 WHEN CLICKED

let feedButton = document.getElementById("feed");
function feedPet() {
  Charmander.hunger = Charmander.hunger - 1;
  console.log("Yum!");
  hungerLevel.textContent = Charmander.hunger;
}
feedButton.addEventListener("click", feedPet);

// SLEEP BUTTON DECREASES TIREDNESS BY 1 WHEN CLICKED

let sleepButton = document.getElementById("sleep");
function sleepPet() {
  Charmander.tiredness = Charmander.tiredness - 1;
  console.log("Bedtime!");
  sleepinessLevel.textContent = Charmander.tiredness;
}
sleepButton.addEventListener("click", sleepPet);

// PLAY BUTTON DECREASES BOREDNESS BY 1 WHEN CLICKED

//EXERCSE BUTTON DECREASES BOREDNESS BY 1 AND NCREASES TIREDNESS BY 1 WHEN CLICKED

// RESET GAME BUTTON

$("#reset").click(function () {
  location.reload(true);
  alert("Let's try again!");
});

var subButton = document.getElementById("subButton");
subButton.addEventListener("click", getUserName, false);

//Submit name button dissappears when clicked

$("#subButton").on("click", (event) => {
  // $(event.currentTarget) refers to the '#menu' element that was clicked.
  $(event.currentTarget).hide();
  timer();
});

$("#sleep").on("click", function () {
  $("container").toggleClass("dark");
  // $("#sleep").html("☀️Wake up!☀️");
});

//Would love to make the ipiut field hide when subButton is clicked. Work on that.

//Click on 'Adopt Charmander' button to hatch egg to Charmander

$("#charmander").on("click", () => {
  $("#egg").attr(
    "src",
    "https://thumbs.gfycat.com/ShyImperturbableAlpaca-max-1mb.gif"
  );
});

// Click Charmeleon button to evolve when prompted.

$("#charmeleon").on("click", () => {
  $("#egg").attr(
    "src",
    "https://66.media.tumblr.com/tumblr_ma4fpfD6Tu1rfjowdo1_500.gif"
  );
  return false;
});

//Click Charlizard button to evolve when prompted

$("#charlizard").on("click", () => {
  $("#egg").attr(
    "src",
    "https://66.media.tumblr.com/tumblr_ma4fsg8aDZ1rfjowdo1_500.gif"
  );
  return false;
});

// REFERENCE FOR BUTTONS:

//     <div class="meters" id="hunger">Hunger Level: <span id="hunger-level"></span></div>
//     <div class="meters" id="sleepiness">Tiredness Level: <span id="sleepiness-level"></span></div>
//     <div class="meters" id="boredom">Boredom Level: <span id="boredom-level"></span></div>
//     <div class="meters" id="age">Age: <span id="age-level"></span></div>

//use jquery .fadeToggle to fade in and out a toy when button is clicked

$("#play").click(function () {
  Charmander.boredom = Charmander.boredom - 1;
});

// Potentially use sligeToggle to make the moon rise and fall when sleep is clicked. Also, change opacity so the screen darkens when sleep is clicked. Do the opposite for wake up (or take wake up out if I can set a timer of sorts on this function.
// $('#sleep').on('click', () => {
//     $('#sleep').slideToggle();
// // });

// EXAMPLE 2:
// $(document).ready(function () {
//   // Set background image of a div on click of the button

// Trying to change background when sleep button is clicked

// $("#sleep").click(function () {
//   $(".container").toggleClass(".container-night");
// });

// $("#sleep").click(function () {
//   $("backgounde").toggle("slow", 0.5, function () {});
// });

// $("#sleep").click(function () {
//   $(".container").("slow", 100);
// });

// $(".sleep").on({
//   click: function () {

///progress meters - this works and the bar slowly gets bigger - need to figure out how to make smaller when buttons are clicked
//https://www.w3schools.com/howto/howto_js_progressbar.asp

// END OF GAME
const endOfGame = function () {
  if (
    Charmander.hunger >= 10 ||
    Charmander.sleepiness >= 10 ||
    Charmander.boredom >= 10 ||
    Charmander.age >= 10 ||
    timer.val === 0
  ) {
    alert("Game over!");
  }
};

endOfGame();
