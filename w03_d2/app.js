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
  teeth: {cost: 1, daysEarnings: 1, formattedName: 'Teeth', image: 'images/teeth.jpg'},
  rustyScissors: {cost: 5, daysEarnings: 5, formattedName: 'Rusty Scissors', image: 'images/sheers.jpg'},
  pushMower: {cost: 25, daysEarnings: 50, formattedName: 'Old-Timey Push Mower', image: 'images/pushMower.jpg'},
  batteryMower: {cost: 250, daysEarnings: 250, formattedName: "Battery-Powered Lawnmower", image: 'images/batteryMower.jpg'},
  starvingStudents: {cost: 500, daysEarnings: 250, formattedName: "Team of Starving Students", image: 'images/studentTeam.jpg'}
}

const player = {
  name: '',
  tool: [tool.teeth],
  wallet: 5000
}

const town = {};

let name = '';

//Function Delcarations
function getName(){
  name = prompt("Please enter your name", "enter name");
}

function initializeGame(){
  day = 1;
  player.tool = [tool.teeth];
  player.wallet = 0;
  player.name = name;
  showInventory();
  document.getElementById('console').innerHTML = '';
  getName();
}

//When user clicks 'Lets Cut Some Grass' Button
function doWork(){
  let dayTool = player.tool[0].formattedName;
  let dayEarnings = player.tool[0].daysEarnings
  walletAdjust(dayEarnings);
  let dayMessage = "You went to work today! You mowed with your " + dayTool + " and you earned $" + dayEarnings + " today!";
  document.getElementById("dayStart").innerHTML = dayMessage;
  document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet";
  pushConsole(dayMessage);
  createDoWorkAwknowledgementButton();
  checkIfWin();
  day++;
}

//like doWork but lets you use all your tools in a day
function doWorkMultipleTools(){
  let currentInventory = [];
  let toolInventory = [];
  let currentInventoryHTML = '';
  let toolEarnings = 0;
  let totalToolEarnings = 0;
  let dayEarnings = '';

  //creates array of all tools, and inventory count of 0, and days earnings
  for (let key in tool){
    toolInventory.push([tool[key].formattedName, 0, tool[key].daysEarnings]);
  }

  //goes for every tool found in player.tool it increments toolInventory of that tool by 1
  for (let tool in player.tool){
    for (let index in toolInventory){
      if (player.tool[tool].formattedName == toolInventory[index][0]){
        toolInventory[index][1]++;
      }
    }
  }

  //cycles through toolInventory and calculates total earned for each tool. Omits tools with qty: 0
  for (let index in toolInventory){
    if (toolInventory[index][1] > 0){
      toolEarnings = toolInventory[index][1] * toolInventory[index][2];
      dayEarnings += "You cut " + toolInventory[index][1] + " yards with " + toolInventory[index][0] + " making $" + toolEarnings + " ";
      totalToolEarnings += toolEarnings;
    }
    
  }
  dayEarnings += "You made a total of $" + totalToolEarnings + " today.";
  pushConsole(dayEarnings);
  walletAdjust(totalToolEarnings);
  createDoWorkAwknowledgementButton();
  checkIfWin();
  day++;
}

function pushConsole(messageToAdd){
  let message = document.getElementById('console').innerHTML;
  message = "Day " + day + ": " + messageToAdd + "<br>" + message;
  document.getElementById('console').innerHTML = message;
}

function buyTools(){
  document.getElementById("dayStart").innerHTML = "You are at the store";
  hideButtons();
  showInventory();
  goShopping();
  createExitStoreButton();
}

function clearInventory(){
  document.getElementById("inventory").innerHTML = '';
}

function showInventory(){
  //clear the existing inventory before showing it
  clearInventory();

  let currentInventory = [];
  let toolInventory = [];
  let currentInventoryHTML = '';

  //creates array of all tools and inventory count of 0 and image source of tool
  for (let key in tool){
    toolInventory.push([tool[key].formattedName, 0, tool[key].image]);
  }
  //console.log(toolInventory);

  //goes for every tool found in player.tool it increments toolInventory of that tool by 1
  for (let tool in player.tool){
    for (let index in toolInventory){
      if (player.tool[tool].formattedName == toolInventory[index][0]){
        toolInventory[index][1]++;
      }
    }
  }

  //applies formatting to toolInventory
  //Inventory Title
  let div = document.createElement("div");
  div.className = "toolInventoryTitle";
  div.id = "toolInventoryTitle";
  div.innerHTML = "Inventory";
  document.getElementById("inventory").appendChild(div);

  //adding wallet to inventory
  div = document.createElement("div");
  div.className = "walletIconClass";
  div.id = "walletIcon";
  div.innerHTML = "$" + player.wallet;
  document.getElementById("inventory").appendChild(div);
  createToolIcon('images/wallet.png',div.id)

  //creates a new div for each inventory item
  for (let index in toolInventory){
    
    let div = document.createElement("div");
    div.className = "toolInventoryItem";
    div.id = "toolItem" + index;
    div.innerHTML = " " + toolInventory[index][0] + " " + toolInventory[index][1] + "<br>";
    document.getElementById("inventory").appendChild(div);
    createToolIcon(toolInventory[index][2],div.id)
  }
  
}

//creates a button icon with image. appends that to beginning of div
function createToolIcon(toolImage,pinToDiv){
  button = document.createElement("button");
  button.className = "toolIcon";
  button.style.background = "url(" + toolImage + ") left center/45px 45px no-repeat";

  let outsideNode = document.getElementById("inventory");
  let pinBeforeThisNode = document.getElementById(pinToDiv);
  outsideNode.insertBefore(button, pinBeforeThisNode);
  return;

}

