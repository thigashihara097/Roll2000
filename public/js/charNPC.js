//Create object for storing NPC data
addEventListener('DOMContentLoaded', button);

function button(){
let submit= document.querySelector('button');
submit.addEventListener("click", getInfo);
}

class Character{
constructor(name, Class, level, dmname, race, alignment, experince, proficiency,stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative){
this.name=name; this.Class=Class; this.level=level; this.dmname=dmname; 
this.race=race; this.alignment=alignment; this.experience=experince;
this.proficiency=proficiency;
if(this.level>=1 && this.level<5){
this.proficiency=2;
}else if (this.level>=5 && this.level<9){
this.proficiency=3;     
}else if (this.level>=9 && this.level<13){
this.proficiency=4;
}else if(this.level>=13 && this.level<17){
this.proficiency=5;    
}else if(this.level>=17){
this.proficiency=6;    
}
this.stats=stats; this.modArray=modArray;
this.perception=perception; this.inspiration=inspiration; this.aC=aC; 
this.hp=hp;
this.movSpeed=movSpeed;
this.initiative=initiative;
}
}

class Npc extends Character{
constructor(name, Class, level, dmname, race, alignment, experince, proficiency, stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative){
super(name, Class, level, dmname, race, alignment, experince, proficiency, stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative); 
}
}

function storeSpells(){
//I need help with the storing? 
//Guys help me out on this    
}

function storeMoney(){
//I need help with the storing? 
//Guys help me out on this    
}

let npc={
    saveThrows:[0, 0, 0, 0, 0, 0],
/* saveThrows[0] is strength saving throw, saveThrows[1] is dexterity saving throw, 
saveThrows[2] is constitution saving throw, saveThrows[3] is intelligence saving throw, 
saveThrows[4] is wisdom saving throw and saveThrows[5] is charisma saving throw.
*/
Skills:[],
profLang:[], 
deathSavesSuccesses:0,
deathSavesFails:0,
spellCastingClass:"",
spellCastingAbility:1,
spellDC:1, 
spellAttackBonus:1, 
//spells:[lvl][spells], 
//money:[type][amt], 
equiptment:[]
};



//Create object for storing character sheet info
let character={ 
saveThrows:[0, 0, 0, 0, 0, 0],
/* saveThrows[0] is strength saving throw, saveThrows[1] is dexterity saving throw, 
saveThrows[2] is constitution saving throw, saveThrows[3] is intelligence saving throw, 
saveThrows[4] is wisdom saving throw and saveThrows[5] is charisma saving throw.
*/
Skills:[],
profLang:[], 
deathSavesSuccesses:0,
deathSavesFails:0,
spellCastingClass:"",
spellCastingAbility:1,
spellDC:1, 
spellAttackBonus:1, 
//spells:[lvl][spells], 
//money:[type][amt], 
equiptment:[]
};

function getInfo(){
    let a=document.getElementById("Name"); 
    let b=document.getElementById("characterClass");
    let c=document.getElementById("level");
    let d=document.getElementById("playerName");
    let e=document.getElementById("r");
    let f=document.getElementById("a");
    let g=document.getElementById("exp");
    let h=document.getElementById("ct");
    let str=document.getElementById("str");
    let dex=document.getElementById("dex");
    let con=document.getElementById("con");
     let int=document.getElementById("int");
     let wis=document.getElementById("wis");
     let cha=document.getElementById("cha");
     let ins=document.getElementById("ins");
    let arc=document.getElementById("armor");
    let speed=document.getElementById("speed");
    let hitPoints=document.getElementById("hp");
    const aC=arc.value;
    const hp=hitPoints.value;
    const movSpeed=speed.value;
    const stats=[]; 
    stats.push(str.value, dex.value,con.value, int.value, wis.value, cha.value); 
    const mods=[]; 
    let num; 
    let calc;
    for (let i=0; i<stats.length; i++){
        num=stats[i];
        calc=(num-10)/2;
         mods.push(Math.round(calc));
    }
    const perception=10+mods[4];
    const name=a.value;
    const Class=b.value;
    const level=c.value;
    const playername=d.value;
    const race=e.value;
    const alignment=f.value;
    const experience=g.value;
    const inspiration=ins.value;
    let proficiency=0;
    const initiative=mods[1];
    if (h.value=="Character"){
    const char=new Character(name, Class, level, playername, race, alignment, experience, proficiency, stats, mods, perception, 
    inspiration, aC, hp, movSpeed, initiative); 
    return char; 
    }else if (h.value=="NPC"){
    const npc=new Npc(name, Class, level, playername, race, alignment, experience, proficiency, stats, mods, perception, 
    inspiration, aC, hp, movSpeed, initiative); 
    return npc;    
    }
}

//Actually stores the info
function characterInfo(){
    if(h.value=="Character"){
    character.profLang.push("Common");
    }else if(h.value=="NPC"){
        npc.profLang.push("Common");
    }
}
