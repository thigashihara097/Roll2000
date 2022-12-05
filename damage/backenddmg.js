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
function Attack(weapon, attackee,advantage){
   if(hitCheck(weapon, attackee, advantage)){
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
/* switch case funtion for use with right click drop down*/
testCharacter.prototype.charActions=function(action,enemies){
switch (action){
    case "Attack":
        var attack=this.items[parseInt(prompt("select a number "+this.atkChoice()))];
        var attackee=prompt(enemies);
        attack(attack,attackee,0);
        break;
    case "Cast":
        var spell=prompt(this.spells());
        var target=prompt(enemies);
        cast(spell,target);
        break;    
}
}
testCharacter.prototype.atkChoice=function(){
   var str="";
   for (i = 0; i < this.Attacks.length; i++){
        str+=i+":"+this.Attacks[i];
   }
    return str;
}
testCharacter.prototype.spells=function(){
    return this.spells;
}
/*
hit function
takes a source that can atttempt attacks and and an attackee 
and checks if an attack hits, returns true if the attack hit 
and false if the attack misses. 
*/
function hitCheck(attacker, attackee, advantage){
    hitCheckt(attacker, attackee, advantage, rolld20)
}
function hitCheckt(attacker, attackee, advantage, roller){
    if(advantage>0){
        let r1= new roller;
        let r2= new roller;
        let r= Math.max(r1,r2);
    }
    else if(advantage<0){
        let r1= new roller;
        let r2= new roller;
        let r= Math.min(r1,r2);
    }
    else{
        let r= new roller;
    }
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
    this.Attacks=[];
    this.items=[];
    this.weapons=[];

}
testCharacter.prototype.addItem=function(item){
    if(item.isWeapon){
        this.weapons.push(item);
        this.Attacks.push(item.detailText);
    }
    this.items.push(item);
}

function Itemt ( isWeapon, attackDieFaces, attackDieNumber, character,detailText) {
    this.isWeapon = isWeapon; //boolean
    this.attackDieFaces = attackDieFaces; //corresponds to the faces of the die used to calculate damage
    this.attackDieNumber = attackDieNumber; //corresponds with the number of die used when attacking
    this.character= character;
    this.detailText = detailText;
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

function initList(combatants){
    
    for(let i=0; i<combatants.length; i++){
        combatants[i].curinit=rolld20()+combatants.initiative;
    }
    combatants.sort(function(a, b){return b.curinit - a.curinit});
    for(let i=0; i<combatants.length; i++){
        let c=combatants[i];
        var action=prompt("Attack or Cast?")
        c.charActions(action);
    }
}
module.exports.roll5=roll5;
module.exports.hitCheckt=hitCheckt;
module.exports.hitCheck=hitCheck;
module.exports.Itemt=Itemt;
module.exports.testCharacter=testCharacter;
module.exports.Attack=Attack;
module.exports.Attackt=Attackt;
module.exports.damage=damage;