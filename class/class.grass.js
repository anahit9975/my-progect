var kendaniEak = require("./class.kendaniEak");
module.exports = class Grass extends kendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0
    }



    mul() {
        if (count >=10 && count <=20 ){
            this.multyply +=1;
        } 
        else{
            this.multiply += 6;
        }
       
        var emptyCells = this.chooseCell(0);

     var kord = Math.floor(Math.random() * emptyCells.length);
        var newCell  = emptyCells[kord];


        if (newCell && this.multiply >= 7 ) {

            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }



}