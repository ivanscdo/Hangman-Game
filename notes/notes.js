// v1.0 - v1.0 - v1.0 - v1.0 - v1.0 - v1.0 - v1.0 - v1.0 - v1.0 - v1.0 - v1.0 - v1.0 - 
// 1st draft
// //listening for user key press
// document.addEventListener("keyup", function( event ) {
//     // create variables
//     counter = 0;
//     var wordList = ["html", "css", "javascript"];
//     var gameboard = []; 
//     // start msg changes "Press any key" to "Let's Begin!" 
//     var startMsg = document.querySelector(".start-msg")
//     startMsg.innerHTML = "Let's begin!"

//     // key press into variable userGuess
//     var userGuess = event.key;
//     // console.log(userGuess);

//     // computer picks random word from wordList; stored into variable computerChoice
//     var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    
//     // console.log(computerChoice, "-",  computerChoice.length)

//     // console.log(computerChoice.split("").indexOf(x));

//     // take length from word computer picked and stored into variable gameboardLength
//     var gameboardLength = computerChoice.length
       
//     // for loop creates underscores based on word length in Current Word div
//     for (i = 0; i < gameboardLength; i++){
//         gameboard.unshift("_");
        
//         var unshiftGameboard = document.querySelector(".gameboard")
 
//         unshiftGameboard.innerHTML = gameboard
//     }
//     gameboard = [];
    // counter = counter + 1;
    // console.log(counter);
    // return counter;


// });
// console.log(counter);



// v2.0 - v2.0 - v2.0 - v2.0 - v2.0 - v2.0 - v2.0 - v2.0 - v2.0 - v2.0 - v2.0 - v2.0 - 
// switched to start button
// window.onload=function () {
//     // ^ fix for "Cannot read property 'addEventListener' of null"; executing before DOM fully loads
    
//     // starts game
//     document.querySelector(".start-button").addEventListener("click", function(){
    
//         // start message
//         document.querySelector(".start-msg").innerHTML = "Let's begin! Press any key to guess"
    
//         // list of words
//         var wordList = ["html", "css", "javascript"];
    
//         // computer picks random word from var wordList; stored into var computerChoice(str) 
//         var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
//         console.log(computerChoice.split(""));
    
//         // take length from word computer picked and stored into var gameboardLength(int)
//         var gameboardLength = computerChoice.length
    
//         // empty variable used to create underscores
//         var gameboard = ""; 
    
//         // for loop creates underscores in Current Word div based on word length
//         for (i = 0; i < gameboardLength; i++){
//             // adds underscores to var gameboard based on word length
//             gameboard += "_ ";
//             // takes var gameboard and inserts to div p.gameboard
//             document.querySelector(".gameboard").innerHTML = gameboard;
//         }
    
//         console.log("gameboard: ", gameboard);
        
    
    
//         document.addEventListener("keyup", function( event ) {
//             // key presses stored into var userGuess
//             var userGuess = event.key;  
    
//             //.split - splits randomly chosen word (computerChoice) into letters, then inserts in array 
//             //.indexOf -  checks if keypresses (userGuess) match letter in computerChoice word
//             if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
//                 // console.log("user guess matched letter in word!");
//                 // console.log("indexOf computerChoice: ", computerChoice.indexOf(event.key));
    
                
//                 var gameboardIndex = computerChoice.indexOf(userGuess);
//                 // console.log(gameboard[gameboardIndex])
//                 document.querySelector(".gameboard")[gameboardIndex].innerHTML = userGuess;
//             }
//         });
//     });
//     }


// v2.0.1 - v2.0.1 - v2.0.1 - v2.0.1 - v2.0.1 - v2.0.1 - v2.0.1 - v2.0.1 - v2.0.1 - 
// change to document.addEventListener only; matching userGuess to Current Word div
// document.addEventListener("keyup", function( event ) {
//     // key presses stored into var userGuess
//     var userGuess = event.key;  

//     //.split - splits randomly chosen word (computerChoice) into letters, then inserts in array 
//     //.indexOf -  checks if keypresses (userGuess) match letter in computerChoice word
//     if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
//         var gameboardIndex = computerChoice.indexOf(userGuess);
//         // console.log(gameboard[gameboardIndex])
//         // document.querySelector(".gameboard")[gameboardIndex].innerHTML = userGuess;

