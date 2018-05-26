var kendaniEak = require("./class.kendaniEak");
module.exports = class GrassEater extends kendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;


    }
    getNewCoordinates() {

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var emptyCoordinates = this.chooseCell(0);

        var kord = Math.floor(Math.random() * emptyCoordinates.length);
        var mivandak = emptyCoordinates[kord];

        if (mivandak) {
            this.energy--;
            var norX = mivandak[0];
            var norY = mivandak[1];

            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 2;

            this.x = norX;
            this.y = norY;
           
             if (this.energy <= 0) {
                this.die();
            }


        }
    }

    eat() {
        var kerxot = this.chooseCell(1);

        var kord = Math.floor(Math.random() * kerxot.length);
        var rnd = kerxot[kord];
        if (rnd) {
            this.energy++;
            var kerX = rnd[0];
            var kerY = rnd[1];

            matrix[this.y][this.x] = 0;
            matrix[kerY][kerX] = 2;

            this.x = kerX;
            this.y = kerY;

            for (var i in grassArr) {
                if (kerX == grassArr[i].x && kerY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (count >= 10 && count <= 20) {
                if (this.energy >= 20) {
                    this.mul();
                }
            }
           else  if (this.energy >= 9) {
                this.mul();
            }

        }
        else {
            this.move();
        }
    }

    mul() {
        var emptyCells = this.chooseCell(0);

        var kord = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[kord];



        if (newCell) {
            this.energy = 10;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGrassEat = new GrassEater(newX, newY, this.index);
            grassEatArr.push(newGrassEat);
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEatArr) {
            if (grassEatArr.x == this.x && grassEatArr.y == this.y) {
                grassArr.splice(i, 1);
                break;
            }
        }
    }
}
