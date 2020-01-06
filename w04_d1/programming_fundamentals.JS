//Common programming principles

//1 sentance summaries
//DRY
// - Don't repeat yourself. If you find yourself repeating somethign create an abstraction (loop, function et.c instead)

//KISS
// - Keep it Simple. Code should be simple and easy to understand

//Avoid creating a YAGNI
// - Don't create functionality for something until you actually need it

//Do the simplest thing that could possibly work
// - Don't overthink, start simple and stay simple

//Don't make me think
// - if code can't be easiy understood it is probably too complex

//Write code for the maintainer
// - the survival of your code depends on your ability to make it understandable to strangers

//Single responsibility principle
// - each function should perform a single well-defined task

//Avoid premature optimization
// - don't start improving your code until it is finished

//Separation of concerns
// - each area of functionality should have its own codebase. Don't overlap areas.

//Which ones surprise you (if any)?
//Avoid creating a YAGNI is kind of a surprise. We are taught to pseudocode before begninning which is sort of outlining a project. I guess this is saying to create the outline but don't build any support structure (supporting functions) yet just get straight to building it ground up

//Which one is currently giving you the most struggle?
//KISS is tough. Everything starts simple but it's very easy to turn a function into a complex mess instead instead of creating several simple functions

//------------------------------------------

const f = l => { //creates new anonymous function with 1 argument (l)
  let es = 0, p = 0, c = 1, n = 0 //delcares 4 variables
  while (c <= l) { //while loop c less than or equals 1
    n = c + p; //set n to c+p
    [c, p] = [n, c] //sets c and p to n and c respectively
    es += (c % 2 === 0) ? c : 0 //terniary function if true: c, if false: 0
  }
  return es //return part of fuction
}

console.log(f(55))
//prediction, 
	//	n = 1 + 0 = 1, 
	//[c,p] = [1, 1]
	//0 += (1 % 2 ===0) (0) 0
	//return 0
	// actual return was 44

// simplified function
const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))

//in keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

	//I believe this was related to Project Euler/Fibonacci sequence. It's returing a sum of the even numbers in the sequence up to the pass param limit


//If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

	//f2. you could easily if expand the even number check to do either even number or odd number depending on second argument


//Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

	//the semi-colon is necessary. JS thinks the next line is part of the same line if you don't use it and that makes too many '=' in the statement

