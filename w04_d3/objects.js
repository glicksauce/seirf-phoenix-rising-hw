//Creating Classes
/*
Hamster
attributes:
owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price
*/

class Hamster {
    constructor(name){
        this.owner = 'd';
        this.name = name;
        this.price = 15;   
    }

    wheelRun (){
        console.log("squeak squeek");
    }

    eatFood(){
        console.log("nibble nibble");
    }

    getPrice(){
        return this.price;
    }
}

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName (){
        return this.name;
    }

    getAge() {
        return this.age
    }

    getWeight(){
        return this.weight
    }

    greet(){
        console.log("hello " + this.name)
    }

    eat(){
        this.weight += .5 * this.mood
    }

    exercise(){
        this.weight -= 1;
    }

    ageUp(){
        this.age++;
        this.height++
        this.weight += 2;
        this.mood --;
        this.bankAccount += 10
    }

    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood += 10;
        let hamsterPrice = Hamster.getPrice(hamster);
        this.bankAccount -= hamsterPrice;
    }
}