// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;  // como são valores posso fazer desta forma. Se fosse um objeto tinha de aceder às propriedades com o ponto
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){  // nova propriedade
        super (health, strength)  // vem de cima
        this.name = name;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
    

}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);  // You can't use += like if it was a number or a string concatenation. Usar array methods      
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){

      Saxon.receivedDamage() = Viking.strength// ???? receive damage of Saxon = strength of a viking


    }

    saxonAttack(){

    }

    showStatus(){
        if (this.saxonArmy.length == 0){ //??
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length == 0){ //??
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }


}
