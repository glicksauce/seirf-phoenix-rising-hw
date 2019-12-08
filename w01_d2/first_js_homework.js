//SECTION 1

//1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// Don't Repeat Yourself. The point of coding is to optimize time it takes to performa  process. Repeating anything necessarily is inefficient.We have learned For and While loops which we can set to reeat a task x number of times instead of us printing it out line by line

//2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
//A const can't be reassigned once set (unless changing part of an array or object). Additinally const variables must be set once defined (Var's don't have to be).
// ----------------------------------------------------------------------------
//SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a < b < c);
console.log(a < a < d);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e);
let g = 0;
console.log(g);
g = b + c;
console.log(g);

//I used 'let' to define g. Const would not have worked becuase cont var's can't be redeclared Var would have worked but Ira told us var is being phased out by let. 
//I did not get an error when I skipped declaring the variable type of 'g'. Doing some research it appears that skiping the definiation "assigns" the variable rather than delcaring it. 'Assigned' variables will try and look for a scope to attach itself to but if it doesn't find one will attach it self to the top-level scope. source: https://stackoverflow.com/questions/2485423/is-using-var-to-declare-variables-optional
// 10 = g throws a https://stackoverflow.com/questions/2485423/is-using-var-to-declare-variables-optional. I suspect you can't redefine a decimal to something else without breaking the entire language

//Bonus (getting stuck at e _ c (string comared to a number returns NaN) I think the trick  is to use either <<, >>, or <<<)
//console.log f + 7;
console.log(a < (b || f) === !f && e << c);

//-----------------------------------------------------
//Section 3

//Infinite Loop I
/*
Don't Run
while (true) {
	console.log('Do not run this loop');
}
//This is an infitie loop. "True" is a truthy expression and there is nothing in the loop that would change the condition or stop the loop so it will run forever
*/
//Infinite Loop II
/*
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
*/

//const can't be re-declared so javascript will throw an error at runProgram = false. Assuming javascript will also stop at this time this is the only thing preventing an infinite loop

//Before running

let letters = "A"; //declare the variable A
let i = 0; //Declare the looping variable at 0

while (i < 20) { //Will run 20 times (0 through 19)
	letters += "A"; //0 += 'A' =??. Guessing its 0A, 10A, 210A, 3210A, etc...
	i++; //increments i
}

console.log(letters); //output line


//After running
//1) forgot the console.log was outside the loop there is only 1 output. 2) Interpreted letters +="A" wrong. We aren't adding numbers to a string, we are adding string to a string. 3) += for strings means the new string is added to the end of the existing string

//--------------------------------------------------
//Section 4
//While loops run until a condition is met. For loops also run until is a condition is met but usually involvie incrementing the conditional variable after each loop (declared at the start 'i++ etc').  They could be used interchangelby but For loops tend make the most sense (all the conditions listed at the start).

//What are the three components of the control panel? Each component is separated by a semicolon ;.

//The first part of the control panel is: declaring the start of the incremental
//The second part of the control panel is: evaluatiing the condition to be met for the loop to be run
//The third part of the control panel is: incrementing the condition 

for (var ii = 0; ii < 1000; ii++){
    console.log(ii);
}

//Bonus Challenge (optional):
/*
What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?

console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
console.log("Without you, today's emotions are the scurf of yesterday's");
*/

// '/' (forward slash) is just anotother string character but '\' is a special operator which tells jscript not the interpret the next character as a string but as something outside the string. In this case the first example has two extra single quotes (') but the backlash tells them to be interrested separately or essentially skipped as being read as part of the string


for (i = 999; i>=0; i--){
    console.log(i);
}

for (i= 1; i<=10; i++){
    console.log("The value of i is: " + i + " of 10");
}

for (i= 1; i<=10; i++){
    console.log(`The value of i is: ${i} of 10`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i=0; i< StarWars.length; i++){
    console.log(StarWars[i]);
}

for (i=0; i< StarWars.length; i++){
    console.log(StarWars[i]+ " " + i);
}

for (i=0; i< StarWars.length; i+=2){
    console.log(StarWars[i]+ " " + i);
}
