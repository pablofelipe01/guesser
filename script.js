let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = (number) => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, target) => {

    const humanDifference = Math.abs(target-human)
    const computerDifference = Math.abs(target-computer)

    if (humanDifference <= computerDifference) {
      return true 
    } else {
      return false
    }
}

const updateScore = winner => {
    if (winner === 'human') {
      humanScore++
    } else if (winner === 'human') {
      computerScore++
    } else {
      console.log (error)
    }
  
  }

  const advanceRound = () => 
   currentRoundNumber++