class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Effect extends Card{
    constructor(name,cost,stat,magnitude){
        super(name,cost);
        this.stat = stat;
        this.magnitude = magnitude;
        if(magnitude>0){
            this.text = "increase target's " +stat+ " by " + magnitude;
        }
        else if(magnitude<0){
            this.text = "reduce target's " +stat+ " by " + (magnitude*-1);
        }
    }
    attack( target ) {
        if( target instanceof Unit ) {
            target.res += this.magnitude;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack( target ) {
        if( target instanceof Unit ) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja",	3,	3,	4);
const BlackBeltNinja = new Unit("Black Belt Ninja",	4,	5,	4);
const HardAlgorithm = new Effect("Hard Algorithm",	2,	"resilience", 3);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection",	1, "resilience",-2);
const PairProgramming = new Effect("Pair Programming",	3,	"power", 2);



HardAlgorithm.attack(RedBeltNinja);
console.log(RedBeltNinja)
UnhandledPromiseRejection.attack(RedBeltNinja);
console.log(RedBeltNinja)
PairProgramming.attack(RedBeltNinja);
console.log(RedBeltNinja)
RedBeltNinja.attack(BlackBeltNinja)
console.log(BlackBeltNinja)
console.log(HardAlgorithm)
