
window.onload=function () {
// ^ fix for "Cannot read property 'addEventListener' of null"; executing before DOM fully loads

// starts game
document.querySelector(".start-button").addEventListener("click", function(){

    // start message
    document.querySelector(".start-msg").innerHTML = "Let's begin! Press any key to guess"

    // list of words
    var wordList = ["html", "css", "javascript"];

    // computer picks random word from wordList; stored into computerChoice(str) 
    var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerChoice.split(""));

    // take length from word computer picked and stored into gameboardLength(int)
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
    
    // listens for key presses
    document.addEventListener("keyup", function( event ) {
        // key presses stored into var userGuess
        var userGuess = event.key;  

        //.split - splits randomly chosen word (computerChoice) into letters, then inserts into array 
        //.indexOf -  checks if keypresses (userGuess) match letter in computerChoice word
        if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
            // if userGuess matches a letter in computerChoice, find the index of that letter in computerChoice and store into gameboardIndex(int)
            var gameboardIndex = computerChoice.indexOf(userGuess);
            // fromIndex used as starting point for nested if, if2
            var fromIndex = gameboardIndex + 1;
            
            // if2 checks if there are any repeating characters in letter, starts search at fromIndex, which is the next index over from the first matching guess; stores value in gameboardFromIndex (int)
            if (computerChoice.split("").indexOf(userGuess, fromIndex) !== -1 ) {
                var gameboardFromIndex = computerChoice.indexOf(userGuess, fromIndex);
            console.log("gameboardIndex: ", gameboardIndex)
            console.log("gameboardFromIndex: ", gameboardFromIndex)
            }

            // for loop creates gameboard
            // adding functionality to add userGuess to gameboard
            gameboard = "";
            for (i = 0; i < gameboardLength; i++){
                if (i === gameboardIndex) {
                    gameboard += userGuess + " ";
                } else {
                    // adds underscores to var gameboard based on word length
                    gameboard += "_ ";
                    // takes var gameboard and inserts to div p.gameboard
                }
                document.querySelector(".gameboard").innerHTML = gameboard;
            }




        }


    });

    
    
    
});

}
