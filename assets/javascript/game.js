//Sets all variables for the game.
var wins = 0;
var losses = 0;
var guessLeft = 9;
var attempts = [];
var computerChoices = "abcdefghijklmnopqrstuvwxyz";
var computer = " ";
var Game = 0;
var playerTries = 0;

// Generates a random letter as the Computer Choice
function computerGuess()
{
  compGuess = computerChoices.charAt(Math.floor(Math.random() * computerChoices.length));
  return compGuess;
};

// Checks the answer vs the computer letter
function checkAnswer(x, y)
{
  if(x === y)
  {
    wins++;
    return true;

  }else 
  {
    guessLeft--;
    return false;
  }
};

// Displays all answers made by player

function showGuesses(x)
{
  var guessesString = " ";

  for(i=0; i<x.length;i++)
  {
    guessesString = guessesString + " " + x[i];
  }
  return guessesString;
};

// Function that displays the Basic text and wins/losses/tries/guesses

function displayAll()
{
  document.getElementById("win").textContent = "Wins: " +  wins;
  document.getElementById("lose").textContent = "Losses: " +  losses;
  document.getElementById("tries").textContent = "Tries: " +  guessLeft;
  document.getElementById("guesses").textContent = "Your guesses: " + showGuesses(attempts);
};

//Resets the tries and attempts to start a new game.

function resetIt()
{
  guessLeft = 9;
  attempts = [];
};
// Starts a new game

function newGame()
{

// Calls the Computer Guess function to generate the letter to be guessed.
var compGuess = computerGuess();

// Listens for player input and begins the game.
document.onkeyup = function(event)
{
// Logs the Key pressed by the player.
  var playerGuess = event.key;
  // Verifies if the key has been pushed before and if it is a valid letter key. If it has then nothing happens. If the player hasn't used the letter yet, it continues the game.
  if((attempts.includes(playerGuess) === false) && (playerGuess >= "a") && (playerGuess <= "z"))
  {
    attempts.push(playerGuess);

// Checks wether to player's answer is correct. If so then the player wins and games resets.
    if(checkAnswer(playerGuess, compGuess))
    {
     resetIt();
     displayAll();
     newGame();
    }
  // If guess isn't correct. Game checks if the player is out of tries. If so then a loss is logged and game resets.
     else if(guessLeft === 0)
     {
      losses++;
      resetIt();
      displayAll();
      newGame();
     }
//Finally if the guess is not correct, but the player still has tries, the game continues but shows the updated results.
      else 
      {
       displayAll();
      }
  playerTries++;
}
}
};

Game = newGame();

