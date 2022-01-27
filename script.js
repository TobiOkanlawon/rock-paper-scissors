const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

// the containers of the choices
const ROCK_BUTTON = document.getElementById('rock');
const PAPER_BUTTON = document.getElementById('paper');
const SCISSORS_BUTTON = document.getElementById('scissors');

const RESULTS_CONTAINER = document.getElementById('result');

const computerSelection = function(){
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
};

const playRound = function(playerChoice, computerChoice){
    // returns winner or draw;
    if(playerChoice === 'ROCK' && computerChoice === 'PAPER'){
	return 'COMPUTER';
    } else if(playerChoice === computerChoice){
	return 'DRAW';
    } else if(playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
	return 'COMPUTER';
    } else if(playerChoice === 'SCISSORS' && computerChoice == 'ROCK'){
	return 'COMPUTER';
    } else if(playerChoice === 'ROCK' && computerChoice === 'SCISSORS'){
	return 'PLAYER';
    } else if(playerChoice === 'PAPER' && computerChoice === 'ROCK'){
	return 'PLAYER';
    } else if(playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
	return 'PLAYER';
    }
}

const sanitiseSelection = function(choice){
    // helper function for playing the game on the console.
    let sanitisedChoice = '';
    for(let i = 0; i < choice.length; i++){
	sanitisedChoice += choice[i].toUpperCase();
    }
    return sanitisedChoice;
};

const handleChoice = function(){
    // listens for player input;
    
    ROCK_BUTTON.addEventListener('click', () => handleRound(playRound('ROCK', computerSelection())))
    PAPER_BUTTON.addEventListener('click', () => handleRound(playRound('PAPER', computerSelection())))
    SCISSORS_BUTTON.addEventListener('click', () => handleRound(playRound('SCISSORS', computerSelection())))
};

let playerWinCount = 0;
let computerWinCount = 0;

const handleRound = function(winner){
    if(winner === 'COMPUTER'){
	computerWinCount += 1;
	displayRoundWinner('COMPUTER');
    } else if(winner === 'PLAYER'){
	playerWinCount += 1;
	displayRoundWinner('PLAYER')
    } else {
	RESULTS_CONTAINER.textContent = 'Draw!';
	displayRoundWinner('DRAW')
    }

    checkAndHandleFiveWins();
};

const checkAndHandleFiveWins = function(){
    if (computerWinCount === 5){
	displayFiveRoundWinner('COMPUTER')
	// reset win counts
	computerWinCount = 0;
	playerWinCount = 0;
    } else if(playerWinCount === 5){
	displayFiveRoundWinner('PLAYER')
	// reset win counts
	computerWinCount = 0
	playerWinCount = 0
    }
};

const displayFiveRoundWinner = function(winner){
    if(winner === 'COMPUTER'){
	RESULTS_CONTAINER.textContent = 'Computer wins: 5 - ' + playerWinCount;
    } else if(winner === 'PLAYER'){
	RESULTS_CONTAINER.textContent = 'You win: 5 - ' + computerWinCount;
    }
};

const displayRoundWinner = function(text){
    if(text === 'COMPUTER'){
	RESULTS_CONTAINER.textContent = 'You lost this round';
    } else if(text === 'PLAYER'){
	RESULTS_CONTAINER.textContent = 'You won this round';
    } else {
	RESULTS_CONTAINER.textContent = 'Draw!'
    }
};
    

const setupGameForWeb = function(){
    handleChoice();
};

setupGameForWeb();
