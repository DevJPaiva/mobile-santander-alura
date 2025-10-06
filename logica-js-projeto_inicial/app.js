alert("Welcome!");

let secretNumber = 4;
let kick;
let kicksUser =1;

while (secretNumber != kick) {
  kick = prompt("Choose a number between 1 and 10");

  if (secretNumber == kick) {
    console.log("WOW!! You win with " + kicksUser + " kicks.");
    //break;
  } else {
    if (kick > secretNumber) {
      alert("The secret number is lower than " + kick);
    } else {
      alert("The secret number is higher than " + kick);
    }
    kicksUser++;
  }
}
