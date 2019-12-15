////////////////////////////////
// Easy Going
////////////////////////////////
for (i=0;i<=20;i++){
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////

for (i=0;i<=200;i+=2){
    console.log(i);
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (i=1;i<=100;i++){
    word = [i];
    output = '';
    if (i%3 == 0){
      word.push("fizz");
    }
    if (i%5 == 0){
      word.push("buzz")
    }
    output = word.toString();
    console.log(output);
    word = '';
    output = '';
  }


////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = 'Gotham City'
console.log(wolfy);

//Give D'Art a second hometown by adding "Hawkins"
dart.push('Hawkins');
console.log(dart);

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const arr = ['Donatello','Leonardo','Raphael','Michaelangelo'];
for (word of arr){
    console.log(word.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic
console.log("Titanic found at index " + favMovies.indexOf('Titanic'));

//use the .sort method 
console.log(favMovies.sort()); 

//Use the method pop
favMovies.pop();

//push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");

//Reverse the array
favMovies.reverse()

//Use the shift method
favMovies.shift()

//unshift - what does it return?
favMovies.unshift('Forest Gump');


//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
let findDjango = favMovies.indexOf('Django Unchained');
favMovies.splice(findDjango,1,'Avatar');


//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
let splicePoint = Math.floor((favMovies.length-1)/2);
favMovies.slice(splicePoint, favMovies.length);


//store the value of your slice in a variable, console.log it - Thought question: what is going on here?
let slicedList = favMovies.slice(splicePoint, favMovies.length);
console.log(slicedList);

//console.log your final results
console.log(favMovies);


//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

//"Volver" got popped not "Fast and Furious" so I"m going to use that instead

console.log(favMovies.indexOf("Volver"));

//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//Const with an array allows you to make changes within an array it just doesn't let you change the array (from the outside);
////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert
let findEggbert = whereIsWaldo.indexOf("Eggbert");
whereIsWaldo.splice(findEggbert,1);

//change Neff to No One
whereIsWaldo[1][2] = "No One";

//access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

console.log(whereIsWaldo);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
const catArr = []
let mesg1 = "...human...why you taking pictures of me?..";
let mesg2 = "..the catnip made me do it..";
let mesg3 = "...why does the red dot always get away...";
let log = "Love me, pet me! HSSSSSSSS!";
let random3;

for (i=0;i<20;i++){
  if (i%2 == 0){
    random3 = Math.ceil(Math.random()*3);
    log += eval('mesg' + random3);
  }
  console.log(i, log);
  log = "Love me, pet me! HSSSSSSSS!";

}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

const arrayEx1 = [5, 12, 8, 130, 44, 160];

const medianArr = nums.sort((a,b) => a-b);

if (medianArr.length %2 == 0){ //length is even average two middle numbers
  r1 = medianArr[(medianArr.length/2)-1];
  r2 = medianArr[(medianArr.length/2)];
  console.log((r1+r2)/2);
} else { //length is odd get middle number
  console.log(medianArr[Math.floor(medianArr.length/2)]);
}
console.log(medianArr);