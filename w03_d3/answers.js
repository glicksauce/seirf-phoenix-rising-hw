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