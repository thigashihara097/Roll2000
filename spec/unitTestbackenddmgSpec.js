let hitChecker=require("../damage/backenddmg.js");
console.log(hitChecker)
beforeEach(()=>{
    attacker2={
        hitmod: function(){
            return 2;
        },
    }
    attackee={
        ac:7,
    }
    attacker1={
        hitmod: function(){
            return 1;
        },
    }
    gimli= new hitChecker.testCharacter(3,1,14,20);
    goblin= new hitChecker.testCharacter(3,4,7,10);
    boblin= new hitChecker.testCharacter(3,4,9,10); 
    gimliAxe = new hitChecker.Itemt(true, 2, 4, gimli);
})
describe("rolling", ()=>{
    it("hits",()=>{
        expect(hitChecker.Attackt(gimliAxe,goblin)).toBe(2);
        expect(goblin.hp).toBe(8);
    
    })
    it("misses",()=>{
        expect(hitChecker.hitCheckt(attacker1,attackee,hitChecker.roll5())).toBe(false);
        expect(hitChecker.Attackt(gimliAxe,boblin)).toBe(0);
    })

})