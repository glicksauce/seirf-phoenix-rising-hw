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
//