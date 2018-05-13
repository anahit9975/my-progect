var kendaniEak = require("./class.kendaniEak");
class Grass extends kendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0
    }



    mul() {
        this.multiply += 2;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell && this.multiply >= 3) {

            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }



}