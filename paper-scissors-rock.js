const userName = process.argv[2];

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb') {
    return userInput;
  } else {
    return 'Invalid material.';
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
     return 'rock';
     break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
    default: 
      return 'Oops'
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Its a tie!';
  }
  if (userChoice === 'bomb') {
    return `${userName} won! But is a dirty cheat.`
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer has won!';
    } else {
      return `${userName} is the winner!`
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer is victorias!';
    } else {
      return `${userName} wins!`
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer is superior';
    } else {
      return `${userName}'s intellect knows no bounds!`;
    }
  }
}

function playGame() {
  const userChoice = getUserChoice(process.argv[3]);
  const computerChoice = getComputerChoice();
  console.log('You chose: ' + userChoice);
  console.log('The computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
}

playGame();