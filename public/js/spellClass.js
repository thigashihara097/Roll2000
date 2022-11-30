
// constants in use in spell
const schoolList =["Classless", "Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"];
const savingThrowList = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
const castingCostList = ["single action", "bonus action", "duration of concentration"];
const rangeTypeList = ["touch", "self", "ranged", "area of effect", "cone of effect", "cube of effect", "cylinder of effect", "line of effect", "sphere of effect"];
const timeTypeList = ["instantaneous", "rounds", "minutes", "hours", "days", "months", "years"];


function Spell (name, detailText, school, level, isAttack, attackDieFaces, attackDieBase, levelDieAdditions, savingThrow, castingTime, castingTimeType, hasRitual, castingCost, range, rangeType, duration, durationType, verbalComponent, somaticComponent, materialComponentList, subClasses) {
    this.spellName = name;
    this.detailText = detailText;
    this.school = 0; //corresponds to position on schoolList
    this.setSchool(school); //accepts a value on schoolList, not case sensitive
    this.level = level;
    this.isAttack = isAttack;
    this.spellSlot = 0; // needs to be intitialized when a spell is added to a slot within a character
    this.attackDieFaces = attackDieFaces; //corresponds to the faces of the die used to calculate damage
    this.attackDieBase = attackDieBase; //corresponds with the number of die used at this spell's base level slot
    this.levelDieAdditions = levelDieAdditions; //corresponds with how many die are added to a roll for each level slot above the base level
    this.savingThrow = 0;
    this.setSavingThrow(savingThrow); //corresponds to position on savingThrowList
    this.castingTime = castingTime;
    this.castingTimeType = 0; // corresponds to a position on timeTypeList
    this.setCastingTimeType (castingTimeType); // accepts a value from timeTypeList, not case sensitive
    this.hasRitual = hasRitual;
    this.castingCost = 0; //corresponds to position on castingCostList
    this.setCastingCost(castingCost); //accepts a value from castingCostList, not case sensitive; duration of concentration indicates castingTime will be used
    this.range = range;
    this.rangeType = 0; //corresponds to position on rangeTypeList
    this.setRangeType (rangeType); //accepts a value on rangeTypeList, not case sensitive
    this.duration = duration;
    this.durationType = 0; //corresponds to position on timeTypeList
    this.setDurationType (durationType); // accepts a value on timeTypeList, not case sensitive
    this.verbalComponent = verbalComponent; //boolean
    this.somaticComponent = somaticComponent; //boolean
    this.numMaterialComponents = 0;
    this.materialComponent = []; //is an arrary of strings regarding items
    this.setMaterialComponents (materialComponentList); //accepts an array of materials used in the spell or a single material used in the spell
    this.numSubClasses = 0;
    this.subClassList = []; //is an array of subclasses included in a spell
    this.setSubClasses(subClasses) ; // accepts an array of subclasses or a single subclass
}


Spell.prototype.dealDamage = function () {
    let numDie = this.spellSlot - this.level;
    numDie *= this.levelDieAdditions;
    numDie += this.attackDieBase;
    let damage = 0;
    while (numDie > 0){
        damage += rolldNum (this.attackDieFaces);
        numDie--;
    }
    return damage;
}



Spell.prototype.returnName = function(){return this.spellName;}
Spell.prototype.setName = function(name) {this.spellName=name}

Spell.prototype.returnDetailText = function(){return this.detailText;}
Spell.prototype.setDetailText = function(text){this.detailText = text}

Spell.prototype.returnSchool = function(){return schoolList[this.school];}
Spell.prototype.setSchool = function(name){
    if (name!=null){
        name.toLowerCase();
        name.trim();
        first = name.charAt(0);
        first.toUpperCase();
        name = first + name.substr(1);
        if (schoolList.indexOf(name)!=-1){
            this.school = schoolList.indexOf(name);
        }
    }
}

Spell.prototype.returnLevel = function(){if (this.level = 0){return "cantrip"} return this.level;}
Spell.prototype.setLevel = function(levelNum){this.level = levelNum}

Spell.prototype.returnIfAttack = function(){return this.isAttack}
Spell.prototype.setIfAttack = function(attack){this.isAttack = attack}

Spell.prototype.setSpellSlot = function (level) {spellSlot = level}

Spell.prototype.returnAttackDieFaces = function() {return this.attackDieFaces}
Spell.prototype.setAttackDieFaces = function(faces) {this.attackDieFaces = faces}

Spell.prototype.returnSavingThrow = function(){if (this.savingThrow < 0) {return "none"}; return savingThrowList[savingThrow];}
Spell.prototype.setSavingThrow = function (savingThrow) {
    if (savingThrow!= null){
        savingThrow.toLowerCase();
        savingThrow.trim();
        if (savingThrowList.indexOf(savingThrow) != -1){
            this.savingThrow = savingThrowList.indexOf(savingThrow);
        }
    }
}

