//Create object for storing NPC data
addEventListener("DOMContentLoaded", characterInfo());

function characterInfo(){
//Create html elements, get info from elements and store them in objects
//Get info from objects and use it for mods, prof bonus, spells, etc.
//Store it in npc or character depending upon radio button selected



}

let npc={
    name: "Melody", class: "Bard",  level:1, background: "Musician", dmname: "See Sharp", 
    race: "Human", alignment: "Chaotic good", experience:0, 
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
    profLang:["Common"], 
/* profLang is all the other proficiencies and languages
*/
movSpeed:20,
aC:10,
initiative:statMods[1],
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
    name: "Gandalf",  class: "Wizard",  level:1, background: "Maair", playername: "Eru", 
    race: "Aasimar", alignment: "Lawful good", experience:0,
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

profLang:["Common"], 
/* profLang is all the other proficiencies and languages
*/
movSpeed:30,
aC:23,
initiative:statMods[1],
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

