//Create object for storing NPC data
addEventListener('DOMContentLoaded', button);

function button(){
let submit= document.querySelector('button');
submit.addEventListener("click", getInfo);
}

class Character{
constructor(name, Class, level, dmname, race, alignment, experince, proficiency,stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, 
spellCastingAbility, SpellSaveDC, spellAttackBonus){
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
}
}

class Npc extends Character{
constructor(name, Class, level, dmname, race, alignment, experince, proficiency, stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, 
spellCastingAbility, SpellSaveDC, spellAttackBonus){
super(name, Class, level, dmname, race, alignment, experince, proficiency, stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, 
spellCastingAbility, SpellSaveDC, spellAttackBonus); 
}
}

let npc={
//spells:[lvl][spells], 
};

let character={ 
//spells:[lvl][spells], 
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
    //Arrays for storing info
    const saveThrows=[];
    const profLang=[];
    const Skills=[];
    const eqval=eq.value;
    const savedEQ=eqval.split(',');
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
    const perception=10+mods[4]+Skills[11];
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
    if (h.value=="Character"){
    const char=new Character(name, Class, level, playername, race, alignment, experience, proficiency, stats, mods, perception, 
    inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, spellCastingAbility, 
    SpellSaveDC, spellAttackBonus); 
    return char; 
    }else if (h.value=="NPC"){
    const npc=new Npc(name, Class, level, playername, race, alignment, experience, proficiency, stats, mods, perception, 
    inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows, savedEQ, Skills, spellCastingAbility, 
    SpellSaveDC, spellAttackBonus); 
    return npc;    
    }
}