//         //msg confirming if works:
//         // console.log("user guess matched letter in word!");
//         // console.log("indexOf computerChoice: ", computerChoice.indexOf(event.key));

//         // for loop creates underscores in Current Word div based on word length
//         // adding functionality to add userGuess
//         gameboard = "";
//         for (i = 0; i < gameboardLength; i++){
//             if (i === gameboardIndex) {
//                 gameboard += userGuess + " ";
//             } else {
//                 // adds underscores to var gameboard based on word length
//                 gameboard += "_ ";
//                 // takes var gameboard and inserts to div p.gameboard
//                 document.querySelector(".gameboard").innerHTML = gameboard;
//             }
//         }
//     }
// });

// v2.1 - v2.1 - v2.1 - v2.1 - v2.1 - v2.1 - v2.1 - v2.1 - v2.1 - v2.1 - v2.1 - v2.1 - 
// fixed issue with multiple same characters, found index for second character
// window.onload=function () {
//     // ^ fix for "Cannot read property 'addEventListener' of null"; executing before DOM fully loads
    
//     // starts game
//     document.querySelector(".start-button").addEventListener("click", function(){
    
//         // start message
//         document.querySelector(".start-msg").innerHTML = "Let's begin! Press any key to guess"
    
//         // list of words
//         var wordList = ["html", "css", "javascript"];
    
//         // computer picks random word from wordList; stored into computerChoice(str) 
//         var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
//         console.log(computerChoice.split(""));
    
//         // take length from word computer picked and stored into gameboardLength(int)
//         var gameboardLength = computerChoice.length
    
//         // empty variable used to create underscores
//         var gameboard = ""; 
    
//         // for loop creates underscores in Current Word div based on word length
//         for (i = 0; i < gameboardLength; i++){
//             // adds underscores to var gameboard based on word length
//             gameboard += "_ ";
//             // takes var gameboard and inserts to div p.gameboard
//             document.querySelector(".gameboard").innerHTML = gameboard;
//         }
//         console.log("gameboard: ", gameboard);
        
//         // listens for key presses
//         document.addEventListener("keyup", function( event ) {
//             // key presses stored into var userGuess
//             var userGuess = event.key;  
    
//             //.split - splits randomly chosen word (computerChoice) into letters, then inserts into array 
//             //.indexOf -  checks if keypresses (userGuess) match letter in computerChoice word
//             if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
//                 // if userGuess matches a letter in computerChoice, find the index of that letter in computerChoice and store into gameboardIndex(int)
//                 var gameboardIndex = computerChoice.indexOf(userGuess);
//                 // fromIndex used as starting point for nested if, if2
//                 var fromIndex = gameboardIndex + 1;
                
//                 // if2 checks if there are any repeating characters in letter, starts search at fromIndex, which is the next index over from the first matching guess; stores value in gameboardFromIndex (int)
//                 if (computerChoice.split("").indexOf(userGuess, fromIndex) !== -1 ) {
//                     var gameboardFromIndex = computerChoice.indexOf(userGuess, fromIndex);
//                 console.log("gameboardIndex: ", gameboardIndex)
//                 console.log("gameboardFromIndex: ", gameboardFromIndex)
//                 }
    
//                 // for loop creates gameboard
//                 // adding functionality to add userGuess to gameboard
//                 gameboard = "";
//                 for (i = 0; i < gameboardLength; i++){
//                     if (i === gameboardIndex) {
//                         gameboard += userGuess + " ";
//                     } else {
//                         // adds underscores to var gameboard based on word length
//                         gameboard += "_ ";
//                         // takes var gameboard and inserts to div p.gameboard
//                     }
//                     document.querySelector(".gameboard").innerHTML = gameboard;
//                 }
//             }
//         }); 
//     });
//     }



//// v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 -  v3.0 - 
// window.onload=function () {
//     // ^ fix for "Cannot read property 'addEventListener' of null"; "document.querySelector(".start-button").addEventListener("click", function..." executing before DOM fully loads
    
//     // starts game
//     document.querySelector(".start-button").addEventListener("click", function(){
        
//         // variables
    
//         // guesses remaining div
//         var guessesRemaining = "15";
//         document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
    
//         // letters guessed div
//         var lettersGuessed = [];
//         document.querySelector(".letters-guessed").innerHTML = lettersGuessed;
    
//         // list of words for computer to pick
//         var wordList = ["html", "css", "javascript"];
    
