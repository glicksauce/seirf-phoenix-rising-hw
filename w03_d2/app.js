console.log("up and running");

//Pseudocode
//https://git.generalassemb.ly/ira/SEIR-FLEX-123/tree/master/unit_1/w03d2/homework/Landscaper
//The ability to take user input
    //What is your name
//The ability for the user to earn money
    //you did x work today you earned xx
//The ability to buy tools and use the new tool
    //you have x money, what tool would you like to buy
//The ability to win the game and end it
    //when when x lawns are mowed. Maybe do a grid of neighborhoods. Stretch goal lawns can regrow and you have to mow faster than they regrow
//Hint: Try setting the win amount to $10 frst, then $50, and etc. until you get to the end to allow for easier testing!



//Function Delcarations
  //When user clicks 'Lets Cut Some Grass' Button
function doWork(){
  let dayTool = player.tool;
  let dayEarnings = tool[dayTool].daysEarnings
  walletAdjust(dayEarnings);
  let dayMessage = "You went to work today!<br>You mowed with your " + dayTool + "<br> and you earned $" + dayEarnings + " today!";
  document.getElementById("dayStart").innerHTML = dayMessage;
  document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet";
}

function buyTools(){
  document.getElementById("dayStart").innerHTML = "You are at the store";
  hideButtons();
  goShopping();
}

function namePlayer(player){

}

function dayOff(){
  document.getElementById("dayStart").innerHTML = "You took a day off";
}

function hideButtons(){

}

function goShopping(){
  let toolList = '';
  document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet. What would you like to buy?"

  for (let toolName in tool){
    toolList += tool[toolName].formattedName + " $" + tool[toolName].cost + "<br>";
    //toolList += toolName;
  }
  document.getElementById("storeGrid").innerHTML = toolList;
}

function walletAdjust(dollars) {
  player.wallet += dollars;
}

//Variable and Object delcarations
let day = 1;

const player = {
    name: '',
    tool: 'teeth',
    wallet: 0
}

const tool = {
  teeth: {cost: 0, daysEarnings: 1, formattedName: 'Teeth'},
  rustyScissors: {cost: 5, daysEarnings: 5, formattedName: 'Rusty Scissors'},
  pushMower: {cost: 25, daysEarnings: 50, formattedName: 'Old-Timey Push Mower'},
  batteryMower: {cost: 250, daysEarnings: 250, formattedName: "Battery-Powered Lawnmower"},
  starvingStudents: {cost: 500, daysEarnings: 250, formattedName: "Team of Starving Students"}
}

const town = {};

let name = prompt("Please enter your name", "enter name");

//Start of Game logic
  //prompts for name and does welcome message
if (name != null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + name + "! How are you today?";

    player.name =name;

    document.getElementById("dayStart").innerHTML = "Its day " + day + ". You have $" + player.wallet + " in your wallet. You have " + player.tool + " in your toolbelt. What would you like to do today?";
}

//Listeners for 3 buttons
  document.getElementById("workToday").addEventListener("click", function(){
    doWork();
  });

  document.getElementById("goShopping").addEventListener("click", function(){
    buyTools();
  });

  document.getElementById("dayOff").addEventListener("click", function(){
    dayOff();
  });