//returns array with tool formatted name, quantity
function InventorySnapShot(){
  let toolInventory = [];

  //creates array of all tools and inventory count of 0
  for (let key in tool){
    toolInventory.push([tool[key].formattedName, 0]);
  }

  //goes for every tool found in player.tool it increments toolInventory of that tool by 1
  for (let tool in player.tool){
    for (let index in toolInventory){
      if (player.tool[tool].formattedName == toolInventory[index][0]){
        toolInventory[index][1]++;
      }
    }
  }

  return(toolInventory);
}

//sorts inventory so index 0 is always the most expensive tool
function sortInventory(){
  let sortArray = player.tool; 
  //console.log(sortArray); 

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
  pushConsole("You took a much deserved day off");
  day++;
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
  document.getElementById("dayStart").innerHTML = '';
  if (document.getElementById("toolName")){
    document.getElementById("toolName").innerHTML = '';
  }
  

}


function goShopping(){

  //updateing nextMove section. plan on phasing this out (replacing with console seciton);
  document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet. What would you like to buy?"

  //adding Store Title
  let storeTitle = document.createElement("div");
  storeTitle.className = "storeTitleClass";
  storeTitle.id = "storeTitle"
  storeTitle.innerHTML = "Rusty's Discount Lawn Store"
  //document.getElementById("storeGrid").appendChild(storeTitle);
  document.getElementById("storeGrid").insertBefore(storeTitle, document.getElementById("teeth"));

  for (let toolName in tool){
    let buttonName = toolName + "button";
    document.getElementById(toolName).innerHTML = "<button class='buyButton' id=" + buttonName + ">buy $" + tool[toolName].cost + "</button>" + "<button class='sellButton' id=sell" + buttonName + ">sell $" + tool[toolName].cost/2 + "</button>" + tool[toolName].formattedName + "<br>";
    document.getElementById(toolName).className = "buyButton";
    document.getElementById(buttonName).addEventListener ("click", function() {
      attemptBuy(tool[toolName].cost, toolName);
    });
    document.getElementById("sell"+buttonName).addEventListener ("click", function() {
      attemptSell(tool[toolName].cost/2, tool[toolName].formattedName);
    });

  }
  
}

function walletAdjust(dollars) {
  player.wallet += dollars;
  showInventory();
}

function attemptBuy(itemCost, toolName){
  if (itemCost <= player.wallet){
    alert("congrats you bought " + tool[toolName].formattedName + "!");
    pushConsole("You bought a " + tool[toolName].formattedName);
    player.wallet -= itemCost;
    player.tool.push(tool[toolName]);
    showInventory();
  } else {
    alert("sorry you can't afford that");
  }
  document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet";
}

function attemptSell(itemSellPrice, toolFormattedName){
    let toolInventory = InventorySnapShot();

    for (let index in toolInventory){
      if (toolInventory[index][0] == toolFormattedName){
        if (toolInventory[index][1] > 0){
            pushConsole("You sold a " + toolFormattedName + " for $" + itemSellPrice);
            player.wallet += itemSellPrice; 
            toolInventory[index][1]--;
            adjustInventory(toolFormattedName);  
            showInventory();
        } else {
          alert("sorry you don't have any to sell");
        }
      }
    }

    showInventory();
    document.getElementById("nextMove").innerHTML = "You have $" + player.wallet + " in your wallet";
}

//given toolformattedname removes 1 instance from player.tool
function adjustInventory(toolFormattedName){
    for (let tool in player.tool){
      if (player.tool[tool].formattedName == toolFormattedName){
        delete player.tool[tool];
      }
    console.log(player.tool);
  }
}

function createDoWorkAwknowledgementButton(){
  document.getElementById("buttonZone").innerHTML = "<button id='doWorkAwknowledgeButton'>Go Back</button>";
  document.getElementById("doWorkAwknowledgeButton").addEventListener("click", function(){
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

//creating 4 buttons + listeners
  let button = ''
  button = document.createElement("button");
  button.innerHTML = "Lets cut some Grass";
  button.id = "workToday";
  document.getElementById("buttonZone").appendChild(button);
  document.getElementById("workToday").addEventListener("click", function(){
    //doWork();
    doWorkMultipleTools();
  });

  button = document.createElement("button");
  button.innerHTML = "Lets buy and sell tools";
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

  button = document.createElement("button");
  button.innerHTML = "Reset the Game";
  button.id = "resetGame";
  document.getElementById("buttonZone").appendChild(button);
  document.getElementById("resetGame").addEventListener("click", function(){
    resetGame();
  });
}

function welcome(){
  if (day <= 1){
    document.getElementById("welcome").innerHTML =
    "Hello " + name + "! How are you today?";
  } 

  document.getElementById("dayStart").innerHTML = "Its day " + day + ". You have $" + player.wallet + " in your wallet. You have " + player.tool[0].formattedName + " in your toolbelt. What would you like to do today?";

}

function checkIfWin(){
  if (player.wallet >= 30){
    pushConsole("Congrats You Won The Game!");
  }
}

function resetGame(){
  initializeGame();
  resetButtons();
  welcome();
}
//Start of Game logic
  //prompts for name and does welcome message
getName();
if (name != null) {
    showInventory();
    resetButtons();
    welcome();

    player.name = name;
    
}
