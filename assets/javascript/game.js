
window.onload=function () {
// ^ fix for "Cannot read property 'addEventListener' of null"; "document.querySelector(".start-button").addEventListener("click", function..." executing before DOM fully loads

// starts game
document.querySelector(".start-button").addEventListener("click", function(){
    
    // variables

    // guesses remaining div
    var guessesRemaining = "15";
    document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;

    // letters guessed div
    var lettersGuessed = "";
    document.querySelector(".letters-guessed").innerHTML = lettersGuessed;

    // list of words for computer to pick
    var wordList = ["html", "css", "javascript"];

    // computer picks random word from wordList; stored into computerChoice(str) 
    var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerChoice.split(""));

    // take length from word computer picked and stored into gameboardLength(int)
    var gameboardLength = computerChoice.length

    // empty array used to create underscores in p.gameboard
    var gameboard = []; 

    // start message
    document.querySelector(".start-msg").innerHTML = "Let's begin! Press any key to guess"

    // for loop creates underscores in Current Word div based on word length
    for (var i = 0; i < gameboardLength; i++){
        // adds underscores to var gameboard based on word length
        gameboard.push(" _ ");
        // takes var gameboard and pushes to p.gameboard
        document.querySelector(".gameboard").innerHTML = gameboard.join('');
    }
    console.log("gameboard:", gameboard);
    // console.log("gameboard[0]:", gameboard[0]);
    // console.log("computerChoice[0]:", computerChoice[0]);

    // listens for key presses
    document.addEventListener("keyup", function( event ) {

        // key presses stored into userGuess
        var userGuess = event.key;  

        // .split - splits randomly chosen word (computerChoice) into letters, then inserts into array 
        // .indexOf -  checks if keypresses (userGuess) match letter in array
        // === -1 means there is no match, !=== means there is a match
        if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
            
            // if userGuess matches a letter in computerChoice, find the index of that letter in computerChoice and store into gameboardIndex(int)
            var gameboardIndex = computerChoice.indexOf(userGuess);
            console.log("gameboardIndex: ", gameboardIndex);          
            // builds gameboard with userGuesses
            // for loop iterates over length of computerChoice (gameboardLength), checks each index of computerChoice, if userGuess is equal to the index, userGuess is set equal to that index in gameboard
            function gameboardBuilder () {
                for (var i = 0; i < gameboardLength; i++){
                    if (computerChoice[i] === userGuess) {
                        var checker = userGuess;
                        gameboard[i] = userGuess;
                        // console.log("---infunc/inif---");
                        // console.log("userGuess:", userGuess);
                        // console.log("computerChoice[i]:", computerChoice[i]);
                        // console.log("gameboard[i]:", gameboard[i]);
                        // console.log("gameboard:", gameboard);
                        // console.log("checker:", checker);
                    } 
                }

                // takes rebuilt gameboard and stores into p.gameboard div
                // .join(''); joins items in array into single string, eliminates commas in between underscores/letters
                document.querySelector(".gameboard").innerHTML = gameboard.join('');
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
