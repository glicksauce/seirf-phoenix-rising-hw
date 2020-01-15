//refactoring in progress. somewhat works but coding in progress

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
    constructor(hull, firepower, accuracy, pods, name, maxHealth, missileCount){
        this.hull = hull || 3
        this.firepower = firepower || 2
        this.accuracy = accuracy || .6
        this.pods = []
        this.name = name || 'unnamed'
        this.maxHealth = hull
        this.missileCount =  0
    }

    declareHealth = () => {
        console.log("Ship " + this.name + ", hull strength: " + this.hull + " missile count: " + this.missileCount) 
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
            console.log(this.name+ " scored a hit!")
            return fpower
        } else {
            console.log(this.name + " missed!");
            return 0
        }
    }

    damageTaken = (damage) => {
        console.log(damage + " damage has been dealt to ship: " + this.name)
        this.hull -= damage;
        return this.hull
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
genShip(2,enemyHorde);

//generates enemy megaship
genShip(1,enemyMegaship)
//manually adjust megaship stats
enemyMegaship[0].hull = 15;

//takes 2 classes. left class fires on right class. this should return a value
const shipBattle = (leftShip, rightShip) => {
    let missleUse = 0;
    let leftPlayerFirePower = leftShip.firepower
    let rightPlayerFirePower = rightShip.firepower
    //stats before start of battle
    leftShip.declareHealth()
    rightShip.declareHealth()

    //check if you want to use missles
    if (leftShip.missleCount > 0){
        missleUse = prompt("Do you want to use one of your missles this fight?")
    }

    //before leftShip shoots
    //if using missle's then upgrade firepower
    if (missleUse == 'Yes' || missleUse == 'yes'){
        leftShip.missleCount -= 1;
        leftPlayerFirePower = 10
        console.log("you used one of your missiles")
    }

    //leftShip shoots
    //damage calculated to enemy
    //rightShip.calcDamageDealt(
    let damageToEnemy = leftShip.shotsFired(leftPlayerFirePower)

    //removes HP from ship and returns hull to this variable 
    let rightShipHull = rightShip.damageTaken(damageToEnemy);

    //should be separate functions:
    /*
    //is enemydead?
    if (rightShipHull <= 0){
        console.log("enemy ship destroyed")
        eval(parentArrayName).splice(rightShipIndex,1)
    } else {
        console.log("Enemy hull report: " + rightShip.declareHealth())
    }

    //enemy shoots
    //damage calculcated
    damageByEnemy = shotsFired(rightShip.firepower)
    console.log(damageByEnemy + " damage has been dealt to your ship")
    leftShip.damageTaken(damageByEnemy)
    leftShip.declareHealth()

    //is player dead
    if (leftShip.hull <= 0){
        console.log("your ship was destroyed")
        console.log("You got blown up, GAME OVER")
        gameOver = true;
        return;
    }
     */   
     
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
        //you attack a ship
        shipBattle(ussScwarznegger,enemyHorde[shipToAttack])

        //ship attacks you
        for (i=0;i<enemyHorde.length;i++){
            shipBattle(enemyHorde[i],ussScwarznegger)
        }

        if (!gameOver){
            //check if you won
            if (enemyHorde.length <= 0 ){
                console.log("Congrats you defeated the enemy horde!...")
                finalBattle();
            }
            if (!gameOver){
                ussScwarznegger.shieldRegen();
            }
        }   
    } else if (playerAction == 'retreat'){
        console.log("You ran away from the remaining " + enemyHorde.length + " ships. The game is over")
        gameOver = true;
    }
}


