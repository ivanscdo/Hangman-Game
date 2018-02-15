
window.onload=function () {
// ^ fix for "Cannot read property 'addEventListener' of null"; executing before DOM fully loads

// starts game
document.querySelector(".start-button").addEventListener("click", function(){

    // start message
    document.querySelector(".start-msg").innerHTML = "Let's begin! Press any key to guess"

    // list of words
    var wordList = ["html", "css", "javascript"];

    // computer picks random word from var wordList; stored into var computerChoice(str) 
    var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerChoice.split(""));

    // take length from word computer picked and stored into var gameboardLength(int)
    var gameboardLength = computerChoice.length

    // empty variable used to create underscores
    var gameboard = ""; 

    // for loop creates underscores in Current Word div based on word length
    for (i = 0; i < gameboardLength; i++){
        // adds underscores to var gameboard based on word length
        gameboard += "_ ";
        // takes var gameboard and inserts to div p.gameboard
        document.querySelector(".gameboard").innerHTML = gameboard;
    }

    console.log("gameboard: ", gameboard);
    


    document.addEventListener("keyup", function( event ) {
        // key presses stored into var userGuess
        var userGuess = event.key;  

        //.split - splits randomly chosen word (computerChoice) into letters, then inserts in array 
        //.indexOf -  checks if keypresses (userGuess) match letter in computerChoice word
        if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
            var gameboardIndex = computerChoice.indexOf(userGuess);
            console.log(gameboardIndex)

            // for loop creates underscores in Current Word div based on word length
            // adding functionality to add userGuess
            gameboard = "";
            for (i = 0; i < gameboardLength; i++){
                if (i === gameboardIndex) {
                    gameboard += userGuess + " ";
                } else {
                    // adds underscores to var gameboard based on word length
                    gameboard += "_ ";
                    // takes var gameboard and inserts to div p.gameboard
                    document.querySelector(".gameboard").innerHTML = gameboard;
                }

            }




        }


    });

    
    
    
});

}
