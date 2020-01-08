//----------------------------------
//Section 3 Array Methods with Callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward!' ]

  /* testing this
  const arrayManipulate = (array, arg, callback, compareSign) => {
	return array[callback]((currentValue) => currentValue => arg);
	}
	*/
//Every
//Determine if every number is greater than or equal to 0
const isMoreThanZero = (arrayValue) => arrayValue >= 0;
console.log(nums.every(isMoreThanZero));

//determine if every word shorter than 8 characters
const isShorterThanEight = (arrayValue) => arrayValue.length < 8;
console.log(panagrams.every(isShorterThanEight));

//Filter
//filter the array for numbers less than 4
const filterLessThanFour = (arrayValue) => arrayValue <4
console.log(nums.filter(filterLessThanFour));

//filter words that have an even length
const evenLengthWord = (arrayValue) => arrayValue.length % 2 == 0;
console.log(panagrams.filter(evenLengthWord));

//Find
//Find the first value divisible by 5
const findDivideByFive = (arrayValue) => arrayValue % 5 == 0;
console.log(nums.find(findDivideByFive));

//find the first word that is longer than 3 characters
const wordGreaterThanThree = (arrayValue) => arrayValue.length > 3
console.log(panagrams.find(wordGreaterThanThree));

//Find Index
//find the index of the first number that is divisible by 3
const findDivThreeIndex = (arrayValue) => arrayValue %3 == 0;
console.log(nums.findIndex(findDivThreeIndex));

//find the index of the first word that is less than 2 characters long
const findLessTwoIndex = (arrayValue) => arrayValue.length < 2;
console.log(panagrams.findIndex(findLessTwoIndex));

//For Each
//console.log each value of the nums array multiplied by 3
const valueTimesThree = (arrayValue) => console.log(arrayValue * 3);
console.log(nums.forEach(valueTimesThree));

//console.log each word with an exclamation point at the end of it
const bangCheck = (arrayValue) => {
	if (arrayValue.includes("!") == true){
		console.log(arrayValue)
	}

}

console.log(panagrams.forEach(bangCheck));

//Map
//make a new array of each number multiplied by 100
const times100 = (arrayValue) => arrayValue * 100;
const newArray = nums.map(times100);
console.log(newArray);

//make a new array of all the words in all uppercase
const toUpperCase = (arrayValue) => arrayValue.toUpperCase();
const newPanagramsArray = panagrams.map(toUpperCase);
console.log(newPanagramsArray);

//Some
//Find out if some numbers are divisible by 7
const checkDivSeven = (arrayValue) => arrayValue % 7 == 0;
console.log(nums.some(checkDivSeven));

//Find out if some words have the letter a in them
const checkforA = (arrayValue) => {
	if (arrayValue.includes("a")){
		return true;
	}
}

console.log(panagrams.some(checkforA));

/* didn't quite finish this one
//------------------------------------
//isPanagram

//Using the following array - test whether each letter a-z (case insensitive) is used at least once

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazz', 'dog']

const alphabetCheck = (arrValue, arg) => {
    console.log(arrValue, arg);
    return arrValue == arg;
 
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";

const checkPanagram = (array) => {
    let pcheck = false;
    for (i=0;i<alphabet.length;i++){
        //console.log(alphabet[i]);
        if (array.find(alphabetCheck, alphabet[i]) == false){
            console.log(alphabet[i]);
            pcheck = false;
            return false;
        } 
    }
    return pcheck;
}
console.log(checkPanagram(panagram))
*/