//         // computer picks random word from wordList; stored into computerChoice(str) 
//         var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
//         console.log(computerChoice.split(""));
    
//         // take length from word computer picked and stored into gameboardLength(int)
//         var gameboardLength = computerChoice.length
    
//         // empty array used to create underscores in p.gameboard
//         var gameboard = []; 
    
//         // start message
//         document.querySelector(".start-msg").innerHTML = "Let's begin! Press any key to guess"
    
//         // for loop creates underscores in Current Word div based on word length
//         for (var i = 0; i < gameboardLength; i++){
//             // adds underscores to var gameboard based on word length
//             gameboard.push(" _ ");
//             // takes var gameboard and pushes to p.gameboard
//             document.querySelector(".gameboard").innerHTML = gameboard.join('');
//         }
//         console.log("gameboard:", gameboard);
//         // console.log("gameboard[0]:", gameboard[0]);
//         // console.log("computerChoice[0]:", computerChoice[0]);
    
//         // listens for key presses
//         document.addEventListener("keyup", function( event ) {
    
//             // key presses stored into userGuess
//             var userGuess = event.key;  
    
//             // .split - splits randomly chosen word (computerChoice) into letters, then inserts into array 
//             // .indexOf -  checks if keypresses (userGuess) match letter in array
//             // === -1 means there is no match, !=== means there is a match
//             if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
                
//                 // if userGuess matches a letter in computerChoice, find the index of that letter in computerChoice and store into gameboardIndex(int)
//                 var gameboardIndex = computerChoice.indexOf(userGuess);
//                 console.log("gameboardIndex: ", gameboardIndex);          
//                 // builds gameboard with userGuesses
//                 // for loop iterates over length of computerChoice (gameboardLength), checks each index of computerChoice, if userGuess is equal to the index, userGuess is set equal to that index in gameboard
//                 function gameboardBuilder () {
//                     for (var i = 0; i < gameboardLength; i++){
//                         if (computerChoice[i] === userGuess) {
//                             var checker = userGuess;
//                             gameboard[i] = userGuess;
//                             // console.log("---infunc/inif---");
//                             // console.log("userGuess:", userGuess);
//                             // console.log("computerChoice[i]:", computerChoice[i]);
//                             // console.log("gameboard[i]:", gameboard[i]);
//                             // console.log("gameboard:", gameboard);
//                             // console.log("checker:", checker);
//                         } 
//                     }
    
//                     // takes rebuilt gameboard and stores into p.gameboard div
//                     // .join(''); joins items in array into single string, eliminates commas in between underscores/letters
//                     document.querySelector(".gameboard").innerHTML = gameboard.join('');
//                     // console.log("inside func, gameboard: ", gameboard);
//                     // console.log("inside func, userGuess: ", userGuess);
//                     // console.log("inside func, gameboard[0]: ", gameboard[0]);
//                     // console.log("inside func, computerChoice[0]: ", computerChoice[0]);
//                     // console.log("inside func, computerChoice: ", computerChoice);
//                 }
//                 gameboardBuilder();
    
    
    
//             // end of: if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
//             } else {
                
//                 // all userGuesses pushed into letterGuessed array
//                 lettersGuessed.push(userGuess);
//                 // create function to check for repeating guesses
//                 function noRepeatingGuesses(arr) {
//                     // create empty array where unique guesses will be stored
//                     var uniqueGuesses = [];
//                     // for loop iterates over the length of all userGuesses
//                     for (var i = 0; i < lettersGuessed.length; i++) {
//                         // check each index in the new array to see if any userGuess is already in there
//                         if (uniqueGuesses.indexOf(arr[i]) === -1) {
//                             // if it's already in there do nothing, if not (=== -1) then add userGuess
//                             uniqueGuesses.push(arr[i])
//                         }
//                     }
//                     // return new array of uniqueGuesses (non repeating)
//                     return uniqueGuesses
                    
//                 }
//                 // add new array to p.letters-guessed
//                 document.querySelector(".letters-guessed").innerHTML = noRepeatingGuesses(lettersGuessed);
//                 console.log("lettersGuessed:", lettersGuessed);
//                 console.log("uniqueGuesses:", noRepeatingGuesses(lettersGuessed));
//                 console.log("userGuess:", userGuess);
                
    
//                 // guessesRemaining -= 1;
//                 // document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
                
