//Pseudo
/*Needs: 
    Class for alien ships, -
    class/object for your ship, -
    functions to generate random ship stats and assign to array - 
    array of enemy ships --
    function to simulate battle - 
    prompt to keep fighting or retreat - 
*/

class Ship {
    constructor(hull, firepower, accuracy, pods, name){
        this.hull = hull || 3
        this.firepower = firepower || 2
        this.accuracy = accuracy || .6
        this.pods = []
        this.name = name
        this.maxHealth = hull
    }

    missleCount = 0;
}

//declare your ship and stats
let ussScwarznegger = new Ship(20, 5, .7)
ussScwarznegger.missleCount = Math.floor((Math.random()*5));

let enemyHorde = [];
let enemyMegaship = [];
let gameOver = false;

//generates ship stats then pushes ship to enemyHorde
const genShipStats = (shipQty,arrayToPush) => {
    let hull = 0;
    let firepower = 0;
    let accuracy = 0;
    for (let j = 0;j<shipQty;j++){
        for (i=0;i<3;i++){
            hull = (Math.round(Math.random() * (6-3) + 3))
            firepower = (Math.round(Math.random()*2)+2)
            accuracy = (Math.round(Math.random()*(80-60))+60)
        }

        let ship = new Ship(hull,firepower,accuracy)
        arrayToPush.push(ship)
    }

}

//generates mega-ship then pushes 
const genMegaShipPods = () =>{
    let podsCount = (Math.ceil(Math.random() * 3))
    genShipStats(1,enemyMegaship)

    //random stats for weapons pods/
    for (let i = 0; i < podsCount; i++){
        let hull = (Math.round(Math.random() * (5-3) + 3))
        let firepower = (Math.round(Math.random()*(5-3))+3)
        let accuracy = (Math.round(Math.random()*(85-65))+66)

        //pushes weapon pods to the megaship
        let podElement = new Ship(hull,firepower,accuracy,null,'pod' + i)
        enemyMegaship[0].pods.push(podElement)
    }

    

}

//generates x number of enemy ships
//genShipStats(Math.floor(Math.round(Math.random()*(10-4)+4)),enemyHorde);
genShipStats(1,enemyHorde);

//generates enemy megaship
genMegaShipPods()
//manually adjust megaship stats
enemyMegaship[0].hull = 15;

const shipBattle = (playerShip, enemyShip, enemyShipIndex) => {
    let missleUse = 0;
    //stats before start of battle
    console.log("starting health: Your ship, " + playerShip.hull + " Enemy ship, " 
    + enemyShip[enemyShipIndex].hull)
    console.log("missiles remaining: " + ussScwarznegger.missleCount)

    //check if you want to use missles
    if (ussScwarznegger.missleCount > 0){
        missleUse = prompt("Do you want to use one of your missles this fight?")
    }


    //playerShip shoots
    //damage calculated
    if (missleUse == 'Yes' || missleUse == 'yes'){
        ussScwarznegger.missleCount -= 1;
        playerShip.firepower = 10
        console.log("you used one of your missiles")
    }
    //playerShip shoots
    //damage calculated
    let damageToEnemy = shotsFired(playerShip.firepower,playerShip.accuracy, "You")
    console.log(damageToEnemy + " damage has been dealt to enemy ship")
    enemyShip[enemyShipIndex].hull -= damageToEnemy;
    //console.log(enemyMegaship[0].hull, enemyShip[enemyShipIndex].hull, damageToEnemy);

    //is enemydead?
    if (enemyShip[enemyShipIndex].hull <= 0){
        console.log("enemy ship destroyed")
        enemyShip.splice(enemyShipIndex,1)
    } else {
        console.log("enemy hull is at " + (enemyShip[enemyShipIndex].hull))
    }

    //enemy shoots
    //updated so all enemies can attack at once
    //damage calculcated
    if (enemyShip.length > 0){
        for (let ShipIndex = 0; ShipIndex < enemyShip.length; ShipIndex++){
            damageByEnemy = shotsFired(enemyShip[ShipIndex].firepower,enemyShip[ShipIndex].accuracy, ("The enemy ship " + ShipIndex))
            console.log(damageByEnemy + " damage has been dealt to your ship")
            ussScwarznegger.hull -= damageByEnemy;

            //is player dead
            if (playerShip.hull - damageByEnemy <= 0){
                console.log("your ship was destroyed")
                console.log("You got blown up, GAME OVER")
                gameOver = true;
                return;
            } else {
                console.log("your hull is at " + (ussScwarznegger.hull))
            }
        }
    }   
}

