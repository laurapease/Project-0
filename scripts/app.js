// background image if i toggle to a diffent img for sleep: img src="https://images-na.ssl-images-amazon.com/images/I/71ut-GH-boL._AC_SX522_.jpg"'
//   );

//charmander: img src "https://thumbs.gfycat.com/ShyImperturbableAlpaca-max-1mb.gif"

// charmeleon img src "https://66.media.tumblr.com/tumblr_ma4fpfD6Tu1rfjowdo1_500.gif"

//charlizard img src "https://66.media.tumblr.com/tumblr_ma4fsg8aDZ1rfjowdo1_500.gif"

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

function timer() {
  var sec = 300;
  var timer = setInterval(function () {
    document.getElementById("timer").innerHTML = "Timer: " + sec + " seconds";
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
    if (sec % 10 === 0) {
      Charmander.hunger += 1;
      petHunger();
    }
    if (sec % 10 === 0) {
      Charmander.age += 1;
      petAge();
    }
  }, 1000);
}

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

let hunger = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let sleepiness = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let boredom = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let name;

class Pet {
  constructor(name, hunger, sleepiness, boredom, age) {
    this.name = name;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.age = age;
  }
  eat() {
    this.hunger -= 1;
    console.log("Yum!");
  }
  sleep() {
    this.sleepiness -= 1;
    console.log("Nap time");
  }

  wake() {
    console.log("Wakey wakey!");
  }

  play() {
    this.boredom -= 1;
    console.log("What fun!");
  }
}

let Charmander = new Pet((name = "Charmander"), hunger, sleepiness, boredom, 0);
// let Abra = new Pet(name, hunger, sleepiness, boredom, 0);
// let Charmander = new Pet(name, hunger, sleepiness, boredom, 0);

console.log(Charmander);

const endOfGame = function () {
  if (
    Charmander.hunger >= 10 ||
    Charmander.sleepiness >= 10 ||
    Charmander.boredom >= 10 ||
    Charmander.age >= 10
  ) {
    alert("Game over!");
  }
};
endOfGame();

//BUTTONS

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

//Would love to make the ipiut field hide when subButton is clicked. Work on that.

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

//use jquery .fadeToggle to fade in and out a toy when button is clicked

$("#play").click(function () {
  Charmander.boredom -= 1;
});

let feed = document.getElementById("feed");
function feedPet() {
  Charmander.hunger = Charmander.hunger - 1;
  alert("you fed me!");
}

// Potentially use sligeToggle to make the moon rise and fall when sleep is clicked. Also, change opacity so the screen darkens when sleep is clicked. Do the opposite for wake up (or take wake up out if I can set a timer of sorts on this function.
// $('#sleep').on('click', () => {
//     $('#sleep').slideToggle();
// // });

//TRYING TO CHANGE BACKGROUND WHEN SLEEP BUTON IS CLICKED...WHERE CAN I STORE THE BACKGROUNG IMG AS AN ELEMENT, CLASS OR ID??

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

// HUNGER METER

// var i = 0;
// function moveHunger() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("hunger");
//     var width = 1;
//     var id = setInterval(frame, 1000);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }

// // moveHunger();

// //SLEEPINESS METER

// var i = 0;
// function moveSleepiness() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("sleepiness");
//     var width = 1;
//     var id = setInterval(frame, 1000);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }

// // moveSleepiness();

// var i = 0;
// function moveBoredom() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("boredom");
//     var width = 1;
//     var id = setInterval(frame, 1000);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }

// // moveBoredom();

// // AGE LEVEL

// var i = 0;
// function moveAge() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("age");
//     var width = 1;
//     var id = setInterval(frame, 3000);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }

// moveAge();
