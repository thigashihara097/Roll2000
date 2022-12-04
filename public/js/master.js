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
    if(spell.retrunIfAttack){
    Attack(spell,targets);
    }
    else{
        targets.array.forEach(element => {
            spell.effect(element);
        });
    }
}