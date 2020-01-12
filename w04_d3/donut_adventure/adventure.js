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

    fight(){
        console.log('i\'m ready to rumble');
    }
}

const Dougie = new Hero('Dougie');

console.log(Dougie);