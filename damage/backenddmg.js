/* generic dice function
*/
function rolldNum(num){
    return Math.floor(Math.random() * num)+1;
}
function rolld100(){
    return rolldNum(100);
}
function rolld20(){
    return rolldNum(20);
}
function rolld12(){
    return rolldNum(12);
}
function rolld8(){
    return rolldNum(8);
}
function rolld6(){
    return rolldNum(6);
}
function rolld4(){
    return rolldNum(4);
}
function roll5(){
    return 5;
}

/*attack function
takes a attacking object, and a target to attack, returns damage,
*/
function Attack(weapon, attackee){
   if(hitCheck(weapon, attackee)){
        return damage(weapon, attackee); 
    }
    return 0;
}
function Attackt(weapon, attackee){
    if(hitCheckt(weapon, attackee, roll5())){
         return damage(weapon, attackee); 
     }
     return 0;
 }

function damage(source, damagee){
    let d=source.dealDamage();
    damagee.hp=damagee.hp-d;
    return d;
}
/*
hit function
takes a source that can atttempt attacks and and an attackee 
and checks if an attack hits, returns true if the attack hit 
and false if the attack misses. 
*/
function hitCheck(attacker, attackee){
    hitCheckt(attacker, attackee, rolld20)
}
function hitCheckt(attacker, attackee, roller){
    let r= roller;
    let h=attacker.hitmod();
    r+=h;
    if(r>=attackee.ac){
        return true;
    }
    return false
}
/*
spell casting function, takes a spell and targets then either
excutes a simple attack agaisnt the target, or if it is not an attack
it effects all targets
*/
function cast(spell, targets){
    console.log(spell.description);
    if(spell.returnIfAttack()){
    Attack(spell,targets);
    }
    else{
        targets.array.forEach(element => {
            spell.effect(element);
        });
    }
}
//added functions for testing code

function testCharacter(str,dex,ac,hp){
    this.str=str;
    this.dex=dex;
    this.ac=ac;
    this.hp=hp;
}

function Itemt ( isWeapon, attackDieFaces, attackDieNumber, character) {
    this.isWeapon = isWeapon; //boolean
    this.attackDieFaces = attackDieFaces; //corresponds to the faces of the die used to calculate damage
    this.attackDieNumber = attackDieNumber; //corresponds with the number of die used when attacking
    this.character= character;
}
Itemt.prototype.hitmod = function () {
    return this.character.str;
}
// damage calc
Itemt.prototype.dealDamage = function () {
   if (!this.isWeapon){ //case of improvised weapon
        return rolldNum(4);
    }
    numDie = this.attackDieNumber;
    let damage = 0;
    while (numDie > 0){
        damage += rolldNum (this.attackDieFaces);
        numDie--;
    }
    return this.attackDieFaces;
}

Itemt.prototype.returnIfWeapon = function(){return this.isWeapon}
Itemt.prototype.setIfWeapon = function(attack){this.isWeapon = attack}

/*
initList takes an array of combatants and sorts them by their
initative roll which it makes. it then checks whether they are an 
NPC, PC or DMPC, providing the user with prompts at each turn 
depending on which it is.
*/

/*function initList(combatants){
    
    for(let i=0; i<combatants.length; i++){
        combatants[i].curinit=rolld20()+combatants.initiative;
    }
    combatants.sort(function(a, b){return b.curinit - a.curinit});
    for(let i=0; i<combatants.length; i++){
        let c=combatants[i];
        if (c.isNPC){
            user prompt
        }
        if(c.isPC){
            user prompt
        }
        if(c.isDMPC){
            user prompt
        }
    }
}*/
module.exports.roll5=roll5;
module.exports.hitCheckt=hitCheckt;
module.exports.hitCheck=hitCheck;
module.exports.Itemt=Itemt;
module.exports.testCharacter=testCharacter;
module.exports.Attack=Attack;
module.exports.Attackt=Attackt;
module.exports.damage=damage;