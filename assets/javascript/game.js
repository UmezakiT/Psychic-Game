
var wins= 0;
var losses= 0;
var guessesLeft=10;
var lettersGuessed=[];


var alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];


document.onkeyup = function(event){

  // console.log(event);

  var userGuess = event.key;
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


  // console.log(computerGuess);

  if(userGuess === computerGuess){

    guessesLeft=10;
    lettersGuessed=[];
    wins++;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = wins;
    

  }
  
  else{

    guessesLeft--;
    lettersGuessed.push(userGuess);

    
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed

  }

  if(guessesLeft === 0){

    losses++
    guessesLeft=10;
    lettersGuessed=[];

    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

  }

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;

};

