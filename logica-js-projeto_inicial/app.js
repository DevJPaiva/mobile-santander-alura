alert("Welcome!");

let secretNumber = 4;

while (secretNumber != kick) {
  let kick = prompt("Choose a number between 1 and 10");

  if (secretNumber == kick) {
    console.log("WOW!! You win");
  } else {
    if (kick > secretNumber) {
      alert("The secret number is lower than " + kick);
    } else {
      alert("The secret number is higher than " + kick);
    }
  }
}
