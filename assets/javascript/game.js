
window.onload=function () {
// ^ fix for "Cannot read property 'addEventListener' of null"; "document.querySelector(".start-button").addEventListener("click", function..." executing before DOM fully loads

// starts game
document.querySelector(".start-button").addEventListener("click", function(){
    
    // variables

    // counter for gameboard builds
    var counter = 0;

    // guess remaining div
    var guessesRemaining = "15";
    document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;

    // letters guessed div
    var lettersGuessed = "";
    document.querySelector(".letters-guessed").innerHTML = lettersGuessed;

    //stores list of correct guesses
    var gameboardIndexList = [];

    // list of words for computer to pick
    var wordList = ["html", "css", "javascript"];

    // computer picks random word from wordList; stored into computerChoice(str) 
    var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerChoice.split(""));

    // take length from word computer picked and stored into gameboardLength(int)
    var gameboardLength = computerChoice.length

    // empty variable used to create underscores
    var gameboard = []; 

    // start message
    document.querySelector(".start-msg").innerHTML = "Let's begin! Press any key to guess"

    // for loop creates underscores in Current Word div based on word length
    for (var i = 0; i < gameboardLength; i++){
        // adds underscores to var gameboard based on word length
        gameboard += "_ ";
        // takes var gameboard and inserts to div p.gameboard
        document.querySelector(".gameboard").innerHTML = gameboard;
    }
    console.log("gameboard: ", gameboard);
    // console.log("gameboard[0]: ", gameboard[0]);
    // console.log("computerChoice[0]: ", computerChoice[0]);

    // listens for key presses
    document.addEventListener("keyup", function( event ) {

        // key presses stored into var userGuess
        var userGuess = event.key;  

        //.split - splits randomly chosen word (computerChoice) into letters, then inserts into array 
        //.indexOf -  checks if keypresses (userGuess) match letter in array
        if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
            
            // if userGuess matches a letter in computerChoice, find the index of that letter in computerChoice and store into gameboardIndex(int)
            var gameboardIndex = computerChoice.indexOf(userGuess);
            console.log("gameboardIndex: ", gameboardIndex);

            // fromIndex used as starting point for nested if, if2
            var fromIndex = gameboardIndex + 1;

            // if2 checks if there are any repeating characters in letter, starts search at fromIndex, the next index over from the first matching guess; stores value in gameboardFromIndex (int)
            if (computerChoice.split("").indexOf(userGuess, fromIndex) !== -1 ) {
                var gameboardFromIndex = computerChoice.indexOf(userGuess, fromIndex);
                console.log("gameboardIndex: ", gameboardIndex)
                console.log("gameboardFromIndex: ", gameboardFromIndex)
            }

            // takes index of correct guess and stores into array, used for reference in gameboard rebuild
            // in progress...
            // for (var i = 0; i < gameboardIndexList.length; i++) {


            // }
            // gameboardIndexList.push(gameboardIndex);
            // console.log("gameboardIndexList: ", gameboardIndexList);
            


            // example: gameboard/userGuess
            // var blanks = ["_", "_", "_", "_", "_"];
            // function keyHandler(){
            //     var word = "blank";
            //     var userGuess = "a";
            //     for( var i = 0; i < word.length; i++ ){
            //         if( word[i] === userGuess ){
            //             blanks[i] = userGuess;
            //         }
            //     }
            // }


            // if (counter === 0) {
            //     gameboard = "";
            // }

            // gameboardBuilding v1.0
            // gameboard = "";
            // // for loop - gameboard rebuild
            // // adds functionality to add userGuess to gameboard
            // function gameboardBuilder () {
            //     for (var i = 0; i < gameboardLength; i++){
            //         if (i === gameboardIndex) {
            //             gameboard += userGuess + " ";
            //         } else {
            //             // adds underscores to var gameboard based on word length
            //             gameboard += "_ ";
            //             // takes var gameboard and inserts to div p.gameboard
            //         }
            //         counter++;
                    
            //     }
            //     // takes rebuilt gameboard and stores into p.gameboard div
            //     document.querySelector(".gameboard").innerHTML = gameboard;
            //     console.log(gameboard);
            // }
            // gameboardBuilder();

            // gameboardBuilding v2.0
            // gameboard = "";
            // for loop - gameboard rebuild
            // adds functionality to add userGuess to gameboard
            function gameboardBuilder () {
                for (var i = 0; i < gameboardLength; i++){
                    if (computerChoice[i] === userGuess) {
                        gameboard[i] = userGuess;
                        console.log("---infunc/inif---");
                        console.log("computerChoice:", computerChoice[i]);
                        console.log("gameboard:", gameboard[i]);
                        console.log("userGuess:", userGuess);
                    } 
                    
                }
                // takes rebuilt gameboard and stores into p.gameboard div
                document.querySelector(".gameboard").innerHTML = gameboard;
                // console.log("inside func, gameboard: ", gameboard);
                // console.log("inside func, userGuess: ", userGuess);
                // console.log("inside func, gameboard[0]: ", gameboard[0]);
                // console.log("inside func, computerChoice[0]: ", computerChoice[0]);
                // console.log("inside func, computerChoice: ", computerChoice);
                
            }
            gameboardBuilder();



        // end of: if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
        } else {
            
            lettersGuessed += userGuess;
            document.querySelector(".letters-guessed").innerHTML = userGuess;
            
            guessesRemaining -= 1;
            document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
        }

    // end of: document.addEventListener("keyup", function( event ) {
    });

// end of: document.querySelector(".start-button").addEventListener("click", function(){
});

// end of: window.onload=function () {
}
