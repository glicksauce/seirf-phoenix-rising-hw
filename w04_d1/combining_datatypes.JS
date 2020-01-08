//---------------------------------------------------
//Section 2 Combining Datatypes

// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
	size: 64,
	mfgDate: '1996',
	crayons: ['red', 'blue', 'orange', 'yellow'] 
}

//Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
	cap: {material: 'metal', threaded: true, color: 'red', maxPSI: 1200}
}

console.log(bottle.cap.threaded);

//Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
 {sku: 56684, name: 'cookies', unitType: 'ea', weight: null},
 {sku: 55341, name: 'broccoli', unitType: 'weight', weight: .25},
 {sku: 11353, name: 'chocolate', unitType: 'ea', weight: null}
];

console.log(receipt[1].weight);

//Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
	{
		tenants: ['gus', 'stacy', 'frank'],
		floorName: "1st",
		elevators: ['lobby', 'gym']
	},
	{	
		tenants: ['hank', 'susan', 'herbert'],
		floorName: "2nd",
		elevators: ['lobby', 'gym']
	}
	
]

console.log(apartmentBuilding[0].tenants[1]);

//-------------------------------------
//Combine objects, arrays, and functions more than one level deep

//Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
	const returnObject = {
		item: 'scarf',
		size: '6ft',
		color: 'blue'
	}
	return returnObject
}

console.log(knit().color);

//Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
	return crayonBox
}

console.log(crayonSelector().crayons[1]);

//Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
	const options = () => {
		console.log("select a song")
	}
	return options()
}

console.log(powerButton());

/*
Model a Vending Machine Model a vending machine

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack
*/

const vendingMachine = {
	snacks: [{name: 'chips', price: "$1.25"}, {name: 'cookies', price: "$1.75"},{name: 'gum', price: "$0.75"}],
	vend: function (snackOption) {return this.snacks[snackOption]}
}

console.log(vendingMachine.vend(2));

//Callbacks

//Make a function add that takes two arguments (numbers) and sums them together
const add = (num1,  num2) => {
	return (num1 + num2)
}
//Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1,  num2) => {
	return (num1 - num2)
}

//Make a function multiply that takes two arguments and multiplies them
const multiply = (num1,  num2) => {
	return (num1 * num2)
}
//Make a function divide that takes two arguments and divides them
const divide = (num1,  num2) => {
	return (num1 / num2)
}

//Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

//Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
const calculate = (num1,  num2, callback) => {
	return callback(num1, num2);
}

//Call calculate 4 times, each time using one of the operation functions you wrote

console.log(calculate(9,3,add));
console.log(calculate(9,3,subtract));
console.log(calculate(9,3,multiply));
console.log(calculate(9,3,divide));

//Function definition placement
//Clean up this code, so that it works and has function definitions in the correct place

/*
bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}
*/

const bar = () => {
    console.log('bar here');
}

const foo = () => {
    console.log('foo here');
}

bar()
foo();

//Error Reading:
//What is meant by the error(s) this produces?

/*
foo();

const foo ()=>{
    console.log('hi');
}
*/

//1) foo has already been delcared earlier so it can't be declared again
//2) missing equal sign before '()' a const bust be assigned a value when its declared according to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_initializer_in_const

