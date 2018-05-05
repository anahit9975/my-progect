
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;

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
        var datarkkordinatner = this.chooseCell(0);
        var mivandak = random(datarkkordinatner);
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
        var rnd = random(kerxot);
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

            if (this.energy >= 9) {
                this.mul();
            }

        }
        else {
            this.move();
        }
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);



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
