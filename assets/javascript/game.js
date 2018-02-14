
document.querySelector(".start-btn").addEventListener("click", function(){
    
})

//listening for user key press
document.addEventListener("keyup", function( event ) {
    // create variables
    counter = 0;
    var wordList = ["html", "css", "javascript"];
    var gameboard = []; 
    // start msg changes "Press any key" to "Let's Begin!" 
    var startMsg = document.querySelector(".start-msg")
    startMsg.innerHTML = "Let's begin!"

    // key press into variable userGuess
    var userGuess = event.key;
    // console.log(userGuess);

    // computer picks random word from wordList; stored into variable computerChoice
    var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    
    // console.log(computerChoice, "-",  computerChoice.length)

    // console.log(computerChoice.split("").indexOf(x));

    // take length from word computer picked and stored into variable gameboardLength
    var gameboardLength = computerChoice.length
       
    // for loop creates underscores based on word length in Current Word div
    for (i = 0; i < gameboardLength; i++){
        gameboard.unshift("_");
        
        var unshiftGameboard = document.querySelector(".gameboard")
 
        unshiftGameboard.innerHTML = gameboard
    }
    gameboard = [];
    // counter = counter + 1;
    // console.log(counter);
    // return counter;


// });



// console.log(counter);


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


var counter = 0;
function startMsg () {
    var start = document.getElementsByClassName("start-msg");
    if (start[0].innerHTML != "Let's Begin") {
        start[0].innerHTML = "Let's Begin";
    } else {
        start[0].innerHTML = "Let's End"
    }
}

document.addEventListener ("keyup", startMsg);
    // if (event.timeStamp > 0) {
        
    // }
    // start = event.timeStamp
    // return start;


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





    