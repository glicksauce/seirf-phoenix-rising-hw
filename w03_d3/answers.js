//DataTypes Refresher
//Answer the Following
//For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

//e.g. A computer that can be either on or off. 
//=> datatype: boolean 
//=> data structure example: const computer = true; 

//A light switch that can be either on or off.
    //=> datatype: boolean
    const lightSwitch = true;

//A user's email address.
    //=> datatype: string
    let userEmail = '';

//A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    //=> datatype: object
    const spaceship = {
        shipType: 'hull',
        weapon: 'laser blasters',
        utility: 'tractor beam',
        propulsion: 'warp drive,'
    }

//A list of student names from our class.
    //=> datatype: array
    let studentNames = ['john', 'jay', 'jane'];

//A list of student names from our class, each with a location.
    //=> datatype: nested array
    let sudentInfo = [['John', 'San Diego'],['Jay', 'Boston'],['Jane', 'Dallas']];
    console.log(sudentInfo[1]);

//A list of student names from our class, each with a location and each with a list of favorite tv shows.
    //=> datatype: array of objects
    const studentDetails = [{
        name: 'John',
        location: 'San Diego',
        favShows: ['Scrubs','House','Greys Anatomy']
    },
    {
        name: 'Jay',
        location: 'Medford',
        favShows: ['Arrested Development','The Office','30 Rock']
    },
    {
        name: 'Jane',
        location: 'Dallas',
        favShows: ['Parks and Rec','Modern Family','The Goldbergs']
    }];
    console.log(studentDetails[1].favShows);

//---------------------------------------
//Take it Easy
//Make an array that holds all of the colors of the rainbow.
const rainbowColors = ['red','orange','yellow','green','blue','indigo','violet'];


//Write code that will access "blue" from the rainbow array.
let getBlue = rainbowColors[4];
console.log(getBlue);

//Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const Jay = {
    favFood: 'buffalo chicken',
    hobby: 'triathlon',
    currentTown: 'Medford',
    favDataType: 'Object'
}


//Write code that will access your hobby from the object that you just created.
console.log(Jay.hobby);

//-----------------------------------------
//Crazy Object!
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

//  Use crazy Object to log the following.

//"omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//"Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//"Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

//"Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

//The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

//Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
console.log(crazyObject.larry.quotes[4]);

//----------------------------------------
//Object-ception
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

 //Change the value of limbo to null.
 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6);

 //------------------------------------------
 //Bond Films
 const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

//Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
const bondTitles = [];
for (let index in bondFilms){
    bondTitles.push(bondFilms[index].title);
}
console.log(bondTitles);

//Create a new array oddBonds, of only the Bond films released on odd-numbered years.
const oddBonds = [];
for (let index in bondFilms){
    if (bondFilms[index].year % 2 != 0){
        oddBonds.push(bondFilms[index]);
    }
}
console.log(oddBonds);

//Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.
const bondGross = [];
let bondGrossTotal = 0;

for (let index in bondFilms){
    let tempString = (bondFilms[index].gross);
    tempString = tempString.replace('$','');
    tempString = tempString.replace(',','');
    tempString = tempString.replace(',','');
    bondGross.push(tempString);
    bondGrossTotal += parseInt(tempString);
}


console.log(bondGross);
console.log(bondGrossTotal);

//Console log the single movie object that contains the actor who starred in the least number of films.
let actorArray = [];
for (let objIndex in bondFilms){
let addedThisLoop = false;;

    for (let index in actorArray){
        //if actor matches increase by 1
        if (actorArray[index][0] == bondFilms[objIndex].actor){
            actorArray[index][1] += 1;
            //actor has been increased this loop
            addedThisLoop = true;;
        } 
    }
    //if no actor increased than add actor to array (starting at 1)
    if (addedThisLoop == false){
            actorArray.push([bondFilms[objIndex].actor, 1]);
    }
}
console.log(actorArray);

//sort Actor Array. Not a complete sort but will put least appearances in 0th slot of array
//sets compareCheck to number of films of first actor in array
let compareCheck = actorArray[0][1];

for (let i = 0;i<actorArray.length;i++){
  
    //if next actor in array is less movies than compare check
  if (actorArray[i][1] < compareCheck){
      //resets compare check to current actors appearances
    compareCheck = actorArray[i][1];

    //creates temp string and puts that in front of array. Also removes it from existing spot in array
    let tempHolder = actorArray[i];
    actorArray.splice(i,1);
    actorArray.unshift(tempHolder);
    
  }
  

}

console.log(actorArray[0][0] + " has starred in the least amount of Bond films appearing " + actorArray[0][1] + " times");