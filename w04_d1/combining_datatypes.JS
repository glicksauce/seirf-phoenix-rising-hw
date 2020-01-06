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