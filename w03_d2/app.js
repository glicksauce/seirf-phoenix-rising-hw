console.log("up and running");

//Pseudocode
//The ability to take user input
    //What is your name
//The ability for the user to earn money
    //you did x work today you earned xx
//The ability to buy tools and use the new tool
    //you have x money, what tool would you like to buy
//The ability to win the game and end it
    //when when x lawns are mowed
//Hint: Try setting the win amount to $10 frst, then $50, and etc. until you get to the end to allow for easier testing!

let day = 1;

const player = {
    name: '',
    tool: 'teeth',
    wallet: 0
}

const tool = [{
    name: 'teeth',
    cost: 0,
    daysEarning: 1
},
{
    name: 'rusty scissors',
    cost: 5,
    daysEarning: 5
}
];

const town = {};

let name = prompt("Please enter your name", "enter name");

if (name != null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + name + "! How are you today?";

   player.name =name;

    document.getElementById("dayStart").innerHTML = "Its day " + day + ". You have $" + player.wallet + " in your wallet. You have " + player.tool + " in your toolbelt. What would you like to do today?";
  }

  document.getElementById("workToday").addEventListener("click", function(){
    doWork();
  });

  document.getElementById("goShopping").addEventListener("click", function(){
    buyTools();
  });

  document.getElementById("dayOff").addEventListener("click", function(){
    dayOff();
  });

  function doWork(){
    document.getElementById("dayStart").innerHTML = "You went to work today"
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
    document.getElementById("mainPrompt").innerHTML = "You have $" + player.wallet + " in your wallet. What would you like to buy?"
}
