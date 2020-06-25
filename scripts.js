
/* AI rock paper scissors */

window.userPoints;

window.aiPoints;

userPoints = 0;
aiPoints = 0;


/* computer selection */
function computerPlay() {
    let choices, computerSelection;

    choices = ['rock', 'paper', 'scissors'];
    /* assigns random choice to global variable aiMove */
     window.aiMove = choices[Math.floor(Math.random() * choices.length)];

     return window.aiMove;

    
}




function getUserInput() {

    window.input = prompt("What is your move:").toLowerCase();
    
   
   


    validateUserInput();

    
    
}










/* validates the user input */
function validateUserInput(input) {

    

    switch(window.input) {
        case "rock":
            return window.userMove = "rock";
            break;
        
        case "paper":
            return window.userMove = "paper";
            break;

        case "scissors":
            return window.userMove = "scissors"
            break;

        default:
            /* if anser is not valid */
            alert("Your answer was not valid please re-enter your move...");
            getUserInput();
            
    }
}











function playRound(playerSelection, computerSelection,) {
computerSelection = computerPlay();
playerSelection = getUserInput();
/* ai gets point if it selects PAPER and user selects ROCK */
if (window.userMove === "rock" && window.aiMove === "paper") {

    console.log("The AI chose paper and you chose rock. AI gets 1 point");

    window.aiPoints++;
    
} else if (window.userMove === "scissors" && window.aiMove === "rock") {   /* ai gets point if it selects ROCK and user selects SCISSORS */

    window.aiPoints++;
    console.log("The AI chose rock and you chose scissors. AI gets 1 point");

} else if (window.userMove === "paper" && window.aiMove === "scissors") { /* ai gets point if it selects SCISSORS and user selects PAPER */

    window.aiPoints++;
    console.log("The AI chose scissors and you chose paper. AI gets 1 point");
} else if (window.userMove === "rock" && window.aiMove === "scissors") { /* user gets point if it selects ROCK and ai selects SCISSORS */

    window.userPoints++;
    console.log("The AI chose scissors and you chose rock. You get 1 point");
} else if (window.userMove === "paper" && window.aiMove === "rock") { /* user gets point if it selects PAPER and ai selects ROCK */

    window.userPoints++;
    console.log("The AI chose rock and you chose paper. You get 1 point");

} else if (window.userMove === "scissors" && window.aiMove === "paper") { /* user gets point if it selects ROCK and ai selects SCISSORS */

    window.userPoints++;
    console.log("The AI chose paper and you chose scissors. You get 1 point");
} else {
    window.userPoints = window.userPoints;
    window.aiPoints = window.aiPoints;
}



}


function game(){

    /* play five rounds */

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();


    decideGameWinner();
    

   

}


function decideGameWinner() {

    if (window.userPoints < window.aiPoints) {
        console.log("The AI wins");

    } else if (window.userPoints > window.aiPoints) {
        console.log("The Player wins")
    } else  {
        console.log("The Player and the AI tie")
    }



}


game();

