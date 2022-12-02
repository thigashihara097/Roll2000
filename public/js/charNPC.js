//Create object for storing NPC data
addEventListener('DOMContentLoaded', button);

function button(){
let submit= document.querySelector('button');
submit.addEventListener("click", getInfo);
}

class Character{
constructor(name, Class, level, dmname, race, alignment, experince, proficiency,stats){
this.name=name;
this.Class=Class;
this.level=level;
this.dmname=dmname; 
this.race=race; 
this.alignment=alignment;
this.experience=experince;
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
this.stats=stats;
this.calcMods=calcMods; 
}
}

class Npc extends Character{
constructor(name, Class, level, dmname, race, alignment, experince, proficiency, stats){
super(name, Class, level, dmname, race, alignment, experince, proficiency, stats); 
}
}

function returnprof(){
return this.proficiency;
}

function storeSpells(){
//I need help with the storing? 
//Guys help me out on this    



}

function storeMoney(){
//I need help with the storing? 
//Guys help me out on this    

}



function calcMods(){
this.stats.forEach(myFunction); 
function myFunction(){
    let mods=(stats[i]-10)/2;
    const modifier=[];
    modifier.push(mods[i]); 
    i++;
}
return modifier;
}

let npc={
perception:0, inspiration:0, 
    saveThrows:[0, 0, 0, 0, 0, 0],
/* saveThrows[0] is strength saving throw, saveThrows[1] is dexterity saving throw, 
saveThrows[2] is constitution saving throw, saveThrows[3] is intelligence saving throw, 
saveThrows[4] is wisdom saving throw and saveThrows[5] is charisma saving throw.
*/
Skills:[],
profLang:[], 
//profLang is all the other proficiencies and languages
movSpeed:20,
aC:10,
initiative:1,
hP:20, 
//hitDice: roll 1d10
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
perception:0, inspiration:0, 
saveThrows:[0, 0, 0, 0, 0, 0],
/* saveThrows[0] is strength saving throw, saveThrows[1] is dexterity saving throw, 
saveThrows[2] is constitution saving throw, saveThrows[3] is intelligence saving throw, 
saveThrows[4] is wisdom saving throw and saveThrows[5] is charisma saving throw.
*/

Skills:[],
profLang:[], 
movSpeed:30,
aC:23,
initiative:1,
hP:30, 
//hitDice: roll 1d10
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
    // let ins=document.getElementById("ins");
   // let arc=document.getElementById("armor");
   // let speed=document.getElementById("speed");
  // let hitPoints=document.getElementById("hp");
    const stats=[]; 
    stats.push(str.value, dex.value,con.value, int.value, wis.value, cha.value); 
    if (h.value=="Character"){
    const name=a.value;
    const Class=b.value;
    const level=c.value;
    const playername=d.value;
    const race=e.value;
    const alignment=f.value;
    const experience=g.value;
    let proficiency=0;
    const char=new Character(name, Class, level, playername, race, alignment, experience, proficiency, stats); 
    return char; 
    }else if (h.value=="NPC"){
    const name=a.value;
    const Class=b.value;
    const level=c.value;
    const playername=d.value;
    const race=e.value;
    const alignment=f.value;
    const experience=g.value;
    let proficiency=0;
    const npc=new Npc(name, Class, level, playername, race, alignment, experience, proficiency, stats); 
    return npc;    
    }
 
}

//Actually stores the info
function characterInfo(){
    if(h.value=="Character"){
         
    character.profLang.push("Common");
    character.stats.push(str.value, dex.value, con.value, int.value, wis.value, cha.value);
        let sMod=(str.value-10)/2;
        let dMod=(dex.value-10)/2;
        let cMod=(con.value-10)/2;
        let iMod=(int.value-10)/2;
        let wMod=(wis.value-10)/2;
        let chMod=(cha.value-10)/2;
        character.statMods.push(Math.round(sMod), Math.round(dMod), Math.round(cMod), Math.round(iMod),
        Math.round(wMod), Math.round(chMod));
        //character.moreStats[0]=10+character.statMods[4];
       // character.moreStats[1]=ins.value;
       // character.moreStats[2]=pb.value;
        character.aC=arc.value;
        character.initiative=Math.round(dMod);
        character.movSpeed=speed.value;
        character.hP=hitPoints.value;
    }else if(h.value=="NPC"){
        npc.name=a.value;
        npc.class=b.value;
        npc.level=c.value;
        npc.dmname=d.value;
        npc.race=e.value;
        npc.alignment=f.value;
        npc.experience=g.value;
        npc.profLang.push("Common");
        npc.stats.push(str.value, dex.value, con.value, int.value, wis.value, cha.value);
        let sMod=(str.value-10)/2;
        let dMod=(dex.value-10)/2;
        let cMod=(con.value-10)/2;
        let iMod=(int.value-10)/2;
        let wMod=(wis.value-10)/2;
        let chMod=(cha.value-10)/2;
        npc.statMods.push(Math.round(sMod), Math.round(dMod), Math.round(cMod), Math.round(iMod),
        Math.round(wMod), Math.round(chMod));
       // npc.moreStats[0]=10+npc.statMods[4];
       // npc.moreStats[1]=ins.value;
       // npc.moreStats[2]=pb.value;
        npc.aC=arc.value;
        npc.initiative=Math.round(dMod);
        npc.movSpeed=speed.value;
        npc.hP=hitPoints.value;
    }
}