//                 //// create new function for Guesses Remaining div, if userGuess already in letters guessed (noRepeatingGuesses(lettersGuessed)), it will not countdown
//                 function guessesRemainingFix () {
//                     // for loop iterates over length of unique letters guessed ( noRepeatingGuesses(lettersGuessed); )
//                     for (var i = 0; i < lettersGuessed.length; i++ ) {
//                         if ( userGuess === lettersGuessed[i] ) {
//                             document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
//                         } else {
//                             guessesRemaining -= 1;
//                             document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
//                         }
//                     }
//                 }
    
//                 guessesRemainingFix();
//                 console.log("guessesRemaining:", guessesRemaining);
    
//             // end of: else {
//             }
    
//         // end of: document.addEventListener("keyup", function( event ) {
//         });
    
//     // end of: document.querySelector(".start-button").addEventListener("click", function(){
//     });
    
//     // end of: window.onload=function () {
//     }


//v3.1
// window.onload=function () {
//     // ^ fix for "Cannot read property 'addEventListener' of null"; "document.querySelector(".start-button").addEventListener("click", function..." executing before DOM fully loads
    
//     // starts game
//     document.querySelector(".start-button").addEventListener("click", function(){
    
    
    
//         // document.querySelector(".start-button").innerHTML = "";
    
        
    
//         // variables
    
//         // guesses remaining div
//         var guessesRemaining = "15";
//         document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
    
//         // letters guessed div
//         var lettersGuessed = [];
//         document.querySelector(".letters-guessed").innerHTML = lettersGuessed;
    
//         // list of words for computer to pick
//         var wordList = ["chrome", "firefox", "safari", "opera"];
    
//         var computerChoice = "";
    
//         // computer picks random word from wordList; stored into computerChoice(str) 
//         computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
//         // console.log(computerChoice.split(""));
    
//         // take length from word computer picked and stored into gameboardLength(int)
//         var gameboardLength = computerChoice.length;
    
//         // empty array used to create underscores in p.gameboard
//         var gameboard = []; 
    
//         // empty array used for func noRepeatingGuesses
//         var uniqueGuesses = [];
    
//         var userGuess = "";
    
//         var winCounter = "";
       
    
//         // start message
//         var startMessage = document.querySelector(".start-msg")
//         startMessage.innerHTML = "Let's begin! Press any key to guess";
    
//         // for loop creates underscores in Current Word div based on word length
//         for (var i = 0; i < gameboardLength; i++){
//             // adds underscores to var gameboard based on word length
//             gameboard.push(" _ ");
//             // takes var gameboard and pushes to p.gameboard
//             document.querySelector(".gameboard").innerHTML = gameboard.join('');
//         }
//         // console.log("gameboard:", gameboard);
//         // console.log("gameboard[0]:", gameboard[0]);
//         // console.log("computerChoice[0]:", computerChoice[0]);
    
//         // listens for key presses
//         document.addEventListener("keyup", function( event ) {
    
//             // key presses stored into userGuess
//             var userGuess = event.key;
    
    
//             // all userGuesses stored in array
//             // masterGuessList.push(userGuess);
//             // console.log("masterGuessList:", masterGuessList);
//             // console.log("userGuess:", userGuess);
            
    
//             // .split - splits randomly chosen word (computerChoice) into letters, then inserts into array 
//             // .indexOf -  checks if keypresses (userGuess) match letter in array
//             // === -1 means there is no match, !=== means there is a match
//             if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
                
                
//                 // if userGuess matches a letter in computerChoice, find the index of that letter in computerChoice and store into gameboardIndex(int)
//                 var gameboardIndex = computerChoice.indexOf(userGuess);
//                 // console.log("gameboardIndex: ", gameboardIndex);          
//                 // builds gameboard with userGuesses
//                 // for loop iterates over length of computerChoice (gameboardLength), checks each index of computerChoice, if userGuess is equal to the index, userGuess is set equal to that index in gameboard
//                 function gameboardBuilder () {
//                     for (var i = 0; i < gameboardLength; i++){
//                         if (computerChoice[i] === userGuess) {
//                             gameboard[i] = userGuess;
//                             // console.log("---infunc/inif---");
//                             // console.log("userGuess:", userGuess);
//                             // console.log("computerChoice[i]:", computerChoice[i]);
//                             // console.log("gameboard[i]:", gameboard[i]);
//                             // console.log("gameboard:", gameboard);
//                         } 
//                     }
    
