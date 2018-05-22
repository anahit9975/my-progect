var kendaniEak = require("./class.kendaniEak");
module.exports = class Amenaker extends kendaniEak {

    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var emptyCoordinates = this.chooseCell(3);

        var index = Math.floor(Math.random() * emptyCoordinates.length);
        var emptyCoord = emptyCoordinates[index];

        if (emptyCoord) {
            this.energy -= 5;
            var norX = emptyCoord[0];
            var norY = emptyCoord[1];

            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 4;

            this.x = norX;
            this.y = norY;

            if (this.energy <= 0 ) {
                this.die();
            }

        }
    }

    eat() {

        var kerameninch = this.chooseCell(3);
        var kord = Math.floor(Math.random() * kerameninch.length);
        var rnd3 = kerameninch[kord];

        var kerameninch = this.chooseCell(2);
        var kord = Math.floor(Math.random() * kerameninch.length);
        var rnd2 = kerameninch[kord];

        var kerameninch = this.chooseCell(1);
        var kord = Math.floor(Math.random() * kerameninch.length);
        var rnd = kerameninch[kord];
        if (rnd3) {
            this.energy++;
            var kerX = rnd3[0];
            var kerY = rnd3[1];

            matrix[this.y][this.x] = 0;
            matrix[kerY][kerX] = 4;

            this.x = kerX;
            this.y = kerY;

            for (var i in gishatichArr) {
                if (kerX == gishatichArr[i].x && kerY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }

        else if (rnd2) {
            this.energy++;
            var kerX = rnd2[0];
            var kerY = rnd2[1];

            matrix[this.y][this.x] = 0;
            matrix[kerY][kerX] = 4;

            this.x = kerX;
            this.y = kerY;

            for (var i in grassEatArr) {
                if (kerX == grassEatArr[i].x && kerY == grassEatArr[i].y) {
                    grassEatArr.splice(i, 1);
                    break;
                }
            }
        }

        else if (rnd) {
            this.energy++;
            var kerX = rnd[0];
            var kerY = rnd[1];

            matrix[this.y][this.x] = 0;
            matrix[kerY][kerX] = 4;

            this.x = kerX;
            this.y = kerY;

            for (var i in grassArr) {
                if (kerX == grassArr[i].x && kerY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }

        else if ( matrix[this.index] != 15) {
            this.move();
        }

        if (this.energy >= 40 &&  matrix[this.index] != 15 ) {
            this.mul();
        }

    }

    mul() {
        var emptyCells = this.chooseCell(0);

       var kord = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[kord];


        if (newCell) {
            this.energy = 15;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var amenak = new Amenaker(newX, newY, this.index);
            amenakerArr.push(amenak);
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in amenakerArr) {
            if (amenakerArr.x == this.x && amenakerArr.y == this.y) {
                amenakerArr.splice(i, 1);
                break;
            }
        }
    }
}