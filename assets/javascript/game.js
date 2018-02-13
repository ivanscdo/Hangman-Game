// var wordList = {
//     "1":"html", 
//     "2":"css", 
//     "3":"javascript",
// }

var wordList = ["html", "css", "javascript"];
var gameboard = [];

// for loop test
// var counter = 0; 

document.addEventListener("keyup", function( event ) {
    var startMsg = document.querySelector(".start-msg")
    startMsg.innerHTML = "Let's begin!"

    var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    
    console.log(computerChoice, "-",  computerChoice.length)

    var gameboardLength = computerChoice.length
    // console.log(gameboardLength)

    var unshiftGameboard = document.querySelector(".gameboard")
    // unshiftGameboard.innerHTML = gameboardLength
    unshiftGameboard.innerHTML = gameboard

    
    for (i = 0; i < gameboardLength; i++){
        gameboard.unshift("_");
        // for loop test, confirm it runs number of times equal to length of word
        // counter = counter + 1; 
        // console.log(counter);
        
        var unshiftGameboard = document.querySelector(".gameboard")
        // unshiftGameboard.innerHTML = gameboardLength
        unshiftGameboard.innerHTML = gameboard
    }
    gameboard = [];
    // for loop test
    // counter = 0; 

 



});

// document.addEventListener("keyup", function( event ) {

    
//     console.log(computerChoice)
// });