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

console.log(favMovies.indexOf('Titanic'));

console.log(favMovies.sort());
console.log(favMovies.pop());
favMovies.push("Guardians of the Galaxy");
console.log(favMovies.reverse());

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////