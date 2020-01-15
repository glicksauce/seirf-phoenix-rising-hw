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
        this.missileCount = 0
    }

    declarehealth = () => {
        console.log("Ship " + this.name + " Hull strength: " + playerShip.hull + " Enemy ship, " + " Missile Count: " + this.missles) 
    }

    //sets ship stats to radom parameters
    genShipStats = () => {
        this.hull = (Math.round(Math.random() * (6-3) + 3))
        this.firepower = (Math.round(Math.random()*2)+2)
        this.accuracy = (Math.round(Math.random()*(80-60))+60)
    }

    //generates weapons pods then pushes them to a ship
    genMegaShipPods = () => {
        //random number of ship weapons pds
        let podsCount = (Math.ceil(Math.random() * 3))

        //pushes pods to enemyMegaship array
        genShipStats(1,enemyMegaship)

        //random stats for weapons pods/
        for (let i = 0; i < podsCount; i++){
            let hull = (Math.round(Math.random() * (5-3) + 3))
            let firepower = (Math.round(Math.random()*(5-3))+3)
            let accuracy = (Math.round(Math.random()*(85-65))+66)

            //pushes weapon pods to the megaship
            let podElement = new Ship(hull,firepower,accuracy,null,'pod' + i)
            this.pods.push(podElement)
        }
    }

    //calculates and returs damage done by this ship
    shotsFired = (fpower) => {
        let randomDraw = Math.random();
        console.log("randomDraw is " + randomDraw + "accuracy is " + this.accuracy)
        if (randomDraw <= this.accuracy) {
            console.log(this.shipName + " scored a hit!")
            return fpower
        } else {
            console.log(this.shipName + " missed!");
            return 0
        }
    }

    damageTaken = (damage) => {
        console.log(damageToEnemy + " damage has been dealt to ship " + this.name)
        this.hull -= damage;
    }

    shieldRegen = () => {
        //replenish shields
        let randomShieldGen = Math.floor((Math.random()*5));
        if (randomShieldGen > 1){
            console.log('starting hull ' + this.hull);
            randomShieldGen -= 1 //if 0 or 1 than no shields but make it so if you get shields you don't get as much
            this.hull += randomShieldGen;
            console.log("You tried to increase shields and succeeded you adeed " + randomShieldGen + " to your hull. Total hull strength now at " + this.hull)
        } else {
            console.log("You tried to generate shields but failed this time")
        }
    }
}

//declare your ship and stats
let ussScwarznegger = new Ship(20, 5, .7, 0, 'USS Schwarz')
ussScwarznegger.missleCount = Math.floor((Math.random()*5));

//declare enemy ship arrays
let enemyHorde = [];
let enemyMegaship = [];

//declare game sate
let gameOver = false;



//generates new ship(s) then pushes to array specified
    const genShip = (shipQty,arrayToPush) => {
        for (let j = 0;j<shipQty;j++){
            let ship = new Ship()
            arrayToPush.push(ship)
        }
    }

//generates x number of enemy ships
//genShipStats(Math.floor(Math.round(Math.random()*(10-4)+4)),enemyHorde);
genShipStats(1,enemyHorde);

//generates enemy megaship
genMegaShipPods()
//manually adjust megaship stats
enemyMegaship[0].hull = 15;

//takes 2 classes and an index
const shipBattle = (playerShip, enemyShip, enemyShipIndex) => {
    let missleUse = 0;
    let leftPlayerFirePower = playerShip.firepower
    let rightPlayerFirePower = enemyShip.firepower
    //stats before start of battle
    playerShip.declareHealth()
    enemyShip.declareHealth()

    //check if you want to use missles
    if (playerShip.missleCount > 0){
        missleUse = prompt("Do you want to use one of your missles this fight?")
    }

    //before playerShip shoots
    //if using missle's then upgrade firepower
    if (missleUse == 'Yes' || missleUse == 'yes'){
        playerShip.missleCount -= 1;
        leftPlayerFirePower = 10
        console.log("you used one of your missiles")
    }

    //playerShip shoots
    //damage calculated to enemy
    //enemyShip.calcDamageDealt(
    let damageToEnemy = playerShip.shotsFired(leftPlayerFirePower)
    enemyShip.damageTaken(damageToEnemy);

    //is enemydead?
    if (enemyShip.hull <= 0){
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