//                     // takes rebuilt gameboard and stores into p.gameboard div
//                     // .join(''); joins items in array into single string, eliminates commas in between underscores/letters
//                     document.querySelector(".gameboard").innerHTML = gameboard.join('');
//                     // console.log("inside func, gameboard: ", gameboard);
//                     // console.log("inside func, userGuess: ", userGuess);
//                     // console.log("inside func, gameboard[0]: ", gameboard[0]);
//                     // console.log("inside func, computerChoice[0]: ", computerChoice[0]);
//                     // console.log("inside func, computerChoice: ", computerChoice);
//                 }
//                 gameboardBuilder();
    
//                 function gameWinner () {
//                     if (gameboard.join('') === computerChoice ) {
//                         startMessage.innerHTML = "You Win!";
//                         // document.querySelector(".start-button").innerHTML = "Play Again!";
//                         // document.querySelector(".start-button").addEventListener("click", function(){
//                         //         location.reload();
//                         // });
//                         document.querySelector(".game-winner").innerHTML += 1;
//                     }
//                 }
//                 gameWinner();
                
    
    
    
    
    
    
    
//             // end of: if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
//             } else {
                
//                 // all userGuesses that don't match computerChoice pushed into letterGuessed array
//                 lettersGuessed.push(userGuess);
//                 // create function to check for repeating guesses
//                 function noRepeatingGuesses(arr) {
//                     // create empty array where unique guesses will be stored
//                     uniqueGuesses = [];
//                     // for loop iterates over the length of all userGuesses
//                     for (var i = 0; i < lettersGuessed.length; i++) {
//                         // check each index in the new array to see if any userGuess is already in there
//                         if (uniqueGuesses.indexOf(arr[i]) === -1) {
//                             // if it's already in there do nothing, if not (=== -1) then add userGuess
//                             uniqueGuesses.push(arr[i]);
//                         }
//                     }
//                     // return new array of uniqueGuesses (non repeating)
//                     return uniqueGuesses;
                    
//                 }
//                 // add new array to p.letters-guessed
//                 document.querySelector(".letters-guessed").innerHTML = noRepeatingGuesses(lettersGuessed);
//                 // console.log("lettersGuessed:", lettersGuessed);
//                 // console.log("uniqueGuesses:", noRepeatingGuesses(lettersGuessed));
//                 // console.log("userGuess:", userGuess);
                
    
//                 guessesRemaining -= 1;
//                 document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
    
    
    
                
                
//                 //// create new function for Guesses Remaining div, if userGuess already in letters guessed (noRepeatingGuesses(lettersGuessed)), it will not countdown
//                 // function guessesRemainingFix () {
//                 //     // for loop iterates over length of unique letters guessed ( noRepeatingGuesses(lettersGuessed); )
//                 //     for (var i = 0; i < masterGuessList.length; i++ ) {
//                 //         if ( userGuess !== masterGuessList[i]) {
//                 //             guessesRemaining -= 1;
//                 //             document.querySelector(".guesses-remaining").innerHTML = guessesRemaining;
//                 //             console.log("[i]", [i]);
//                 //             console.log("masterGuessList[i]", masterGuessList[i]);
//                 //         } 
//                 //     }
//                 // }
//                 // guessesRemainingFix();
//                 // console.log("guessesRemaining:", guessesRemaining);
               
    
//             // end of: else {
//             }
    
//         // end of: document.addEventListener("keyup", function( event ) {
//         });
    
//     // end of: document.querySelector(".start-button").addEventListener("click", function(){
//     });
    
//     // end of: window.onload=function () {
//     }
    
    
    



    
    






// TESTS -  TESTS -  TESTS -  TESTS -  TESTS -  TESTS -  TESTS -  TESTS -  TESTS -  TESTS - 


// // test functionality of .split.indexof - success!

// document.addEventListener("keyup", function( event ) {
// var wordList = ["html", "css", "javascript"];
// var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
// var userGuess = event.key;

// if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
//     console.log("user guess matched letter in word!" )
// }

// });



//// MULTIPLE KEY PRESS TEST: IF/ELSE
//// V1.00
//// FAILED - DOESN'T MOVE PAST FIRST IF; ONCE IT COMPLETES IF, EXITS, COUNTER RESET TO 0

// var counter = 0;

