console.log("up and running");

class Hero{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories']
    }

    talkSass(){
        let randdomPhrase = Math.floor(Math.random() * this.catchPhrases.length)
        console.log(this.catchPhrases[randdomPhrase])
    }

    announceHealth(){
        console.log(this.health);
    }

    fight(Enemy){
        let keys = Object.keys(this.weapons)
        let randomWeapon = Math.floor(Math.random() * keys.length);
        let keyName = keys[randomWeapon]
        console.log('i\'m ready to rumble with my ' + keyName + " it deals " + this.weapons[keyName] + " damage!")

        Enemy.health -= this.weapons[keyName]

        console.log("Take that! " + Enemy.name + "'s health is now " + Enemy.health)
    }
}

const Dougie = new Hero('Dougie');

console.log(Dougie);

class Enemy{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10 
        }
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }

    talkSmack(){
        let randdomPhrase = Math.floor(Math.random() * this.catchPhrases.length)
        console.log(this.catchPhrases[randdomPhrase])
    }

    announceHealth(){
        console.log(this.health);
    }

    fight(Enemy){
        let keys = Object.keys(this.weapons)
        let randomWeapon = Math.floor(Math.random() * keys.length);
        let keyName = keys[randomWeapon]
        console.log('i\'m gonna flatten you like a slice of pepperoni! with my ' + keyName + ". It deals " + this.weapons[keyName] + " damage!");

        Enemy.health -= this.weapons[keyName];

        console.log("Take that! " + Enemy.name + "'s health is now " + Enemy.health);
    }
}

const Ronnie = new Enemy('Ronnie')

console.log(Ronnie);

/*
Walking Down the Street
Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!

Have Dougie talkSass
Have Pizza Rat talkSmack
Have Dougie announceHealth
Have Pizza Rat announceHealth
*/

Dougie.talkSass();
Ronnie.talkSmack();
Dougie.announceHealth();
Ronnie.announceHealth();

/*
Fight!
Things have escalated between Dougie and Pizza Rat!

Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat))
Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.
Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')
*/

Dougie.fight(Ronnie);
Ronnie.fight(Dougie);
Dougie.announceHealth();
Ronnie.announceHealth();