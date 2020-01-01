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

