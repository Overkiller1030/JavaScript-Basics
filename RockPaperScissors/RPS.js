let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = (Math.floor(Math.random() * 3) + 1);
  if(randomNumber === 1){ 
    return ("rock");
  } else if (randomNumber === 2) {
    return ("paper");
  } else {
    return ("scissors");
  }
}
console.log(`The computer chose: ${getComputerChoice()}`);

function getHumanChoice() {
  let humanChoice;
  while(true){
    humanChoice = prompt("Enter 'rock', 'paper', or 'scissors'.");
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")) {
      alert("That is an invalid answer!");
    } else {
      break;
    }
  }
return humanChoice;
}
console.log(`You chose: ${getHumanChoice()}`);

function playRound(humanChoice, computerChoice){
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("It's a tie! Rock and Rock are equally matched!");
    } else if (computerChoice == "paper") {
      console.log("You lose! Paper beats Rock!");
      computerScore ++;
    } else {
      console.log("You win! Rock beats Scissors!");
      humanScore ++;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("You win! Paper beats Rock!");
      humanScore ++
    } else if (computerChoice == "paper") {
      console.log("It's a tie! Paper and Paper are equally matched!");
    } else {
      console.log("You lose! Scissors beats Paper!");
      computerScore ++;
    }
  } else {
    if (computerChoice == "rock") {
      console.log("You lose! Rock beats Scissors!");
      computerScore ++;
    } else if (computerChoice == "paper") {
      console.log("You win! Scissors beats Paper!");
      humanScore ++;
    } else {
      console.log("It's a tie! Scissors and Scissors are equally matched!");
    }
  }
}

// BEGIN function named playRound(humanChoice, computerChoice)
  // IF humanChoice is "rock" and
    // IF computerChoice is "rock"
      // PRINT "It's a tie! Rock and Rock are equally matched!"
    // ELSE IF computerChoice is "paper"
      // PRINT "You lose! Paper beats Rock!"
      // INCREMENT computerScore by 1
    // ELSE computerChoice is "scissors"
      // PRINT "You win! Rock beats Scissors!"
      // INCREMENT humanScore by 1
  // ELSE IF humanChoice is "paper" and
    // IF computerChoice is "rock"
      // PRINT "You win! Paper beats Rock!"
      // INCREMENT humanScore by 1
    // ELSE IF computerChoice is "paper"
      // PRINT "It's a tie! Paper beats Paper are equally matched!"
    // ELSE computerChoice is "scissors"
      // PRINT "You lose! Scissors beats Paper!"
      // INCREMENT computerScore by 1
  // ELSE humanChoice is "scissors" and
    // IF computerChoice is "rock"
      // PRINT "You lose! Rock beats Scissors!"
      // INCREMENT computerScore by 1
    // ELSE IF computerChoice is "paper"
      // PRINT "You win! Scissors beats Paper!"
      // INCREMENT humanScore by 1
    // ELSE computerChoice is "scissors"
      // PRINT "It's a tie! Scissors and Scissors are evenly matched!"
// END playRound

// BEGIN function named playGame
  // INIT variable named humanScore as 0
  // INIT variable named computerScore as 0

  // FOR five rounds
    // INIT constant humanSelection with getHumanChoice retun value
    // INIT constant computerSelection with getComputerChoice return value

    // CALL playRound with humanChoice and computerChoice parameters from the getHumanChoice and getComputerChoice functions

// END playGame

