console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
    return userInput
  } else {
console.log ('Error. Enter rock, paper, or scissors');
  }
  } 
const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random()*3)
switch (randomNumber) {
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
}
};



const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {return 'This game is a tie!'
  }

  if (userChoice === 'rock') {if (computerChoice === 'paper') {
    return "Sorry, you lose."
  } else {
    return "Congrats! "
  }
  }

if (userChoice === 'paper') {if (computerChoice === 'scissors') {
    return "Sorry. You lose."
    } else {
      return "Congrats!"
  }
}
  if (userChoice === 'scissors') {if (computerChoice === 'rock'){
    return "Sorry"
  } else {
    return "GOod job!"
  }}
}
;

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + getUserChoice);
  console.log('The computer threw ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice))
};

playGame ()