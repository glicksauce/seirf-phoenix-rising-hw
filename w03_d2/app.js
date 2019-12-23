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
  wallet: 5000
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
  createDoWorkAwknowledgementButton();
}

function buyTools(){
  document.getElementById("dayStart").innerHTML = "You are at the store";
  hideButtons();
  showInventory();
  goShopping();
  createExitStoreButton();
}

function showInventory(){
  let currentInventory = [];
  for (let tool in player.tool){
    currentInventory.push(player.tool[tool].formattedName);
  }
  document.getElementById("inventory").innerHTML = currentInventory;
}

//sorts inventory so index 0 is always the most expensive tool
function sortInventory(){
  let sortArray = player.tool; 
  console.log(sortArray); 

  let compareCheck = sortArray[0].cost;

  for (let i = 0;i<sortArray.length;i++){
    if (sortArray[i]['cost'] > compareCheck){
      let tempHolder = sortArray[i];
      sortArray.splice(i,1);
      sortArray.unshift(tempHolder);
    }
    compareCheck = sortArray[i].cost;

  }
 
}


function namePlayer(player){

}

function dayOff(){
  document.getElementById("dayStart").innerHTML = "You took a day off";
}

function hideButtons(){

  if (document.getElementsByClassName("buyButton")){

    let changeClass = document.getElementsByClassName("buyButton");
    for (let i=0;i<changeClass.length;i++){
      changeClass.item(i).className = 'buyButtonHidden';
     //changeClass.className = "buyButtonHidden";
    }
 
   }
  document.getElementById("buttonZone").innerHTML = '';
  document.getElementById("nextMove").innerHTML = '';
  document.getElementById("buttonZone").innerHTML = '';
  document.getElementById("dayStart").innerHTML = '';
  if (document.getElementById("toolName")){
    document.getElementById("toolName").innerHTML = '';
  }
  

}
function goShopping(){
 // let toolList = '';

  document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet. What would you like to buy?"

  for (let toolName in tool){
    let buttonName = toolName + "button";
    document.getElementById(toolName).innerHTML = "<button class='buyButton' id=" + buttonName + ">buy</button>" + tool[toolName].formattedName + " $" + tool[toolName].cost + "<br>";
    document.getElementById(toolName).className = "buyButton";
    document.getElementById(buttonName).addEventListener ("click", function() {
      attemptBuy(tool[toolName].cost, toolName);
    });
  }
  
}

function walletAdjust(dollars) {
  player.wallet += dollars;
}

function attemptBuy(itemCost, toolName){
  if (itemCost <= player.wallet){
    alert("congrats you bought " + tool[toolName].formattedName + "!");
    player.wallet -= itemCost;
    player.tool.push(tool[toolName]);
    showInventory();
  } else {
    alert("sorry you can't afford that");
  }
  document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet";
}

function createDoWorkAwknowledgementButton(){
  document.getElementById("buttonZone").innerHTML = "<button id='doWorkAwknowledgeButton'>Go Back</button>";
  document.getElementById("doWorkAwknowledgeButton").addEventListener("click", function(){
    day++;
    resetButtons();
    welcome();
  });
  
}
//hides buttons, creates store exit button, adds listener to button
function createExitStoreButton(){
  document.getElementById("buttonZone").innerHTML = "<button id='storeExitButton'>Exit Store</button>";
  document.getElementById("storeExitButton").addEventListener("click", function(){
    resetButtons();
    sortInventory();
    welcome();
  });

}


//hides buttons then recreates them
function resetButtons(){
  hideButtons();

//creating 3 buttons + listeners
  let button = ''
  button = document.createElement("button");
  button.innerHTML = "Lets cut some Grass";
  button.id = "workToday";
  document.getElementById("buttonZone").appendChild(button);
  document.getElementById("workToday").addEventListener("click", function(){
    doWork();
  });

  button = document.createElement("button");
  button.innerHTML = "Lets buy some tools";
  button.id = "goShopping";
  document.getElementById("buttonZone").appendChild(button);
  document.getElementById("goShopping").addEventListener("click", function(){
    buyTools();
  });


  button = document.createElement("button");
  button.innerHTML = "Lets take a day off";
  button.id = "dayOff";
  document.getElementById("buttonZone").appendChild(button);
  document.getElementById("dayOff").addEventListener("click", function(){
    dayOff();
  });

}

function welcome(){
  if (day <= 1){
    document.getElementById("welcome").innerHTML =
    "Hello " + name + "! How are you today?";
  } 

  document.getElementById("dayStart").innerHTML = "Its day " + day + ". You have $" + player.wallet + " in your wallet. You have " + player.tool[0].formattedName + " in your toolbelt. What would you like to do today?";

}

//Start of Game logic
  //prompts for name and does welcome message
if (name != null) {
    resetButtons();
    welcome();

    player.name = name;
    
}
