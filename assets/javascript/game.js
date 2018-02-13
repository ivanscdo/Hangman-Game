document.addEventListener("keyup", function( event ) {
var wordList = ["html", "css", "javascript"];
var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
var userGuess = event.key;

if (computerChoice.split("").indexOf(userGuess) !== -1 ) {
    console.log("user guess matched letter in word!" )
}

});



// document.addEventListener("keyup", function( event ) {
//     var wordList = ["html", "css", "javascript"];
//     var gameboard = []; 
//     var startMsg = document.querySelector(".start-msg")
//     startMsg.innerHTML = "Let's begin!"

//     var userGuess = event.key;
//     console.log(userGuess);
//     var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    
//     // console.log(computerChoice, "-",  computerChoice.length)

//     console.log(computerChoice.split("").indexOf(x));

//     var gameboardLength = computerChoice.length
       
//     for (i = 0; i < gameboardLength; i++){
//         gameboard.unshift("_");
        
//         var unshiftGameboard = document.querySelector(".gameboard")
 
//         unshiftGameboard.innerHTML = gameboard
//     }
//     gameboard = [];


// });


// document.addEventListener("keyup", function( event ) {

    
//     console.log(computerChoice)
// });
