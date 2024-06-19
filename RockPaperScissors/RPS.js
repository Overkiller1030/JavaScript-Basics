console.log("Hello World!")

// BEGIN function named getComputerChoice
  // SET variable named randomNumber THAT
  // COMPUTES a random integer number between 1 and 3
  // IF randomNumber is 1 THEN
    // RETURN "rock"
  // ELSE IF randomNumber is 2 THEN
    // RETURN "paper"
  // ELSE 
    // RETRUN "scissors"
// END getComputerChoice

// BEGIN function named getHumanChoice
  // SET variable named humanChoice THAT
  // OBTAINS user input
  // NORMALIZE user input (change answer to lowercase and remove spaces)

  // WHILE humanChoice is invlaid
    // DISPLAY prompt telling user to enter "rock", "paper", or "scissors"
    // IF response is valid
      // INIT humanChoice with prompt string and
      // BREAK out of the loop
    // ELSE
      // PRINT that the string was invalid
  // RETRUN humanChoice
// END getHumanScore

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