Spell.prototype.returnCastingTime = function (){
    if (this.castingType > 2) 
    {return this.castingTime + castingTypeList[this.castingType]} 
    return castingTypeList[this.castingType];
}

Spell.prototype.setCastingCost = function (castingCost) {
    if (castingCost!= null){
        castingCost.toLowerCase();
        castingCost.trim();
        if (timeTypeList.indexOf(castingCost) != -1){
            this.castingCost = timeTypeList.indexOf(castingCost);
        }
    }
}

Spell.prototype.returnCastingTime = function (){
    if (castingCost > 1){
        return this.castingTime + " "
    }
    else {
        return castingCostList[castingCost];
    }
}
Spell.prototype.setCastingTimeType = function (castingTimeType){
    if (castingTimeType!= null){
        castingTimeType.toLowerCase();
        castingTimeType.trim();
        if (castingCostList.indexOf(castingTimeType) != -1){
            this.castingTimeType = castingCostList.indexOf(castingTimeType);
        }
    }
}

Spell.prototype.returnCastingTimeRitual = function (){
    if (!this.returnRitual)this.returnCastingTime;
    if (this.castingType = 3 ) 
    {   this.castingTime += 10;
        return this.castingTime + castingTypeList[this.castingType];} 
        return this.castingTime + castingTypeList[this.castingType] + "10 minutes";
    
}

Spell.prototype.returnIfRitual = function(){return this.hasRitual;},

Spell.prototype.returnRange = function(){
    if (this.rangeType<2) return rangeTypeList[this.rangeType];
    return this.range + " foot " + rangeTypeList[this.rangeType];
}
Spell.prototype.setRangeType = function (rangeType){
    if (rangeType!= null){
        rangeType.toLowerCase();
        rangeType.trim();
        if (rangeTypeList.indexOf(rangeType) != -1){
            this.rangeType = rangeTypeList.indexOf(rangeType);
        }
    }
}

Spell.prototype.returnDuration = function(){
    if (this.durationType = 0) return timeTypeList[this.durationType];
    return this.duration + timeTypeList[this.durationType];
}
Spell.prototype.setDurationType = function (durationType){
    if (durationType!= null){
        durationType.toLowerCase();
        durationType.trim();
        if (timeTypeList.indexOf(durationType) != -1){
            this.durationType = timeTypeList.indexOf(durationType);
        }
    }
}

Spell.prototype.returnHasVerbalComponent = function (){return this.verbalComponent}

Spell.prototype.returnHasSomaticComponent = function (){return this.somaticComponent}

Spell.prototype.returnHasMaterialComponent = function (){if (this.materialComponent.length>0) {return true;}
return false;}

Spell.prototype.returnMaterialComponent = function (){
    let str = "";
    for (component of this.materialComponent)
    {
        str += component;
    }
    return str;
}
Spell.prototype.setMaterialComponent = function (materialComponent){
    if (typeof materialComponent ==='string'){
        this.numMaterialComponent = 1;
        this.materialComponent = [materialComponent];
    }
    if (materialComponent.isArray()){
        this.numMaterialComponent = materialComponent.length; 
        this.materialComponent = materialComponent;
    }
}
/**
 * adds a single material component or the contents of an array of material components to the spell's material components
 * @param {*} materialComponent 
 */
 Spell.prototype.addSubClass = function (materialAddition){
    if (typeof materialAddition ==='string'){
        this.numMaterialComponent += 1;
        this.materialComponent.push(materialAddition);
    }
    if (materialAddition.isArray()){
        for (component of materialAddition){
            this.materialComponent.push(component);
        }
        this.numMaterialComponent += materialAddition.length; 
    }
}

Spell.prototype.returnSubClassList = function (){
    let str = "";
    for (component of this.subClassList)
    {
        str += component;
    }
    return str;
}
Spell.prototype.setSubClasses = function (subclass){
    if (typeof subclass ==='string'){
        this.numSubClasses = 1;
        this.subClassList = [subclass];
    }
    if (materialComponent.isArray()){
        this.numSubClasses = subclass.length; 
        this.subClassList = subclass;
    }
}
/**
 * adds a single subclass or the contents of an array of subclasses to the spell's subclasses
 * @param {*} subclass 
 */
Spell.prototype.addSubClass = function (subclass){
    if (typeof subclass ==='string'){
        this.numSubClasses += 1;
        this.subClassList.push(subclass);
    }
    if (materialComponent.isArray()){
        for (component of subclass){
            this.subClassList.push(component);
        }
        this.numSubClasses += subclass.length; 
    }
}
