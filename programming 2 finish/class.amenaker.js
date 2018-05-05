
class Amenaker {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 7;
    }

    amenakerCoord() {
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
        this.amenakerCoord();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    move() {
        var emptyCoordinates = this.chooseCell(3);
        var emptyCoord = random(emptyCoordinates);
        if (emptyCoord) {
            this.energy -= 5;
            var norX = emptyCoord[0];
            var norY = emptyCoord[1];

            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 4;

            this.x = norX;
            this.y = norY;

            if (this.energy <= 0) {
                this.die();
                console.log("mera");
            }

        }
    }

    eat() {

        var kerameninch = this.chooseCell(3);
        var rnd3 = random(kerameninch);

        var kerameninch = this.chooseCell(2);
        var rnd2 = random(kerameninch);

        var kerameninch = this.chooseCell(1);
        var rnd = random(kerameninch);

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

        else  {
            this.move();
        }

        if (this.energy >= 40){
            this.mull();
        }

    }

    mull() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


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