$("#start").on("click", function () {
  let name = prompt("What is your name?");
  alert(
    `Hi ${name}! Meet your new pet! We call them Charmander, but you can name them whatever you'd like. First, click on 'Adopt Charmander.' Then name your pet. The timer will start once you've added your pet's name!!`
  );
});

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
    if (sec === 0) {
      alert("Time is up! End of game!");
    }
  }, 1000);
}

//BUTTONS

// FEED BUTTON DECREASES HUNGER BY 1 WHEN CLICKED

let feedButton = document.getElementById("feed");
function feedPet() {
  if (Charmander.hunger >= 0) {
    Charmander.hunger = Charmander.hunger - 1;
    alert("Yum!");
    console.log("Yum!");
    hungerLevel.textContent = Charmander.hunger;
  }
}
feedButton.addEventListener("click", feedPet);

// SLEEP BUTTON DECREASES TIREDNESS BY 1 WHEN CLICKED

let sleepButton = document.getElementById("sleep");
function sleepPet() {
  if (Charmander.sleepiness >= 0) {
    Charmander.sleepiness = Charmander.sleepiness - 1;
    console.log("Bedtime!");
    sleepinessLevel.textContent = Charmander.sleepiness;
  }
}
sleepButton.addEventListener("click", sleepPet);

// PLAY BUTTON DECREASES BOREDNESS BY 1 WHEN CLICKED

let playButton = document.getElementById("play");
function playPet() {
  if (Charmander.boredom >= 0) {
    Charmander.boredom = Charmander.boredom - 1;
    alert("Let's play!");
    console.log("Let's play!");
    boredomLevel.textContent = Charmander.boredom;
  } else {
    Charmander.boredom === 0;
  }
}
playButton.addEventListener("click", playPet);

//EXERCSE BUTTON DECREASES BOREDNESS BY 1 AND NCREASES HUNGER BY 1 WHEN CLICKED

let exerciseButton = document.getElementById("exercise");
function exercisePet() {
  Charmander.boredom = Charmander.boredom - 1;
  Charmander.hunger = Charmander.hunger + 1;
  alert("That was fun, but I'm hungry!");
  console.log("That was fun, but I'm hungry!");
  boredomLevel.textContent = Charmander.boredom;
  hungerLevel.textContent = Charmander.hunger;
}

exerciseButton.addEventListener("click", exercisePet);

// RESET GAME BUTTON - RESETS TO ORIGINAL LOADED PAGE

$("#reset").click(function () {
  location.reload(true);
  alert("Let's try again!");
});

// NAME YOUR PET

var subButton = document.getElementById("subButton");
subButton.addEventListener("click", getUserName, false);

//Submit name button dissappears when clicked

$("#subButton").on("click", (event) => {
  $(event.currentTarget).hide();
  timer();
});

//SCREEN SWITCHES TO A NIGHT SCENE WHEN ZZZZ BUTTON IS CLICKED

$("#sleep").on("click", () => {
  $("container").toggleClass("dark");
});

//CLCIK ON ADOPT CHARMANDER TO CHANGE EGG TO CHARMANDER

$("#charmander").on("click", () => {
  $("#egg").attr(
    "src",
    "https://thumbs.gfycat.com/ShyImperturbableAlpaca-max-1mb.gif"
  );
});

// CLICK CHARMELEON BUTTON WHEN PROMPTED TO EVOLVE TO CHARMELEON

$("#charmeleon").on("click", () => {
  $("#egg").attr(
    "src",
    "https://66.media.tumblr.com/tumblr_ma4fpfD6Tu1rfjowdo1_500.gif"
  );
  return false;
});

// CLICK CHARLIZARD BUTTON WHEN PROMPTED TO EVOLVE TO CHARLIZARD

$("#charlizard").on("click", () => {
  $("#egg").attr(
    "src",
    "https://66.media.tumblr.com/tumblr_ma4fsg8aDZ1rfjowdo1_500.gif"
  );
  return false;
});

// END OF GAME
// let endOfGame = function () {
//   if (
//     hungerLevel >= 10 ||
//     sleepinessLevel >= 10 ||
//     boredomLevel >= 10 ||
//     ageLevel >= 10
//   ) {
//     alert("Game over!");
//   }
// };

// endOfGame();

// if (
//   Charmander.hunger >= 10 ||
//   Charmander.sleepiness >= 10 ||
//   Charmander.boredom >= 10 ||
//   Charmander.age >= 10
// ) {
//   console.log("Game over!");
// }

const endOfGame = function () {
  if (
    hungerLevel.textContent >= 10 ||
    sleepinessLevel.textContent >= 10 ||
    boredomLevel.textContent >= 10 ||
    ageLevel.textContent >= 10
  ) {
    alert("Game over!");
  }
};

endOfGame();

//Working on health alerts when numbers reach a certain point, but cna't figure it out.

// let healthAlert = function () {
//   if (
//     (Charmander.age >= 1 && Charmander.hunger >= 7) ||
//     (Charmander.age >= 1 && Charmander.sleepiness >= 7) ||
//     (Charmander.age >= 1 && Charmander.boredom >= 7)
//   );
//   alert("Your pet needs some attention!");
//   healthAlert();
// };
