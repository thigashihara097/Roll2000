const actionCostList = ["single action", "bonus action", "duration of concentration"];
const timeTypeList = ["instantaneous", "rounds", "minutes", "hours", "days", "months", "years"];
//above are redundant in aggregate js file
const armorTypeList = ["padded", "leather", "studdedLeather", "hide", "chainShirt", "scaleMail", "breastPlate", "halfPlate", "ringMail", "chainMail", "splint", "plate", "shield"];
const weaponPropertylist =["ammunition", "finesse", "heavy", "light", "loading", "range", "reach", "special", "thrown", "twohanded", "versatile"];
const attackTypeList = ["bludgeoning", "slashing", "piercing"];


function Item (name, detailText, isWeapon, isMelee, isMartial, rangeMax, weaponProperties, attackType, rangeMin, attackDieFaces, attackDieNumber, cpValue, isArmor, armorType, isShield) {
    this.itemName = name;
    this.detailText = detailText;
    this.isWeapon = isWeapon; //boolean
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
