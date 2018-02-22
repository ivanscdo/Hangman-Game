// window.onload=function () {
    // ^ fix for "Cannot read property 'addEventListener' of null"; "document.querySelector(".start-button").addEventListener("click", function..." executing before DOM fully loads

    // var winCounter = ""; needs to be int, "" turns it to str
    var winCounter = 0;

    var uniqueGuesses = [];

    var lettersGuessed = [];

    var uniqueGuessesInnerHTML = "";

    

    


    document.querySelector(".bing-heading").style.visibility = "hidden";
    document.querySelector(".duckduckgo-headingMain").style.visibility = "hidden";
    document.querySelector(".duckduckgo-headingSub").style.visibility = "visible";
    document.querySelector(".duckduckgo-headingMain").style.display = "none";
    
    // starts game
    document.querySelector(".start-button").addEventListener("click", function(){ 
    
        // variables

        // guesses-remaining div
        var guessesRemaining = 15; //had as str needs to be int
        document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
    
        // letters-guessed div
        lettersGuessed = [];
        document.querySelector(".letters-guessed").innerHTML = lettersGuessed;
    
        // list of words for computer to pick
        var wordList = ["google", "bing", "duckduckgo"];


        var computerChoice = "";
   
        
    
        // computer picks random word from wordList; stored into computerChoice(str) 
        computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
        // console.log(computerChoice.split(""));
    
        // start message
        var startMessage = document.querySelector(".start-msg")
        startMessage.innerHTML = "Let's begin! Press any key to guess";

        // empty array used to create underscores in p.gameboard
        var gameboard = []; 
                
        // take length from word computer picked and stored into gameboardLength(int)
        var gameboardLength = computerChoice.length;
    
        // for loop creates underscores in Current Word div based on word length
        for (var i = 0; i < gameboardLength; i++){
            // adds underscores to var gameboard based on word length
            gameboard.push(" _ ");
            // takes var gameboard and pushes to p.gameboard
            console.log("gameboard initial forloop:", gameboard);
            
        }

        document.querySelector(".gameboard").innerHTML = gameboard.join('');
        // console.log("gameboard:", gameboard);
        // console.log("gameboard[0]:", gameboard[0]);
        // console.log("computerChoice[0]:", computerChoice[0]);

        function themeChanger () {
            if (computerChoice === "google") {

                document.body.style.backgroundColor = "white";

                document.body.style.backgroundImage = "url('')";

                document.body.style.color = "black";

                document.querySelector(".chrome-b").style.color = "blue";
                document.querySelector(".chrome-r").style.color = "red";
                document.querySelector(".chrome-y").style.color = "yellow";
                document.querySelector(".chrome-g").style.color = "green";
                document.querySelector(".chrome-g2").style.color = "green";
                document.querySelector(".chrome-b2").style.color = "blue";
                document.querySelector(".chrome-r3").style.color = "red";

                document.querySelector(".bing-heading").style.visibility = "hidden";

                document.querySelector(".chrome-b").style.visibility = "visible";
                document.querySelector(".chrome-r").style.visibility = "visible";
                document.querySelector(".chrome-y").style.visibility = "visible";
                document.querySelector(".chrome-g").style.visibility = "visible";
                document.querySelector(".chrome-g2").style.visibility = "visible";
                document.querySelector(".chrome-b2").style.visibility = "visible";
                document.querySelector(".chrome-r3").style.visibility = "visible";

                document.querySelector(".duckduckgo-headingMain").style.visibility = "hidden";
                document.querySelector(".duckduckgo-headingSub").style.visibility = "visible";

                document.querySelector(".duckduckgo-headingMain").style.display = "none";
                document.querySelector(".duckduckgo-headingSub").style.display = "flex";

                document.querySelector(".header").style.display = "inline";

            } else if (computerChoice === "bing") {

                document.body.style.backgroundImage = "url('../Hangman-Game/assets/images/bing.jpg')";
                document.body.style.color = "white";

                document.querySelector(".title").style.color = "white";

                document.querySelector(".bing-heading").style.visibility = "visible";

                document.querySelector(".chrome-b").style.visibility = "hidden";
                document.querySelector(".chrome-r").style.visibility = "hidden";
                document.querySelector(".chrome-y").style.visibility = "hidden";
                document.querySelector(".chrome-g").style.visibility = "hidden";
                document.querySelector(".chrome-g2").style.visibility = "hidden";
                document.querySelector(".chrome-b2").style.visibility = "hidden";
                document.querySelector(".chrome-r3").style.visibility = "hidden";

                document.querySelector(".duckduckgo-headingMain").style.visibility = "hidden";
                document.querySelector(".duckduckgo-headingSub").style.visibility = "visible";

                document.querySelector(".duckduckgo-headingMain").style.display = "none";
                document.querySelector(".duckduckgo-headingSub").style.display = "flex";

                document.querySelector(".header").style.display = "inline";

            } else if (computerChoice === "duckduckgo") {

                document.body.style.backgroundImage = "url('')";

                document.body.style.color = "black";

                document.querySelector(".bing-heading").style.visibility = "hidden";

                document.querySelector(".chrome-b").style.visibility = "hidden";
                document.querySelector(".chrome-r").style.visibility = "hidden";
                document.querySelector(".chrome-y").style.visibility = "hidden";
                document.querySelector(".chrome-g").style.visibility = "hidden";
                document.querySelector(".chrome-g2").style.visibility = "hidden";
                document.querySelector(".chrome-b2").style.visibility = "hidden";
                document.querySelector(".chrome-r3").style.visibility = "hidden";

                document.querySelector(".duckduckgo-headingMain").style.visibility = "visible";
                // document.querySelector(".duckduckgo-headingSub").style.visibility = "hidden";

                document.querySelector(".duckduckgo-headingMain").style.display = "inline";
                document.querySelector(".duckduckgo-headingSub").style.display = "none";

                document.querySelector(".header").style.display = "none";

                document.querySelector(".duckduckSearch").style.alignContent = "center";

         
                
            } 
        }

        themeChanger();
        

        // listens for key presses
        document.addEventListener("keyup", function( event ) {
    
            // key presses stored into userGuess
            var userGuess = event.key;

    
    
            // all userGuesses stored in array
            // masterGuessList.push(userGuess);
            // console.log("masterGuessList:", masterGuessList);
            // console.log("userGuess:", userGuess);
            
    
            // .split - splits randomly chosen word (computerChoice) into letters, then inserts into array 
            // .indexOf -  checks if keypresses (userGuess) match letter in array
            // === -1 means there is no match, !=== means there is a match
            if (computerChoice.split("").indexOf(userGuess) !== -1 ) {

                console.log("computerChoice:", computerChoice);
                console.log("userGuess:", userGuess);
                
                
                // if userGuess matches a letter in computerChoice, find the index of that letter in computerChoice and store into gameboardIndex(int)
                var gameboardIndex = computerChoice.indexOf(userGuess);
                // console.log("gameboardIndex: ", gameboardIndex);          
                // builds gameboard with userGuesses
                // for loop iterates over length of computerChoice (gameboardLength), checks each index of computerChoice, if userGuess is equal to the index, userGuess is set equal to that index in gameboard
                function gameboardBuilder () {
                    for (var i = 0; i < gameboardLength; i++){
                        if (computerChoice[i] === userGuess) {
                            gameboard[i] = userGuess;
                            // console.log("---infunc/inif---");
                            // console.log("userGuess:", userGuess);
                            // console.log("computerChoice[i]:", computerChoice[i]);
                            // console.log("gameboard[i]:", gameboard[i]);
                            // console.log("gameboard:", gameboard);
                        } 
                        console.log("gameboard inside builder:", gameboard)
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
    
                
                    // game wins
                    function gameWinner () {
                        startMessage.innerHTML = "You Win!";
                        // document.querySelector(".start-button").innerHTML = "Play Again!";
                        // document.querySelector(".start-button").addEventListener("click", function(){
                        //         location.reload();
                        // });
                        winCounter += 1;                        
                        document.querySelector(".game-winner").innerHTML = winCounter;
                        computerChoice = "";
                        // gameboard.join() = [];
                        // winCounter = 0;
                        lettersGuessed = [];
                        uniqueGuesses = [];
                        // userGuess = "";
                        // guessesRemaining = 15;
                        gameboard = [];
                        // wordList = [];
                        // gameboard = gameboard.splice();
                        // gameboard.splice(0,gameboard.length);
                        console.log("gameboard gameWinner:", gameboard);

        


                    }

                    if (gameboard.join('') === computerChoice ) {
                        gameWinner();
                    }
                    
             

                // console.log(userGuess);
                // console.log("gameboard after wins:", gameboard);
                // console.log(computerChoice);
                
    
    
    
    
    
    
    
            // end of: if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
            } else {

                if (computerChoice.split("").indexOf(userGuess) === -1 ) {
                    // lettersGuessed = [];
                    // all userGuesses that don't match computerChoice pushed into letterGuessed array
                    lettersGuessed.push(userGuess);
                    // create function to check for repeating guesses

                    // empty array used for func noRepeatingGuesses
                    uniqueGuesses = [];
                    function noRepeatingGuesses(arr) {
                        // create empty array where unique guesses will be stored
                        uniqueGuesses = [];
                        // for loop iterates over the length of all userGuesses
                        for (var i = 0; i < lettersGuessed.length; i++) {
                            // check each index in the new array to see if any userGuess is already in there
                            if (uniqueGuesses.indexOf(arr[i]) === -1) {
                                // if it's already in there do nothing, if not (=== -1) then add userGuess
                                uniqueGuesses.push(arr[i]);
                            }
                        }
                        // return new array of uniqueGuesses (non repeating)
                        return uniqueGuesses;
                        
                    }
                    noRepeatingGuesses(lettersGuessed);
                    uniqueGuessesInnerHTML = noRepeatingGuesses(lettersGuessed);
                    // add new array to p.letters-guessed
                    document.querySelector(".letters-guessed").innerHTML = uniqueGuessesInnerHTML;
                    console.log("lettersGuessed:", lettersGuessed);
                    console.log("uniqueGuesses:", noRepeatingGuesses(lettersGuessed));
                    // console.log("userGuess:", userGuess);
                    
        
                    guessesRemaining -= 1;
                    document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
        
        
        
                    
                    
                    //// create new function for Guesses Remaining div, if userGuess already in letters guessed (noRepeatingGuesses(lettersGuessed)), it will not countdown
                    // function guessesRemainingFix () {
                    //     // for loop iterates over length of unique letters guessed ( noRepeatingGuesses(lettersGuessed); )
                    //     for (var i = 0; i < masterGuessList.length; i++ ) {
                    //         if ( userGuess !== masterGuessList[i]) {
                    //             guessesRemaining -= 1;
                    //             document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
                    //             console.log("[i]", [i]);
                    //             console.log("masterGuessList[i]", masterGuessList[i]);
                    //         } 
                    //     }
                    // }
                    // guessesRemainingFix();
                    // console.log("guessesRemaining:", guessesRemaining);

                    console.log("userGuess:", userGuess);
                    console.log("gameboard:", gameboard);


                // end of: if (computerChoice.split("").indexOf(userGuess) === -1 ) {
                }
                
               
               
    
            // end of: else {
            }
    
        // end of: document.addEventListener("keyup", function( event ) {
        });

        console.log("---end---");
    
    // end of: document.querySelector(".start-button").addEventListener("click", function(){
    });
    
    // end of: window.onload=function () {
    // }
    