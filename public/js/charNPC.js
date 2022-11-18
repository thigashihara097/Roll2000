//Create object for storing NPC data
addEventListener('DOMContentLoaded', button);

function button(){
let submit= document.querySelector('button');
submit.addEventListener("click", characterInfo);
}

function returnCInfo(){
    return character;
}

function returnNInfo(){ 
    return npc;  
}
function calcStatModsC(){
    for (let i=0; i<character.stats.length; i++){
    let s=character.stats[i]; 
    s=(s-10)/2;
    character.statMods.push[s];
    }
    character.spellCastingClass=character.class;
}
function calcStatModsNPC(){
    for (let i=0; i<npc.stats.length; i++){
        let z=npc.stats[i]; 
        z=(z-10)/2;
        character.statMods.push[z];

}
npc.spellCastingClass=npc.class;
}





let npc={
    name: "", class: "",  level:1, dmname: "", 
    race: "", alignment: "", experience:0, 
   stats:[],
   /*Strength is stats[0], dexterity is stats[1], constitution is stats[2], 
   intelligence is stats[3], wisdom is stats[4], charisma is stats[5].
*/
    statMods:[], 
      /*Strength modifier is statmods[0], dexterity modifier is statmods[1], 
      constitution modifier is statmods[2], intelligence modifier is statmods[3], 
      wisdom modifier is statmods[4], charisma is statmods[5].
*/
    moreStats:[0, 0, 2],
    /* moreStats[0] is perception, moreStats[1] is inspiration and moreStats[2] is 
    proficiency bonus. 
    */
    saveThrows:[0, 0, 0, 0, 0, 0],
/* saveThrows[0] is strength saving throw, saveThrows[1] is dexterity saving throw, 
saveThrows[2] is constitution saving throw, saveThrows[3] is intelligence saving throw, 
saveThrows[4] is wisdom saving throw and saveThrows[5] is charisma saving throw.
*/
    profLang:[], 
/* profLang is all the other proficiencies and languages
*/
movSpeed:20,
aC:10,
initiative:1,
hP:20, 
tempHp:5,
/*hitDice: roll 1d10
*/ 
deathSavesSuccesses:0,
deathSavesFails:0,
personalityTraits:[], 
ideals:[], 
bonds:[], 
flaws:[], 
featuresTraits:[],
spellCastingClass:"",
spellCastingAbility:1,
spellDC:1, 
spellAttackBonus:1, 
cantrips:[], 
lvl1:[], 
lvl2:[], 
lvl3:[], 
lvl4:[], 
lvl5:[], 
lvl6:[], 
lvl7:[], 
lvl8:[], 
lvl9:[]
};



//Create object for storing character sheet info
let character={
    name: "",  class: "",  level:1, playername: "", 
    race: "", alignment: "", experience:0,
    stats:[],
   /*Strength is stats[0], dexterity is stats[1], constitution is stats[2], 
   intelligence is stats[3], wisdom is stats[4], charisma is stats[5].
*/

    statMods:[], 
     /*Strength modifier is statmods[0], dexterity modifier is statmods[1], 
      constitution modifier is statmods[2], intelligence modifier is statmods[3], 
      wisdom modifier is statmods[4], charisma is statmods[5].
*/
moreStats:[0, 0, 2],
/* moreStats[0] is perception, moreStats[1] is inspiration and moreStats[2] is 
proficiency bonus. 
*/
saveThrows:[0, 0, 0, 0, 0, 0],
/* saveThrows[0] is strength saving throw, saveThrows[1] is dexterity saving throw, 
saveThrows[2] is constitution saving throw, saveThrows[3] is intelligence saving throw, 
saveThrows[4] is wisdom saving throw and saveThrows[5] is charisma saving throw.
*/

profLang:[], 
/* profLang is all the other proficiencies and languages
*/
movSpeed:30,
aC:23,
initiative:1,
hP:30, 
tempHp:10,
/*hitDice: roll 1d10
*/ 
deathSavesSuccesses:0,
deathSavesFails:0,
personalityTraits:[], 
ideals:[], 
bonds:[], 
flaws:[], 
featuresTraits:[],
spellCastingClass:"",
spellCastingAbility:1,
spellDC:1, 
spellAttackBonus:1, 
cantrips:[], 
lvl1:[], 
lvl2:[], 
lvl3:[], 
lvl4:[], 
lvl5:[], 
lvl6:[], 
lvl7:[], 
lvl8:[], 
lvl9:[]

};


//Actually stores the info
function characterInfo(){
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
    if(h.value=="Character"){
    character.name=a.value;
    character.class=b.value;
    character.level=c.value;
    character.playername=d.value;
    character.race=e.value;
    character.alignment=f.value;
    character.experience=g.value;
    character.profLang.push("Common");
    character.stats.push(str.value, dex.value, con.value, int.value, wis.value, cha.value);
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
    }
}




