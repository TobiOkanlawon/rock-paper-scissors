console.log("Hello World, this is a rock-paper-scissors application")

const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']

const computerSelection = function(){
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

const playRound = function(playerChoice, computerChoice){
    if(playerChoice === 'ROCK' && computerChoice === 'PAPER'){
	return 'You Lose! Paper beats rock!'
    } else if(playerChoice === computerChoice){
	return 'Draw!'
    } else if(playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
	return 'You Lose! Scissors beats paper'
    } else if(playerChoice === 'SCISSORS' && computerChoice == 'ROCK'){
	return 'You Lose! Rock beats scissors'
    } else if(playerChoice === 'ROCK' && computerChoice === 'SCISSORS'){
	return 'You Win! Rock beats scissors'
    } else if(playerChoice === 'PAPER' && computerChoice === 'ROCK'){
	return 'You Win! Paper beats rock'
    } else if(playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
	return 'You Win! Scissors beats paper'
    }
}

const sanitiseSelection = function(choice){
    let sanitisedChoice = '';
    for(let i = 0; i < choice.length; i++){
	sanitisedChoice += choice[i].toUpperCase();
    }
    console.log(sanitisedChoice)
    return sanitisedChoice;
}

const game = function(){
    console.log('This plays ROCK, PAPER, SCISSORS five times')
    for( let i=0; i < 5; i++){
	let playerChoice = sanitiseSelection(prompt("ROCK, PAPER or SCISSORS?"))
	let computerChoice = computerSelection();

	console.log(playRound(playerChoice, computerChoice))
    }
}

game();
