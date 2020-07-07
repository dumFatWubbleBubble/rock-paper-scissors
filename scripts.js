
/* AI rock paper scissors */

window.userPoints;

window.aiPoints;

userPoints = 0;
aiPoints = 0;

const alert = document.querySelector("#alert");

const BTN_ROCK = document.getElementById('btn-rock');

BTN_ROCK.addEventListener('click', function() {playRound("rock")});

const BTN_PAPER = document.getElementById('btn-paper');

BTN_PAPER.addEventListener('click', function() {playRound("paper")});

const BTN_SCISSORS = document.getElementById('btn-scissors');

BTN_SCISSORS.addEventListener('click', function() {playRound("scissors")});


const results = document.querySelector('.results');


const displayUserPoints = document.querySelector("#user-points");
const displayAiPoints = document.querySelector("#ai-points");


displayUserPoints.textContent = `User Points: ${userPoints}`;
displayAiPoints.textContent = `AI Points: ${aiPoints}`;


/* computer selection */
function computerPlay() {
    let choices, computerSelection;

    choices = ['rock', 'paper', 'scissors'];
    /* assigns random choice to global variable aiMove */
     window.aiMove = choices[Math.floor(Math.random() * choices.length)];

     return window.aiMove;

    
}














/* validates the user input */












function playRound(playerSelection, computerSelection,) {
computerSelection = computerPlay();
checkRound();

/* ai gets point if it selects PAPER and user selects ROCK */
if (playerSelection === "rock" && window.aiMove === "paper") {

    alert.textContent = "The AI chose paper and you chose rock. AI gets 1 point";

    window.aiPoints++;
    displayAiPoints.textContent = `AI Points: ${aiPoints}`;
    
} else if (playerSelection === "scissors" && window.aiMove === "rock") {   /* ai gets point if it selects ROCK and user selects SCISSORS */

    window.aiPoints++;
    alert.textContent = "The AI chose rock and you chose scissors. AI gets 1 point";
    displayAiPoints.textContent = `AI Points: ${aiPoints}`;

} else if (playerSelection === "paper" && window.aiMove === "scissors") { /* ai gets point if it selects SCISSORS and user selects PAPER */

    window.aiPoints++;
    alert.textContent ="The AI chose scissors and you chose paper. AI gets 1 point";
    displayAiPoints.textContent = `AI Points: ${aiPoints}`;
} else if (playerSelection === "rock" && window.aiMove === "scissors") { /* user gets point if it selects ROCK and ai selects SCISSORS */

    window.userPoints++;
    alert.textContent = "The AI chose scissors and you chose rock. You get 1 point";
    displayUserPoints.textContent = `User Points: ${userPoints}`;
} else if (playerSelection === "paper" && window.aiMove === "rock") { /* user gets point if it selects PAPER and ai selects ROCK */

    window.userPoints++;
    alert.textContent = "The AI chose rock and you chose paper. You get 1 point";
    displayUserPoints.textContent = `User Points: ${userPoints}`;

} else if (playerSelection === "scissors" && window.aiMove === "paper") { /* user gets point if it selects ROCK and ai selects SCISSORS */

    window.userPoints++;
    alert.textContent = "The AI chose paper and you chose scissors. You get 1 point";
    displayUserPoints.textContent = `User Points: ${userPoints}`;

    
} 


else {
    alert.textContent = `You and the AI both picked ${playerSelection}`;
    
    window.userPoints = window.userPoints;
    window.aiPoints = window.aiPoints;
}



}
 function checkRound() {
if (userPoints > 4) {
    gameEnd("userWin");
    
} else if (aiPoints > 4){
    gameEnd('aiWin');
} else {
    return true;
}

 }


function gameEnd(outcome){


    if (outcome === "aiWin") {
        alert.textContent = `AI Wins!`;

    }

    if (outcome === "userWin") {
        alert.textContent = `You Win!`;
    }


    alert('The game has ended');

    window.location.replace("http://127.0.0.1:5500/index.html");

    /* play five rounds */

   /*  playRound();
    playRound();
    playRound();
    playRound();
    playRound(); */


    /* decideGameWinner(); */
    

   

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


/* game(); */



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