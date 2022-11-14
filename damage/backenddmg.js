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

/*attack function
takes a weapon, and a target to attack, returns damage,
*/
function Attack(weapon, attackee){
   if(hitCheck(weapon, attackee)){
        return damage(weapon, attackee); 
    }
}

function damage(source, damagee){
    d=source.dealDamage();
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
    let r= rolld20();
    r+=attacker.hitmod();
    if(r-1>attackee.ac){
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
    if(spell.isAttack){
    Attack(spell,targets);
    }
    else{
        targets.array.forEach(element => {
            spell.effect(element);
        });
    }
}
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