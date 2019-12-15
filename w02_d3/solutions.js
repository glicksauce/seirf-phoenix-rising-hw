//1. What is the difference between a parameter and an argument?
    //Parameters are variables that is defined at the top of a function. Arguments are variables that are passed to a function

//2. Within a function, what is the difference between return and console.log?
    //Return passes the results of a function back to where it was invoked from. Console.log writes a line to the console. Its usually better to use return especially when you are passing data between functions

//-------------------------------------------
//Palindrome
const checkPalindrom = (word) => {
    let evalWord = word.toLowerCase()
    let reverseLetterCheck = 0;
    let result = true;
    let loopAmount = Math.floor((evalWord.length/2));
    //console.log(loopAmount);
    for (i=0;i<loopAmount;i++){
        reverseLetterCheck = evalWord.length-1-i;
        //console.log(evalWord[i], evalWord[reverseLetterCheck]);
        if (evalWord[i] != evalWord[reverseLetterCheck]){
            return false;
        }
    }
    return result;
}

console.log(checkPalindrom("amanaplAnacanalpanama"));

//---------------------------------
//Sum Array
const sumArray = (arr) => {
    let sum = 0;
    for (i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4,5,6]));

//--------------------------------
//Prime Numbers
const checkPrime = (num) => {
    let checkDistance = Math.floor(Math.sqrt(num));
    if (num <= 1){
        return false;
    }
    //console.log(checkDistance);
    for (i=2;i<=checkDistance;i++){
        if (num%i == 0){
            return false;
        }
    }
    return true;
}

const printPrimes = num => {
    const result = [];
    for (j=0;j<=num;j++){
        if (checkPrime(j)){
            result.push(j);
        }
    }
    return result;
}

console.log(printPrimes(100));

//---------------------
//Rock Paper Scissors
const randomMove = () => {
 let result = Math.floor(Math.random()*3)
switch (result){
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
}
 return result
}

const rockPaperScissors = (computersMove, usersMove) => {
    let results = rpsCompare(computersMove,usersMove)
    winningThrow = results[0];
    losingThrow = results[1];
    let outcome = '';
    //console.log(results[2]);
    if (results[2] == 'tie'){
        outcome = ("its a draw!");
    } else
    if (results[2] == 'left'){
        let winningThrower = 'computer';
        outcome = (`${winningThrow} beats ${losingThrow}, ${winningThrower} wins!`)
    } else if (results[2] == 'right'){
        let winningThrower = 'user';
        outcome = (`${winningThrow} beats ${losingThrow}, ${winningThrower} wins!`)
    } else {
        outcome = "throw not recognized, try again";
    }
    winningThrower = results[2];
    console.log("computer chose " + computersMove);
    console.log("user chose " + usersMove);
    console.log(outcome);


}

const rpsCompare = (play1, play2) => {
    let winningPlay;
    let losingPlay;
    let scenerio;
    if (play1 == play2){
        return (['tie', 'tie', 'tie']);
    } else if (play1 == 'rock'){
        if (play2 == 'scissors'){
            winningPlay = play1;
            losingPlay = play2;
            scenerio = 'left';
        }
        if (play2 == 'paper'){
            winningPlay = play2;
            losingPlay = play1;  
            scenerio = 'right';
        }
    } else
    if (play1 == 'paper'){
        if (play2 == 'rock'){
            winningPlay = play1;
            losingPlay = play2;
            scenerio = 'left';
        }
        if (play2 == 'scissors'){
            winningPlay = play2;
            losingPlay = play1;  
            scenerio = 'right';
        }
    } else
    if (play1 == 'scissors'){
        if (play2 == 'paper'){
            winningPlay = play1;
            losingPlay = play2;
            scenerio = 'left';
        }
        if (play2 == 'rock'){
            winningPlay = play2;
            losingPlay = play1; 
            scenerio = 'right'; 
        }
    } else {
        return ([-1,-1,-1]); //input not recognized
    }
    return ([winningPlay, losingPlay, scenerio]);
}
//for (i=0;i<10;i++){
//    console.log(randomMove());
//}
let userInput = 'scissors'; //setting scissors as default

//user can launch this as: node solutions.js rock
//(or scissors or paper);
//only populates if value is defined otherwise default value from above
if (process.argv[2]){
    userInput = process.argv[2];
}


//computers random move against players move
rockPaperScissors(randomMove(), userInput);
