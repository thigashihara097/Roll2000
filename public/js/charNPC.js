//Create object for storing NPC data
addEventListener('DOMContentLoaded', button);

function button(){
let submit= document.querySelector('button');
submit.addEventListener("click", characterInfo);
}

let npc={
    name: "", class: "",  level:1, dmname: "", 
    //Add background later 
    race: "", alignment: "", experience:0, 
   stats:[0, 0, 0, 0, 0, 0],
   /*Strength is stats[0], dexterity is stats[1], constitution is stats[2], 
   intelligence is stats[3], wisdom is stats[4], charisma is stats[5].
*/
    statMods:[0, 0, 0, 0, 0, 0], 
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
featuresTraits:[]

};



//Create object for storing character sheet info
let character={
    name: "",  class: "",  level:1, playername: "", 
    //Add background later 
    race: "", alignment: "", experience:0,
    stats:[0, 0, 0, 0, 0, 0],
   /*Strength is stats[0], dexterity is stats[1], constitution is stats[2], 
   intelligence is stats[3], wisdom is stats[4], charisma is stats[5].
*/

    statMods:[0, 0, 0, 0, 0, 0], 
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
featuresTraits:[]

};


//Actually stores the info
function characterInfo(){
//Create html elements, get info from elements and store them in objects
//Get info from objects and use it for mods, prof bonus, spells, etc.
//Store it in npc or character depending upon selection


    let a=document.getElementById("Name"); 
    let b=document.getElementById("characterClass");
    let c=document.getElementById("level");
    let d=document.getElementById("playerName");
    let e=document.getElementById("r");
    let f=document.getElementById("a");
    let g=document.getElementById("exp");
    let h=document.getElementById("ct");
    if(h.value=="Character"){
    character.name=a;
    character.class=b;
    character.level=c;
    character.playername=d;
    character.race=e;
    character.alignment=f;
    character.experience=g;
    character.profLang.push("Common");
    }else if(h.value=="NPC"){
        npc.name=a;
        npc.class=b;
        npc.level=c;
        npc.playername=d;
        npc.race=e;
        npc.alignment=f;
        npc.experience=g;
        npc.profLang.push("Common");
    }
}


