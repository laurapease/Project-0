# Project-0

\*\* First project for SEI = Tamagotchi Virtual Pet

Game Logic:

1. The featured pet is a 3 tier evolution of Charmander, a Pokeman character. Charmander will evolve when the player is prompted at at ages 3 and 6.
2. To begin the game, the player clicks 'Start Game.' A prompt appears asking for the player name. Once entered, the player is welcomed to start the game.
3. The player is instructed to click 'Adopt Charmander.' When clicked, the egg hatches to Charmander.
4. Next, the player will input the name of their pet. The page will update with the pet's name once button is clicked, and the timer will start.
5. Hunger, Sleepiness, and Boredom values are determined at random once the Name Pet button is clicked.
6. The game lasts 200 seconds.
7. Hunger, sleepiness and boredom all increase by 1 every 10 seconds.
8. Age increases by 1 every 20 seconds.
9. Buttons for feed, sleep, exercise and play are connected those of hunger, sleepiness, boredom levels
10. Feed lowers Hunger Level by 1
11. Sleep/Wake lowers Sleepiness Level by 1. The background changes to a nighttime scene when clicked, then back to saytime when clicked again.
12. Let's Play lowers Boredom Level by 1
13. Exercise lowers Boredom Level by 1 and raises Hunger Level by 1
14. Connect feed, sleep, play buttons to hunger Level, Tiredness Level and Boredom Level.
15. The player is prompted to click the Charmeleon button to evolve at 140 seconds (at age 3).
16. The player is prompted to click the Charlizrd button to evolve at 80 seconds (at age 6).
17. Game is over when timer hits 0.
18. The 'Reset Game' button resets the browser to the original loaded page when clicked.

Animations:

1. Buttons have animations attached when the mouse hovers over them.
2. The egg and pet evolutions are gifs found online in pixel art.
3. The egg/pets wobble when the mouse hovers over them.

Difficulties:

1. I was not able to connect the end of game with any factors others than the timer reaching 0. At one point, I had it working where the player would get an alert of 'Game over' if any of the wellness meters reached 10, but somehow it stopped working.
2. I toggled the class of the background when the Sleep button was pressed. I could change the html inside of the button to be 'Wake me' when it toggled to sleep, but it would not toggle back to 'sleep.' I chose to put both 'Sleep' and 'Wake' on the button at the same time to avoid confusion.
3. I was not able to make sre the wellness meters didn't go below zero.
4. I would have liked to have a fade in/out effect for evoltions, but I think I set up the image wrong from the start and couldn't make it work.
5. I found animations difficult and I will continue to work on how to animate using @keyframes in order to make this work.
