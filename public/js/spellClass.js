
// constants in use in spell
const schoolList =["Classless", "Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"];
const savingThrowList = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
const castingTypeList = ["single action", "bonus action", "reaction", "minutes", "hours"];
const rangeTypeList = ["touch", "self", "ranged", "area of effect", "cone of effect", "cube of effect", "cylinder of effect", "line of effect", "sphere of effect"];
const durationTypeList = ["instantaneous", "rounds", "minutes", "hours", "days", "months", "years"];


function Spell (name, detailText, school, level, isAttack, savingThrow, castingTime, hasRitual, castingType, range, rangeType, duration, durationType) {
    this.spellName = "";
    this.detailText = "";
    this.school = 0; //corresponds to position on schoolList
    this.level = 0;
    this.isAttack = false;
    this.savingThrow = -1; //corresponds to position on savingThrowList
    this.castingTime = -1;
    this.hasRitual = false;
    this.castingType = -1; //corresponds to position on castingTypeList
    this.range = -1;
    this.rangeType = -1; //corresponds to position on rangeTypeList
    this.duration = -1;
    this.durationType = -1; //corresponds to position on durationTypeList
                   // if not instantaneous, a spell is concentration
    this.verbalComponent = false;
    this.somaticComponent = false;
    this.materialComponent =[];

}


//write spell as a class, see zbooks ch 8


//method to grab values from character class and calculate damage with known damage at slot


Spell.prototype.returnName = function(){return spellName;}
Spell.prototype.setName = function(name) {spellName=name}

Spell.prototype.returnDetailText = function(){return detailText;}
Spell.prototype.setDetailText = function(text){detailText = text}

Spell.prototype.returnSchool = function(){return schoolList[school];}
Spell.prototype.setSchool = function(name){
    if (name!=null){
        name.toLowerCase();
        name.trim();
        first = name.charAt(0);
        first.toUpperCase();
        name = first + name.substr(1);
        if (schoolList.indexOf(name)!=-1){
            school = schoolList.indexOf(name);
        }
    }
}

Spell.prototype.returnLevel = function(){if (level = 0){return "cantrip"} return level;},

Spell.prototype.returnIfAttack = function(){return isAttack},

Spell.prototype.returnSavingThrow = function(){if (savingThrow < 0) {return "none"}; return savingThrowList[savingThrow];},

Spell.prototype.returnCastingTime = function (){
    if (castingType > 2) 
    {return castingTime + castingTypeList[castingType]} 
    return castingTypeList[castingType];
}

Spell.prototype.returnCastingTimeRitual = function (){
    if (!this.returnRitual)this.returnCastingTime;
    if (castingType = 3 ) 
    {   castingTime += 10;
        return castingTime + castingTypeList[castingType];} 
        return castingTime + castingTypeList[castingType] + "10 minutes";
    
}

Spell.prototype.returnIfRitual = function(){return hasRitual;},

Spell.prototype.returnRange = function(){
    if (rangeType<2) return rangeTypeList[rangeType];
    return range + " foot " + rangeTypeList[rangeType];
}

Spell.prototype.returnDuration = function(){
    if (durationType = 0) return durationTypeList[durationType];
    return duration + durationTypeList[durationType];
}

Spell.prototype.returnHasVerbalComponent = function (){return verbalComponent}

Spell.prototype.returnHasSomaticComponent = function (){return somaticComponent}

Spell.prototype.returnHasMaterialComponent = function (){if (materialComponent.length>0) {return true;}
return false;}

Spell.prototype.returnMaterialComponent = function (){
    let str = "";
    for (component of materialComponent)
    {
        str += component;
    }
    return str;
}
