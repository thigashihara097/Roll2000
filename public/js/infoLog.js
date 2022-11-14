// THIS IS INCOMPLETE I WILL COME BACK TO THIS LATER

// import {roll} from "/js/something.js"
// import {name} from "/js/something.js"
// import {weapon} from "/js/something.js"
// import {receive} from "/js/something.js"
// import {calc} from "/js/something.js"
// import {dmgTaken} from "/js/something.js"

//This will listen for attacks IMPORTANT! REPLACE TEMPORARY STUFF WITH THE PROPER SYNTAX
document.querySelector("#tempAttack").addEventListener("temp", attack);

function attack(){
    //replace temp and something with proper values when code is received
    
        let statement = name+" used "+weapon+" on "+receive+" dealing "+calc+" dmg dropping "+receive+" to "+dmgTaken;
    
}

//This will listen for saving throws IMPORTANT! REPLACE TEMPORARY STUFF WITH THE PROPER SYNTAX
document.querySelector("#tempSaveThrow").addEventListener("temp2", saveThrow);

function saveThrow(){
    if(roll == 20){
        let statement = name+" rolled "+roll+" and succeeded on death save";
    }
    else if(roll == 0){
        let statement = name+" rolled "+roll+" and failed on death save";
    }
    
}

//This will listen for any movement on the board IMPORTANT! REPLACE TEMPORARY STUFF WITH THE PROPER SYNTAX
document.querySelector("#tempMovement").addEventListener("temp3", movement);

// (wishlist) This will listen for events IMPORTANT! REPLACE TEMPORARY STUFF WITH THE PROPER SYNTAX
// document.querySelector("#tempEvent").addEventListener("temp4", DMEvent);

