
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
    
   
   

    /* call validation */
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
    console.log(`You and the AI both picked ${window.userMove}`);
    playRound();
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



/* 7/7/2020 */




/*Go back to your “Rock Paper Scissors” game from a previous lesson and 
give it a simple UI so that the player can play the game by clicking on buttons
rather than typing their answer in a prompt.

    Copy your original code into a new file so you don’t lose it.
    For now, remove the logic that plays exactly five rounds.
    Create three buttons, one for each selection. Add an event 
    listener to the buttons that calls your playRound function with the correct
     playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    Add a div for displaying results and change all of your console.logs into DOM methods.
    Display the running score, and announce a winner of the game once one player reaches 5 points.
    You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
    Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!
  */