// if (counter === 0) {
//     document.addEventListener("keyup", function(event) {
//     console.log("first key press!");
//     console.log(counter)
//     counter = counter + 1;
//     console.log("inside if", counter);
//     });
// } else if (counter === 1) {
//     document.addEventListener("keyup", function(event) {
//     console.log("second key press!");
//     counter = counter + 1;
//     console.log("inside 1st else if", counter);
//     });
// } else if (counter === 2) {
//     document.addEventListener("keyup", function(event) {
//     console.log("third key press!");
//     counter = counter + 1;
//     console.log("inside 2nd else if", counter);
//     });
// }

// console.log("outside if" ,counter);


//// MULTIPLE KEY PRESS TEST: IF/ELSE
//// V1.01
//// FAILED - SAME ISSUE DOESN'T MOVE PAST FIRST IF

// var counter = 0;

// if (counter === 0) {
//     if (counter === 0) {
//     document.addEventListener("keyup", function(event) {
//     console.log("first key press!");
//     console.log(counter)
//     });
//     counter = counter + 1;
//     console.log("inside if", counter);
//     } else if (counter === 2) {
//     document.addEventListener("keyup", function(event) {
//     console.log("second key press!");
//     counter = counter + 1;
//     console.log("inside else if", counter);
//     });
    
//     }
// } 
// console.log("outside if" ,counter);


//// MULTIPLE KEY PRESS TEST: IF/ELSE
//// V1.03
//// SUCCESS!

// var counter = 0;

// document.addEventListener("keyup", function (event) {
//     if (counter === 0 ){
//         console.log("1st keypress. counter: ", counter);
//         counter++;
//     } else if ( counter === 1) {
//         console.log("2nd keypress. counter: ", counter);
//         counter++;
//     } else if ( counter === 2) {
//         console.log("3rd keypress. counter: ", counter);
//         counter++;
//     } else if ( counter === 3) {
//         console.log("4th keypress. counter: ", counter);
//         counter++;
//     } else if ( counter === 4) {
//         console.log("5th keypress. counter: ", counter);
//         counter++;
//     } else if ( counter === 5) {
//         console.log("6th keypress. counter: ", counter);
//         counter++;
//     } 

// });


//// MULTIPLE KEY PRESS TEST: using functions
//// v1.01

// function hangmanInitializer () {

//     document.addEventListener("keyup", function(event) {
//     console.log(event.timeStamp);
//     });

// }

// function randomWord () {
//     var wordList = ["html", "css", "javascript"];

//     var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];

//     return computerChoice;
// }

// document.addEventListener ("keyup", function (event) {
//     if (event.timeStamp > 0) {
//         console.log(randomWord() );
//     }
//     start = event.timeStamp
//     return start;
// });

// console.log(start);

// document.onkeyup = function ( event ) {
// console.log("this is the first time stamp: ", start);
// }



//// FUNCTION INSIDE .ADDEVENTLISTENER TEST w/ .getElementsByClassName
//// V1.01
// var counter = 0;
// function startMsg () {
//     var start = document.getElementsByClassName("start-msg");
//     if (start[0].innerHTML != "Let's Begin") {
//         start[0].innerHTML = "Let's Begin";
//     } else {
//         start[0].innerHTML = "Let's End"
//     }
// }


// document.addEventListener ("keyup", startMsg);
//     // if (event.timeStamp > 0) {
        
//     // }
//     // start = event.timeStamp
//     // return start;



//// FUNCTION INSIDE .ADDEVENTLISTENER TEST w/ .querySelector
//// V2.00
// var counter = 0;
// function startMsg () {
//     var start = document.querySelector(".start-msg");
//     if (start.innerHTML != "Let's Begin") {
//         start.innerHTML = "Let's Begin";
//     } else {
//         start.innerHTML = "Let's End"
//     }
// }


// document.addEventListener ("keyup", startMsg);


//// FUNCTION INSIDE .ADDEVENTLISTENER TEST w/ .querySelector using counter
//// V2.01
// var counter = 0;
// function startMsg () {
//     var start = document.querySelector(".start-msg");
//     console.log("inside func, before if", counter);
//     if (counter === 0) {
//         start.innerHTML = "First keypress";
//         counter++;
//         console.log("inside func, inside if", counter);
//     } else if (counter === 1) {
//         start.innerHTML = "second key press"
//         console.log("inside func, inside else if", counter);
//     }
// }

// console.log("outside func", counter);


// document.addEventListener ("keyup", startMsg);





    