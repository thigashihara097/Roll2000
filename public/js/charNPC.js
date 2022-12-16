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
    let perception=10+mods[4];
    perception=perception+Skills[11];
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