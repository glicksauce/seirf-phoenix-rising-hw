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

//Variable and Object delcarations
let day = 1;


const tool = {
  teeth: {cost: 1, daysEarnings: 1, formattedName: 'Teeth'},
  rustyScissors: {cost: 5, daysEarnings: 5, formattedName: 'Rusty Scissors'},
  pushMower: {cost: 25, daysEarnings: 50, formattedName: 'Old-Timey Push Mower'},
  batteryMower: {cost: 250, daysEarnings: 250, formattedName: "Battery-Powered Lawnmower"},
  starvingStudents: {cost: 500, daysEarnings: 250, formattedName: "Team of Starving Students"}
}

const player = {
  name: '',
  tool: [tool.teeth],
  wallet: 0
}

const town = {};

let name = prompt("Please enter your name", "enter name");

//Function Delcarations
  //When user clicks 'Lets Cut Some Grass' Button
function doWork(){
  let dayTool = player.tool[0].formattedName;
  let dayEarnings = player.tool[0].daysEarnings
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

  //let buttonProperties = document.getElementsByClassName('buyButton');
  //buttonProperties.display = "block";
  //buttonProperties.width = "100px";

  for (let toolName in tool){
    let buttonName = toolName + "button";
    document.getElementById(toolName).innerHTML = "<button class='buyButton' id=" + buttonName + ">buy</button>" + tool[toolName].formattedName + " $" + tool[toolName].cost + "<br>";
    document.getElementById(buttonName).addEventListener ("click", function() {
      attemptBuy(tool[toolName].cost, tool[toolName].formattedName);
    });
  }

  
}

function walletAdjust(dollars) {
  player.wallet += dollars;
}

function attemptBuy(itemCost, toolFormattedName){
  if (itemCost <= player.wallet){
    alert("congrats you bought " + toolFormattedName + "!");
    player.wallet -= itemCost;
  } else {
    alert("sorry you can't afford that");
  }
  document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet";
}

//Start of Game logic
  //prompts for name and does welcome message
if (name != null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + name + "! How are you today?";

    player.name =name;

    document.getElementById("dayStart").innerHTML = "Its day " + day + ". You have $" + player.wallet + " in your wallet. You have " + player.tool[0].formattedName + " in your toolbelt. What would you like to do today?";
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

