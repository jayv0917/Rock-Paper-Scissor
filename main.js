function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
  if(humanChoice === 'rock'){
    if(computerChoice === 'rock'){
      console.log('tie');
    }else if(computerChoice === 'paper'){
      computerScore += 1;
      console.log('Computer Win.');
    }else if(computerChoice === 'scissors'){
      humanScore += 1;
      console.log('You Win.');
    }
  }else if(humanChoice === 'paper'){
    if(computerChoice === 'rock'){
      humanScore += 1;
      console.log('You win');
    }
    else if(computerChoice=== 'paper'){
      console.log('tie');
    }
    else if(computerChoice === 'scissors'){
      computerScore += 1;
      console.log('You lose.');
    }
  }else if(humanChoice === 'scissors'){
    if(computerChoice === 'rock'){
      computerScore += 1;
      console.log('You Lose');
    }
    else if(computerChoice === 'paper'){
      humanScore += 1;
      console.log('You win');
    }
    else if(computerChoice === 'scissors'){
      console.log('tie');
    }
  }
}

for(let i = 0; i < 5; i++){
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

 console.log(`Human Score: ${humanScore}`);
 console.log(`Computer Score: ${computerScore}`);
 if(humanScore > computerScore){
   console.log('Player Won!');
 }else{
   console.log('Computer Won!');
 }
 
}


function getComputerChoice() {
  let computerChoice = Math.random();
  let computerMove = '';
  
  if( computerChoice < 1/3 ){
    computerMove = 'rock';
  }
  else if( computerChoice < 2/3 ){
    computerMove = 'paper';
  }
  else{
    computerMove = 'scissors';
  }
  
  return computerMove;
}

function getHumanChoice() {
  let humanChoice = '';
  let humanMove = prompt('Enter Move: (rock, paper or scissors)');
  
  return humanChoice = humanMove;
}

playGame();