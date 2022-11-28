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
})
describe("rolling", ()=>{
    it("hits",()=>{
        expect(hitChecker.hitCheckt(attacker2,attackee,hitChecker.roll5)).toBe(true);
    })
    it("misses",()=>{
        expect(hitChecker.hitCheckt(attacker1,attackee,hitChecker.roll5)).toBe(false);
    })

})