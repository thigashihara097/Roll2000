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
//================================================================
/* Damage and attacks functions
*/
/*attack function
takes a attacking object, and a target to attack, returns damage,
*/
function Attack(weapon, attackee,advantage){
    if(hitCheck(weapon, attackee, advantage)){
         return damage(weapon, attackee); 
     }
     return 0;
 }
 /*damage function
 takes in a source that can deal damage and a something that can take damage
 and deals the damage
 */
 function damage(source, damagee){
     let d=source.dealDamage();
     damagee.hp=damagee.hp-d;
     return d;
 }

 /*hit function
 takes a source that can atttempt attacks and and an attackee 
 and checks if an attack hits, returns true if the attack hit 
 and false if the attack misses. hitcheckt is used for testing. 
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
    if(r>=attackee.aC){
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

 // Characters and npc section
 //=======================================================
 //Create object for storing NPC data
 addEventListener('DOMContentLoaded', button);

 function button(){
 let save = document.querySelector("#submit");
 save.addEventListener("click", getInfo);
 }
 
 
 //Need to add death s and money but otherwise done
 
 class Character{
 constructor(name, Class, level, dmname, race, alignment, experince, proficiency,stats, modArray, perception, 
 inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, 
 spellCastingAbility, SpellSaveDC, spellAttackBonus, cantrips, lvl1, lvl2, lvl3, lvl4, lvl5,
  lvl6, lvl7, lvl8, lvl9){
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
 this.profLang=profLang;
 this.saveThrows=saveThrows;
 this.Skills=Skills;
 this.savedEQ=savedEQ;
 this.spellCastingClass=spellCastingClass;
 this.spellCastingAbility=spellCastingAbility; 
 this.SpellSaveDC=SpellSaveDC; 
 this.spellAttackBonus=spellAttackBonus;
 this.cantrips=cantrips; 
 this.lvl1=lvl1; 
 this.lvl2=lvl2; 
 this.lvl3=lvl3;
 this.lvl4=lvl4; 
 this.lvl5=lvl5; 
 this.lvl6=lvl6; 
 this.lvl7=lvl7; 
 this.lvl8=lvl8; 
 this.lvl9=lvl9;
 // added for attacks
 this.items=[];
 this.weapons=[];
 this.Attacks=[];
 }
 }
 
 class Npc extends Character{
 constructor(name, Class, level, dmname, race, alignment, experince, proficiency, stats, modArray, perception, 
 inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, 
 spellCastingAbility, SpellSaveDC, spellAttackBonus, cantrips, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, 
 lvl7, lvl8, lvl9){
 super(name, Class, level, dmname, race, alignment, experince, proficiency, stats, modArray, perception, 
 inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, 
 spellCastingAbility, SpellSaveDC, spellAttackBonus, cantrips, lvl1, lvl2, lvl3, lvl4, lvl5, 
 lvl6, lvl7, lvl8, lvl9); 
 }
 }
 
 async function getInfo(){
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
     let eq=document.getElementById("equiptment");
     let stS=document.getElementById("sst"); 
     let dS=document.getElementById("dst"); 
     let coS=document.getElementById("cost");
     let iS=document.getElementById("ist");
     let wS=document.getElementById("wst"); 
     let cS=document.getElementById("cst");
     //All the skill values
     let acro=document.getElementById("acro"); 
     let ah=document.getElementById("ah"); 
     let arcana=document.getElementById("arcana");
     let ath=document.getElementById("ath");
     let dec=document.getElementById("dec"); 
     let his=document.getElementById("his"); 
     let insight=document.getElementById("insight");
     let intim=document.getElementById("intim");
     let inv=document.getElementById("inv"); 
     let med=document.getElementById("med"); 
     let nat=document.getElementById("nat");
     let per=document.getElementById("per");
     let perfor=document.getElementById("perfor"); 
     let persua=document.getElementById("persua"); 
     let relig=document.getElementById("relig");
     let soh=document.getElementById("soh");
     let stea=document.getElementById("stea"); 
     let surv=document.getElementById("surv"); 
     //Info for spell caster
     let sab=document.getElementById("sab");
     let ssdc=document.getElementById("ssdc"); 
     let sabonus=document.getElementById("sabonus"); 
     //Info for storing spells 
     let can=document.getElementById("cantrips");
     let l1=document.getElementById("lvl1"); 
     let l2=document.getElementById("lvl2"); 
     let l3=document.getElementById("lvl3");
     let l4=document.getElementById("lvl4"); 
     let l5=document.getElementById("lvl5"); 
     let l6=document.getElementById("lvl6");
     let l7=document.getElementById("lvl7"); 
     let l8=document.getElementById("lvl8"); 
     let l9=document.getElementById("lvl9");
     //Arrays for storing info
     const saveThrows=[];
     const profLang=[];
     const Skills=[];
     const eqval=eq.value;
     const savedEQ=eqval.split(',');
     //Values of Strings
     const canVal=can.value; 
     const l1Val=l1.value;
     const l2Val=l2.value;
     const l3Val=l3.value;
     const l4Val=l4.value;
     const l5Val=l5.value;
     const l6Val=l6.value;
     const l7Val=l7.value;
     const l8Val=l8.value;
     const l9Val=l9.value;
     //Storing Spells
     const cantrips=canVal.split(',');
     const lvl1=l1Val.split(',');
     const lvl2=l2Val.split(',');
     const lvl3=l3Val.split(',');
     const lvl4=l4Val.split(',');
     const lvl5=l5Val.split(',');
     const lvl6=l6Val.split(',');
     const lvl7=l7Val.split(',');
     const lvl8=l8Val.split(',');
     const lvl9=l9Val.split(',');
     saveThrows.push(stS.value, dS.value, coS.value, iS.value, wS.value, cS.value);
     profLang.push("Common");
     Skills.push(acro.value, ah.value, arcana.value, ath.value, dec.value, his.value, insight.value, 
     intim.value, inv.value, med.value, nat.value, per.value, perfor.value, persua.value, relig.value, 
     soh.value, stea.value, surv.value);
     const spellCastingAbility=sab.value; 
     const SpellSaveDC=ssdc.value; 
     const spellAttackBonus=sabonus.value;
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
     const perception=(10+mods[4])+Skills[11];
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
     const spellCastingClass=b.value;
     const charArray=[];
     const NpcArray=[];
     if (h.value=="Character"){
     let char = "";
     char=new Character(name, Class, level, playername, race, alignment, experience, proficiency, stats, mods, perception, 
     inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, spellCastingAbility, 
     SpellSaveDC, spellAttackBonus, cantrips, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7, lvl8, lvl9); 
     charArray.push(char);
 
     let url = "/postingThis"
     console.log(JSON.stringify(char))
     let response = await fetch(url, {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(char)
     })
     let linebreak = document.createElement("br")  
     let result = await response.json();
     console.log(result);
     let confirmation = document.querySelector("#confirmation");
     confirmation.append("Saved a Character ")
     confirmation.append(linebreak)
     return char; 
 
 
     }else if (h.value=="NPC"){
     let npc="";
     npc=new Npc(name, Class, level, playername, race, alignment, experience, proficiency, stats, mods, perception, 
     inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, spellCastingAbility, 
     SpellSaveDC, spellAttackBonus, cantrips, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7, lvl8, lvl9); 
     NpcArray.push(npc);
 
     let url = "/postingThis"
     console.log(JSON.stringify(npc))
     let response = await fetch(url, {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(npc)
     })
     let result = await response.json();
     let linebreak = document.createElement("br")  
     console.log(result);
     const confirmation = document.querySelector("#confirmation");
     document.createElement("br");
     confirmation.append("Saved an NPC");
     confirmation.append(linebreak)
     return npc;    
     }
 }
 // item class
 //==================================================
 const actionCostList = ["single action", "bonus action", "duration of concentration"];
 const timeTypeList = ["instantaneous", "rounds", "minutes", "hours", "days", "months", "years"];
 //above are redundant in aggregate js file
 const armorTypeList = ["padded", "leather", "studdedLeather", "hide", "chainShirt", "scaleMail", "breastPlate", "halfPlate", "ringMail", "chainMail", "splint", "plate", "shield"];
 const weaponPropertylist =["ammunition", "finesse", "heavy", "light", "loading", "range", "reach", "special", "thrown", "twohanded", "versatile"];
 const attackTypeList = ["bludgeoning", "slashing", "piercing"];
 
 
 function Item (name, detailText, isWeapon, character,isMelee, isMartial, rangeMax, weaponProperties, attackType, rangeMin, attackDieFaces, attackDieNumber, cpValue, isArmor, armorType, isShield) {
     this.itemName = name;
     this.detailText = detailText;
     this.isWeapon = isWeapon; //boolean
     this.character-character;
     if (this.isWeapon == true){
         this.isMelee = isMelee; //otherwise ranged
         this.isMartial = isMartial; //otherwise simple
         this.rangeMax = 5;
         this.weaponProperties = [];
         this.setWeaponProperties(weaponProperties); //could be a string or array of strings corresponding to values on weaponPropertyList, not case sensitive
         this.attackType = 0;
         this.setAttackType (attackType); //corresponds to value on attackTypeList, not case sensitive. 
         if (isMelee != true){
             this.rangeMax = rangeMax;
             this.rangeMin = rangeMin;
             if (this.weaponProperties.includes(reach)){
                 this.rangeMin+=5;
             }
         }
         this.attackDieFaces = attackDieFaces; //corresponds to the faces of the die used to calculate damage
         this.attackDieNumber = attackDieNumber; //corresponds with the number of die used when attacking
     
     }
     this.cpValue = cpValue;
     this.isArmor = isArmor; //boolean
     this.isShield = isShield; //boolean
     this.dexterityModifier //either needs to be set at creation or able to access related character object data
     if (isArmor == true || this.isShield == true){
     this.armorType = 0;
     this.setArmorType(armorType);
     this.armorClass = 0;
     this.armorStrReq = 0;
     this.isStealthDisadvantage = false; 
     this.donTime = 0;
     this.donTimeType = 0; //corresponds to timeTypeList, round is used for shields but actually corresponds to action
     this.doffTime = 0;
     this.doffTimeType = 0; //corresponds to timeTypeList
     this.armorSet();
     }
     this.weight = 0;
 
 }
 
 // damage calc
 Item.prototype.dealDamage = function () {
     if (!isWeapon){ //case of improvised weapon
         return rolldNum(4);
     }
     numDie = this.attackDieNumber;
     let damage = 0;
     while (numDie > 0){
         damage += rolldNum (this.attackDieFaces);
         numDie--;
     }
     return damage;
 }
 
 
 Item.prototype.returnName = function(){return this.itemName;}
 Item.prototype.setName = function(name) {this.itemName=name}
 
 Item.prototype.returnDetailText = function(){return this.detailText;}
 Item.prototype.setDetailText = function(text){this.detailText = text}
 
 Item.prototype.returnIfWeapon = function(){return this.isWeapon}
 Item.prototype.setIfWeapon = function(attack){this.isWeapon = attack}
 
 Item.prototype.setAttackType = function (attackType){
     if (attackType!= null){
         attackType.toLowerCase();
         attackType.trim();
         if (attackTypeList.indexOf(attackType) != -1){
             this.attackType = attackTypeList.indexOf(attackType);
         }
     }
 }
 
 
 Item.prototype.armorSet = function() {
     this.donTime = 1;
     this.donTimeType = 2;
     this.doffTime = 1;
     this.doffTimeType = 2;
     if (this.armorType == 0){
         this.cpValue = 5;
         this.armorClass = 11 + this.dexterityModifier;
         this.isStealthDisadvantage = true;
         this.weight=8;
         return
     }
     else if (this.armorType == 1){
         this.cpValue = 10;
         this.armorClass = 11 + this.dexterityModifier;
         this.weight=10;
         return
     }
     else if (this.armorType == 2){
         this.cpValue = 45;
         this.armorClass = 12 + this.dexterityModifier;
         this.weight = 13;
         return
     }
     dexCap = this.dexterityModifier;
     while (dexCap > 2) {dexCap--;}
     this.donTime = 5;
     if (this.armorType == 3){
         this.cpValue = 10;
         this.armorClass = 12 + dexCap;
         this.weight=12;
         return
     }
     else if (this.armorType == 4){
         this.cpValue = 50;
         this.armorClass = 13 + dexCap;
         this.weight=20;
         return
     }
     else if (this.armorType == 5){
         this.cpValue = 50;
         this.armorClass = 14 + dexCap;
         this.weight=45;
         this.isStealthDisadvantage = true;
         return
     }
     else if (this.armorType == 6){
         this.cpValue = 400;
         this.armorClass = 14 + dexCap;
         this.weight=20;
         return
     }
     else if (this.armorType == 7){
         this.cpValue = 750;
         this.armorClass = 15 + dexCap;
         this.weight=40;
         this.isStealthDisadvantage = true;
         return
     }
     this.donTime = 10;
     this.doffTime = 5;
     if (this.armorType == 8){
         this.cpValue = 30;
         this.armorClass = 14;
         this.weight=40;
         this.isStealthDisadvantage = true;
         return
     }
     else if (this.armorType == 9){
         this.cpValue = 75;
         this.armorClass = 16;
         this.weight=55;
         this.isStealthDisadvantage = true;
         this.armorStrReq = 13;
         return
     }
     else if (this.armorType == 10){
         this.cpValue = 200;
         this.armorClass = 17;
         this.weight=60;
         this.isStealthDisadvantage = true;
         this.armorStrReq = 15;
         return
     }
     else if (this.armorType == 11){
         this.cpValue = 1500;
         this.armorClass = 18;
         this.weight=65;
         this.isStealthDisadvantage = true;
         this.armorStrReq = 15;
         return
     }
 
     this.cpValue = 10;
     this.armorClass = 2;
     this.weight=6;
     this.donTime = 1;
     this.donTimeType = 1;
     this.doffTime = 1;
     this.doffTimeType = 1;
 
 }
 
 Item.prototype.setWeaponProperties = function (weaponProperties) {
     if (typeof weaponProperties ==='string'){
         if (weaponProperties!= null){
             weaponProperties.toLowerCase();
             weaponProperties.replace (/\s/g, '');
             if (weaponPropertylist.includes(weaponProperties)){
                 this.weaponproperties = [weaponProperties];
             }
         }
     }
     else if (weaponProperties.isArray()){
         for (component of weaponProperties){
             if (component!= null){
                 component.toLowerCase();
                 component.replace (/\s/g, '');
                 if (weaponPropertylist.includes(component)){
                     this.weaponproperties.push(component)
                 }
             }
         }
 
     }
 }

//=============================================================================
 /* switch case funtion for use with right click drop down or init list*/
 Character.prototype.charActions=function(action,enemies){
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
 /*prints menu of attack options*/
 Character.prototype.atkChoice=function(){
    var str="";
    for (i = 0; i < this.Attacks.length; i++){
         str+=i+":"+this.Attacks[i];
    }
     return str;
 }
 /*returns spells still need to be integrated with character*/
 Character.prototype.spells=function(){
     return this.spells;
 }

 
 /* adds item to character*/
 Character.prototype.addItem=function(item){
     if(item.isWeapon){
         this.weapons.push(item);
         this.Attacks.push(item.detailText);
     }
     this.items.push(item);
 }

 //added functions for testing code
 Item.prototype.hitmod = function () {
    //check to make sure mod array is correct varible
     return this.character.modArray[0];
 }
 /*
 initList takes an array of combatants and sorts them by their
 initative roll which it makes.providing the user with prompts at each turn 
 */
 
 function initList(combatants){
     
     for(let i=0; i<combatants.length; i++){
         combatants[i].curinit=rolld20()+combatants[i].initiative;
     }
     combatants.sort(function(a, b){return b.curinit - a.curinit});
     for(let i=0; i<combatants.length; i++){
         let c=combatants[i];
         var action=prompt("Attack or Cast?")
         c.charActions(action);
     }
 }

// board creation section
addEventListener("DOMContentLoaded", main);

function main() {
    // Submit button listener
    document.querySelector("#create").addEventListener("click", createBoard);


    // Global variables
    let dragEl;         // Element being dragged
    let charList = [];  // List of characters on the board


    // Create a new board
    function createBoard() {
        // Check if there is already a table and remove if so
        if(document.querySelector("table") != null) {
            let t = document.querySelector("table");
            t.parentNode.removeChild(t);
        }

        // Get the input values and create a board
        let w = document.querySelector("#width").value;
        let h = document.querySelector("#height").value;
        let b = new Board(w, h);
        console.log(b);

        // Add characters to sidebar
        let a = ["abra", "cadabra", "alakazam"]     // Temp demo variable before integration :)
        displayCharacters(a);
    }
    
    /*
    *   DOM manipulation function - Display list of characters that can be placed on the board
    *
    *   @param array of character objects 
    */
    function displayCharacters(characters) {
        // Check if this is the first time, if not remove previous list, if so set up event listeners for the list div
        let pre = document.querySelector("main").querySelectorAll("div")[1].querySelectorAll("p");
        if(pre.length != 0) {
            for(let p of pre) {
                p.parentNode.removeChild(p);
            }
        } else {
            let d = document.querySelector("#character");
            d.addEventListener("dragover", dragOver);
            d.addEventListener("drop", drop);
        }

        // Go through the passed in array and create a p for each
        for(let character of characters) {
            let c = document.createElement("p");
            document.querySelector("main").querySelectorAll("div")[1].appendChild(c);
            c.textContent = character;

            // Make each character moveable
            c.setAttribute("draggable", "true");
            c.addEventListener("dragstart", dragStart);
            c.addEventListener("dragend", dragEnd);
        }
    }


    // Board object
    function Board(w, h) {
        if(Number.isNaN(w) || Number.isNaN(h)) {
            throw console.error("NaN detected");
        }

        // Variables
        this.width = w;
        this.height = h;

        // Create a blank table to display the board later
        addTable();

        // Populate tiles array
        for(let i = 0; i < w; i++) {
            addRow();
            for(let j = 0; j < h; j++) {
                addCell(i, null);
            }
        }
    }


    // DOM manipulation function - Add a table to the page
    function addTable() {
        let t = document.createElement("table");
        document.body.querySelector("main").querySelector("div").appendChild(t);
    }

    // DOM manipulation function - Add rows to the table
    function addRow() {
        let t = document.querySelector("table");
        let r = document.createElement("tr");
        t.appendChild(r);
    } 

    // DOM manipulation function - Add cells to the table
    function addCell(row, content) {
        let t = document.querySelectorAll("tr")[row];
        let c = document.createElement("td");
        t.appendChild(c);
        let p = document.createElement("p");
        c.appendChild(p);
        p.textContent = content;

        // Create popover menu
        makePopover(c, "Cell Actions", "I'm a popover");

        // Drag and drop events
        c.addEventListener("dragover", dragOver);
        c.addEventListener("drop", drop);
    }

    // DOM manipulation function - Changes the visual appearance of wall tiles
    function wallVisual(event) {
        let c = event.target;
        if(!c.classList.contains("wall")) {
            c.classList.add("wall");
        } else {
            c.classList.remove("wall");
        }
    }

    // DOM manipulation function - Creates a popover menu for the passed in element
    function makePopover(elem, head, text) {
        elem.setAttribute("data-bs-toggle", "popover");
        elem.setAttribute("title", head);
        elem.setAttribute("data-bs-content", text);
        elem.setAttribute("data-bs-placement", "bottom");
        var temp=prompt("begin combat? Y/N");
        if(temp==="Y"){
            initList(charList);
        }
        // Popover enabling
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    }


    // When a drag starts
    function dragStart(event) {
        event.dataTransfer.setData("text/html", event.target.innerHTML);
        dragEl = event.target;
    }

    // Preparing table cells for dropping
    function dragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    // Actually dropping
    function drop(event) {
        event.preventDefault();

        // Prepare variables
        let c = this.querySelector("p");        // The inside element of the cell
        let t = c.cloneNode(true);              // A copy of the element in the cell
        let dr = dragEl.cloneNode(true);        // A copy of the element being dragged

        // Check if the character is being moved to the board from the list or vice versa
        if(dragEl.parentNode.nodeName == "DIV" && c.parentNode.nodeName == "TD") {       // If the element came from the list
            charList.push(dragEl.innerHTML);
            if(c.textContent.length != 0) {
                let i = charList.findIndex((n) => n == c.innerHTML)
                charList.splice(i, 1);
            }
        }
        if(dragEl.parentNode.nodeName == "TD" && c.parentNode.nodeName == "DIV") {      // If the element is leaving the table
            let i = charList.findIndex((n) => n == dr.innerHTML)
            charList.splice(i, 1);
            
            if(c.textContent.length != 0) {
                charList.push(c.innerHTML);
            }
        }
        
        console.log("char on board: " + charList)

        // Swap the elements
        c.replaceWith(dr);
        dragEl.replaceWith(t)

        // If a blank p was swapped don't give it draggability
        if(t.textContent.length == 0) {
            // Make new element in the old place movable
            t.setAttribute("draggable", "true");
            t.addEventListener("dragstart", dragStart);
            t.addEventListener("dragend", dragEnd);
        }

        // Make the created element movable itself
        dr.setAttribute("draggable", "true");
        dr.addEventListener("dragstart", dragStart);
        dr.addEventListener("dragend", dragEnd);
    }

    // After a drop is complete
    function dragEnd(event) {
        if(event.dataTransfer.dropEffect !== "none") {
            event.target.remove();
        }
    }
}