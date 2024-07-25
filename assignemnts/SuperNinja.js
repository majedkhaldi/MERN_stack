class Ninja {
     constructor(name) {
          this.name = name;
          this.health = 90;
          this.speed = 3;
          this.strength = 3;

     }
     sayName=()=> console.log("hello"+this.name);
     showStats=()=> console.log(this.name,this.health,this.speed,this.strength)
     drinkSake=()=> this.health+=10;
}

class Sensei extends Ninja{
     constructor(name){
          super(name);
          this.health = 200;
          this.speed = 10;
          this.strength = 10;
          this.wisdom = 10;
     }

     speakWisdom = () => this.drinkSake()
}



// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();
