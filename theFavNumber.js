// Use a while loop

let theFavNumber = 5; 
let guess;

while (true) {
  guess = 5;
  guess = parseInt(guess);

  if (guess > theFavNumber) {
    console.log("Too high!");
  } else if (guess < theFavNumber) {
    console.log("Too low!");
  } else {
    console.log("Correct!");
    break; // Exit the loop if the guess is correct
  }
}