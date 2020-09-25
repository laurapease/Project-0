// Baby cat url: https://imgur.com/zU2FrKo
// adult cat url: https://imgur.com/roGBcpz
// elder cat url: https://imgur.com/wLbZHfr

// baby dog url: https://imgur.com/Qqv15yM
// adult dog url: https://imgur.com/79uPelw
// elder dog url: https://imgur.com/ZHCoxvs

// background image if i toggle to a diffent img for sleep: img src="https://images-na.ssl-images-amazon.com/images/I/71ut-GH-boL._AC_SX522_.jpg"'
//   );

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
// You pet should die if Hunger, Boredom, or Sleepiness hits 0.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

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

const Baby = new Pet(name, 5);
const Adult = new Pet(name, 10);
const Elder = new Pet(name, 15);

console.log(Baby, Adult, Elder);

// end of game ?
// if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
//   console.log("Game over!");
//}

var subButton = document.getElementById("subButton");
subButton.addEventListener("click", getUserName, false);

//Submit name buton dissappears when clicked - IT WORKS!

$("#subButton").on("click", (event) => {
  // $(event.currentTarget) refers to the '#menu' element that was clicked.
  $(event.currentTarget).hide();
});

function timer() {
  var sec = 100;
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

//Button Functions

//use jquery .fadeToggle to make food fade in and out when clicked
// Example:
//$('#menu-button').on('click', () => {
// ( equivalent to )
//$('#menu').fadeToggle(400, 'swing')
// $('#menu').fadeToggle();
// });

$("#feed").click(function () {
  Pet.food += 1;
});

//use jquery .fadeToggle to fade in and out a toy when button is c;icked

$("#play").click(function () {
  Pet.activity += 1;
});

// Potentially use sligeToggle to make the moon rise and fall when sleep is clicked. Also, change opacity so the screen darkens when sleep is clicked. Do the opposite for wake up (or take wake up out if I can set a timer of sorts on this function.
// $('#sleep').on('click', () => {
//     $('#sleep').slideToggle();
// // });

//TRYING TO CHANGE BACKGROUND WHEN SLEEP BUTON IS CLICKED...WHERE CAN I STORE THE BACKGROUNG IMG AS AN ELEMENT, CLASS OR ID??

// EXAMPLE 2:
// $(document).ready(function () {
//   // Set background image of a div on click of the button
//   $("#sleep").click(function () {
//     var imageUrl =
//       "https://images-na.ssl-images-amazon.com/images/I/71ut-GH-boL._AC_SX522_.jpg";
//     $("body").css("background-image", "url(" + "https:/images-na.ssl-images-amazon.com/images/I/71ut-GH-boL._AC_SX522_.jpg" + ")");
//   );
// });

// $("#sleep").click(function () {
//   $("backgounde").toggle("slow", 0.5, function () {});
// });

//????????
// $("#sleep").on("click", function () {
//   //   Pet.sleep += 1;
//   $("#sleep").css(
//     "background-image",
//     'img src="https://images-na.ssl-images-amazon.com/images/I/71ut-GH-boL._AC_SX522_.jpg"'
//   );
// });

///progress meters - this works and the bar slowly gets bigger - need to figure out how to make smaller when buttons are clicked
//https://www.w3schools.com/howto/howto_js_progressbar.asp

// HUNGER METER

var i = 0;
function moveHunger() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("hunger");
    var width = 1;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// moveHunger();

//SLEEPINESS METER

var i = 0;
function moveSleepiness() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("sleepiness");
    var width = 1;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// moveSleepiness();

var i = 0;
function moveBoredom() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("boredom");
    var width = 1;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// moveBoredom();

// AGE LEVEL

var i = 0;
function moveAge() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("age");
    var width = 1;
    var id = setInterval(frame, 3000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// moveAge();

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
