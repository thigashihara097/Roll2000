
// constants in use in spell
const schoolList =["Classless", "Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"];
const savingThrowList = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
const castingTypeList = ["single action", "bonus action", "reaction", "minutes", "hours"];
const rangeTypeList = ["touch", "self", "ranged", "area of effect", "cone of effect", "cube of effect", "cylinder of effect", "line of effect", "sphere of effect"];
const durationTypeList = ["instantaneous", "rounds", "minutes", "hours", "days", "months", "years"];



let spell = {
spellName : "",
detailText : "",
school : 0, //corresponds to position on schoolList
level : 0,
isAttack : false,
savingThrow : -1, //corresponds to position on savingThrowList
castingTime : -1,
hasRitual : false,
castingType : -1, //corresponds to position on castingTypeList
range : -1,
rangeType : -1, //corresponds to position on rangeTypeList
duration : -1,
durationType : -1, //corresponds to position on durationTypeList
                   // if not instantaneous, a spell is concentration
verbalComponent : false,
somaticComponent : false,
materialComponent :[],





returnName (){return spellName;},

returnDetailText(){return detailText;},

returnSchool(){return schoolList[school];},

returnLevel(){if (level = 0){return "cantrip"} return level;},

returnIfAttack(){return isAttack},

returnSavingThrow(){if (savingThrow < 0) {return "none"}; return savingThrowList[savingThrow];},

returnCastingTime (){
    if (castingType > 2) 
    {return castingTime + castingTypeList[castingType]} 
    return castingTypeList[castingType];
},

returnCastingTimeRitual (){
    if (!this.returnRitual)this.returnCastingTime;
    if (castingType = 3 ) 
    {   castingTime += 10;
        return castingTime + castingTypeList[castingType];} 
        return castingTime + castingTypeList[castingType] + "10 minutes";
    
},

returnRitual(){return hasRitual;},

returnRange(){
    if (rangeType<2) return rangeTypeList[rangeType];
    return range + " foot " + rangeTypeList[rangeType];
},

returnDuration(){
    if (durationType = 0) return durationTypeList[durationType];
    return duration + durationTypeList[durationType];
},

returnHasVerbalComponent (){return verbalComponent},

reuturnHasSomaticComponent (){return somaticComponent},

returnHasMaterialComponent (){if (materialComponent.length>0) {return true;}
return false;},

returnMaterialComponent (){
    let str = "";
    for (component of materialComponent)
    {
        str += component;
    }
    return str;
}

};



// basic return functions, primarily return strings or in some cases nums. 

function returnName (){return spellName;}

function returnDetailText(){return detailText;}

function returnSchool(){return schoolList[school];}

function returnLevel(){if (level = 0){return "cantrip"} return level;}

function returnIfAttack(){return isAttack}

function returnSavingThrow(){if (savingThrow < 0) {return "none"}; return savingThrowList[savingThrow];}

function returnCastingTime (){
    if (castingType > 2) 
    {return castingTime + castingTypeList[castingType]} 
    return castingTypeList[castingType];
}

function returnCastingTimeRitual (){
    if (castingType = 3 ) 
    {   castingTime += 10;
        return castingTime + castingTypeList[castingType];} 
        return castingTime + castingTypeList[castingType] + "10 minutes";
    
}

function returnRitual(){return hasRitual;}

function returnRange(){
    if (rangeType<2) return rangeTypeList[rangeType];
    return range + " foot " + rangeTypeList[rangeType];
}

function returnDuration(){
    if (durationType = 0) return durationTypeList[durationType];
    return duration + durationTypeList[durationType];
}

function returnHasVerbalComponent (){return verbalComponent}

function reuturnHasSomaticComponent (){return somaticComponent}

function returnHasMaterialComponent (){if (materialComponent.length>0) {return true;}
return false;}

function returnMaterialComponent (){
    let str = "";
    for (component of materialComponent)
    {
        str += component;
    }
    return str;
}



//TODO figure out system to populate a directory of spell Objects

