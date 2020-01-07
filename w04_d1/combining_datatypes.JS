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