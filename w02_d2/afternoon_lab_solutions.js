//Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes.

const quotes = ["If you give a mouse a cookie, he'll want a glass of milk", "At least I ain't chicken", "Worst episode ever"];

console.log(quotes);

/*
Random
Given the following array 
*/
const randomThings = [1, 10, "Hello", true]
/*
how do you access the 1st element in the array?

Change the value of "Hello" to "World".

Check the value of the array to make sure it updated the array.
*/

//First value would be randomThings[0];

randomThings[2] = "World";
console.log(randomThings);

/*
We've Got Class
Given the following array 
*/
const ourClass = ["Outrun", "Zoom", "Github", "Slack"]
/*
What would you write to access the 3rd element of the array?

Change the value of "Github" to "Octocat"

Add a new element, "Cloud City" to the array.
*/

//ourClass[2]

ourClass[2] = "Octocat";
ourClass.push("Cloud City");

console.log(ourClass);


/*
Mix It Up
Given the following array 
*/
const myArray = [5 ,10 ,500, 20]
/*
using the push method, add the string "Egon" to the end of the array.

using a method, remove the string from the end of the array.

using the unshift method, add the string "Bob Marley" to the beginning of the array

using a different method, remove the string from the beginning of the array

use the reverse method on this array
*/

myArray.push("Egon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();

console.log(myArray);

/*
Biggie Smalls
Write an if..else statement that iterates over the myArray array declared above:

1. console.log little number if the number is entered is less than 100

2. If the number entered is 100 or more, alert big number.
*/

for (let arrCheck in  myArray){
    if (myArray[arrCheck] < 100){
        console.log (myArray[arrCheck], "little number");
    } else if (myArray[arrCheck] >= 100){
        console.log(myArray[arrCheck], "big number");
    }
}

/*
Monkey in the Middle
Write an if...else if...else statement:

1. console.log little number if the number entered is less than 5.

2. If the number entered is more than 10, log big number.

3. Otherwise, console.log "monkey".
*/

for (let arrCheck in  myArray){
    if (myArray[arrCheck] < 5){
        console.log (myArray[arrCheck], "little number");
    } else if (myArray[arrCheck] > 10){
        console.log(myArray[arrCheck], "big number");
    } else {
        console.log(myArray[arrCheck], "monkey");
    }
}

/*
What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

let krystynShoe = kristynsCloset.shift();
console.log(kristynsCloset);

//3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice(5, 0, "raybans");
console.log(kristynsCloset);

//4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset[5] = "stained knit hat :(";
console.log(kristynsCloset);

//5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

let shirt = thomsCloset[0][0];
console.log(shirt);

//6. In the same way, access one item from Thom's pants array.

let pants = thomsCloset[1][1];
console.log(pants);

//7. Access one item from Thom's accessories array.

let accessories = thomsCloset[2][0]
console.log(accessories);

//8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log("Thom is looking fierce in a", shirt, pants, "and",accessories);

//9. Get more specific about what kind of P
//Js Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);

/*
HFM (Hungry for More - Optional Bonus Exercises)
Write a loop that prints the numbers in order
*/
const twoDArray = [
  [9,8,7],
  [6,5,4],
  [3,2,1],
];

//flatten the array for easy sorting
let result= twoDArray.flat(); 
//sort the array
result = result.sort();
console.log(result);
//loop through the array to output individual strings
    for (let k = 0; k < result.length; k++){
        console.log(result[k]);
    }


//Try using for of loops instead of a regular for loop - does it make sense for this task? 

//flatten the array for easy sorting
let result2= twoDArray.flat(); 
//sort the array
result2 = result2.sort();

//loop through the array to output individual strings
console.log("using 'for of' loop");
    for (index of result2){
        console.log(result2[index-1]);
    }


    /*
Wildly Ravenous For Even More (Optional Bonus Exercises)
Spiral Path
Write a function called "spiral" that takes an NxM array as input and returns a "spiral" path through the array, starting in the upper-left corner and moving clockwise.

For example, if
*/
array = [[1,2,3],
         [8,9,4],
         [7,6,5]];

array2 = [[1,2,3,4],
         [5,4,5,4],
         [8,9,4,5],
         [7,6,5,6]];
/*
then


spiral(array) # => [1,2,3,4,5,6,7,8,9]
It should work on any NxM array, so don’t assume the input is a square array. However, every row will have the same number of elements.
*/

//pseudo
//need top array in order. 
//next is last digit of 2nd array then 3rd array..
//next is last array minus last digit
//next is first digit in 2nd last array and up (except for first row)
//next is moving right except for last digit
//then down except for last digit
//then left except for last digit
function spiral (arr){
    let height = arr.length;
    let length = arr[0].length; //works assuming all rows same number of elements
    finalArr = []
    rowNav(arr[0], 1, 0);
    colNav(arr,1, 1);
    rowNav(arr[arr.length-1],-1,1)


    function rowNav(row,direction, iteration) {
       if (direction == 1){ //rightward direction
        for (let elements of row)
        finalArr.push(elements);
       } else if (direction == -1){
           for (i=row.length-(1+iteration); i>=0;i--){
               finalArr.push(row[i]);
           }
       }

    }
    function colNav(args, direction, iteration){
        for (i = iteration; i < args.length; i++){
            finalArr.push(args[i][args[i].length-1]);
        }
    }    
    
    return finalArr;
}

console.log(spiral(array));
