
var foodItems = ["STEAK", "PIZZA", "APPLE", "CAKE", "COOKIE", "HAMBURGER", "SUSHI", "CHICKEN", "SANDWICH"];

var userFilled = [];
var userWord = "";
var chosenPlace = Math.floor(Math.random() * foodItems.length);
var activeWord = foodItems[chosenPlace];
var holdWord = activeWord;
var guessedCharacters = [];
var guessedCharacterString = "";
var guesses = 12;

var wins = 0;
var losses = 0;

var positionOfLast = chosenPlace;

var keyPressed = "";

for(i = 0; i < activeWord.length; i++)
	{
		userFilled.push("_");
	}


window.onkeydown = function(e) 
{
	keyPressed = e.keyCode || e.which;
	testThis();
}





function testThis() 
{

	var uChar = String.fromCharCode(keyPressed);
	var indexValue = activeWord.indexOf(uChar);
	var indexValueCA = guessedCharacterString.indexOf(uChar);

	if(indexValueCA == -1)
	{
		guessedCharacters.push(uChar);
		guessedCharacterString = guessedCharacters.join();
	}

	if(indexValue == -1 && indexValueCA == -1)
	{
		guesses -= 1;
	}

	while(indexValue != -1 && uChar != "0")
	{
		userFilled[indexValue] = String.fromCharCode(keyPressed);
		activeWord = activeWord.replace(uChar, "0");
		indexValue = activeWord.indexOf(uChar);

	}

	userWord = userFilled.join("");

	//document.getElementById("tShoot").innerHTML = userWord;

	if(userWord == holdWord && guesses > 0)
	{
		wins += 1;
		resetGame();
	}

	else if(guesses <= 0)
	{
		losses += 1;
		resetGame();
	}

	//document.getElementById("tShoot").innerHTML = "Wins: " + wins + " " + "Guesses remaining: " + guesses + " Losses: " + losses + "   Guessed characters: " + guessedCharacterString;

 	//document.getElementById("testText").innerHTML = activeWord;
 	//document.getElementById("testText").innerHTML = activeWord + " " + String.fromCharCode(keyPressed) + " " + userFilled + " " + uChar;


 	
	document.getElementById("wordSlots").innerHTML = userFilled;
	document.getElementById("guessedCharacters").innerHTML = "Guessed characters: " + guessedCharacterString;
	document.getElementById("guessesRemaining").innerHTML = "Guesses left: " + guesses;
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
}


function getNewWord() 
{
	chosenPlace = Math.floor(Math.random() * 3);
	activeWord = foodItems[chosenPlace];
}


function resetGame() 
{

	userFilled = [];
	
	userWord = "";
	
	chosenPlace = Math.floor(Math.random() * foodItems.length);
	
	while(positionOfLast == chosenPlace)
	{
		chosenPlace = Math.floor(Math.random() * foodItems.length);
	}

	activeWord = foodItems[chosenPlace];
	
	holdWord = activeWord;
	
	guessedCharacters = [];
	guessedCharacterString = "";
	
	guesses = 12;
	
	for(i = 0; i < activeWord.length; i++)
	{
		userFilled.push("_");
	}
	positionOfLast = chosenPlace;
}



//This button resets the entire game
button1.onclick = function()
{
	wins = 0;
	losses = 0;
	resetGame();
	document.getElementById("wordSlots").innerHTML = "Press a key to start!";
	document.getElementById("guessedCharacters").innerHTML = "Guessed characters: " + guessedCharacterString;
	document.getElementById("guessesRemaining").innerHTML = "Guesses left: " + guesses;
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
}