const shotsFired = (fpower, accuracy, shipName) => {
    let randomDraw = Math.random();
    console.log("randomDraw is " + randomDraw + "accuracy is " + accuracy)
    if (randomDraw <= accuracy) {
        console.log(shipName + " scored a hit!")
        return fpower
    } else {
        console.log(shipName + " missed!");
        return 0
    }
}

const shieldRegen = () => {
    //replenish shields
    let randomShieldGen = Math.floor((Math.random()*5));
    if (randomShieldGen > 1){
        console.log('starting hull ' + ussScwarznegger.hull);
        randomShieldGen -= 1 //if 0 or 1 than no shields but make it so if you get shields you don't get as much
        ussScwarznegger.hull += randomShieldGen
        console.log("You tried to increase shields and succeeded you adeed " + randomShieldGen + " to your hull. Total hull strength now at " + ussScwarznegger.hull)
    } else {
        console.log("You tried to generate shields but failed this time")
    }
}

const finalBattle = () => {
    console.log("...but there is still the final battle");

    let playerAction = prompt("The enemy megaship has arrived. You must defeats its weapons pods before you can attack the ship itself. Do you still want to fight (type 'battle' or 'retreat')");

    if (playerAction == 'battle') {
        console.log("You have decided to battle");
        //console.log(!gameOver, ussScwarznegger.hull, enemyMegaship.length);
        while (!gameOver && ussScwarznegger.hull > 0 && enemyMegaship.length > 0){
            //have to defeat the pods before fighting them megaship
            while (enemyMegaship[0].pods.length > 0) {
                console.log("remaining Megaship weaapons pods:")
                for (let k = 0; k < enemyMegaship[0].pods.length; k++){
                    console.log("-pod " + k + " hull " + enemyMegaship[0].pods[k].hull);
                }
                let podPrompt = prompt('which weapons pod should we attack?')
                shipBattle(ussScwarznegger, enemyMegaship[0].pods, podPrompt)
            }
            console.log("all weapons pods destroyed, only thing left to defeat is the Megaship itself")
            shipBattle(ussScwarznegger,enemyMegaship,0)
        }
    } else if (playerAction == 'retreat'){
        console.log("You ran away from the megaship. The game is over")
        gameOver = true;
    }

}
//console.log(enemyHorde)
console.log(enemyMegaship);

while (enemyHorde.length > 0  && ussScwarznegger.hull > 0 && gameOver == false){
    let playerAction = prompt("There are " + enemyHorde.length + " left to fight. type 'battle' to continue or 'retreat' to retreat")

    if (playerAction == 'battle') {
        console.log("You have decided to battle. Choose which ship you want to fight:")
            for (i=0;i<enemyHorde.length;i++){
                console.log("-enemy " + i + " hull:" + enemyHorde[i].hull)
            }

        let shipToAttack = prompt("which ship do you wish to attack")
        shipBattle(ussScwarznegger,enemyHorde, shipToAttack)

        if (!gameOver){
            //check if you won
            if (enemyHorde.length <= 0 ){
                console.log("Congrats you defeated the enemy horde!...")
                finalBattle();
            }
            if (!gameOver){
                shieldRegen();
            }
        }   
    } else if (playerAction == 'retreat'){
        console.log("You ran away from the remaining " + enemyHorde.length + " ships. The game is over")
        gameOver = true;
    }
}


