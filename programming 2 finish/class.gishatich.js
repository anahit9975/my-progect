var found = [];
class Gishatich extends kendaniEak{
    constructor(x, y, index) {
       super(x,y,index);
        this.energy = 10;

    }
    newCoordinates() {
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
        /*this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];*/
    }

    chooseCell(character) {
        this.newCoordinates();
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
        var emptyCoordinates = this.chooseCell(0);
        var emptyCoord = random(emptyCoordinates);
        if (emptyCoord) {
            this.energy--;
            var norX = emptyCoord[0];
            var norY = emptyCoord[1];

            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 3;

            this.x = norX;
            this.y = norY;

            if (this.energy <= 0) {
                this.die();
            }

        }
    }


    eat() {
        var kerGrEt = this.chooseCell(2);
        var rnd = random(kerGrEt);
        if (rnd) {
            this.energy++;
            var kerX = rnd[0];
            var kerY = rnd[1];

            matrix[this.y][this.x] = 0;
            matrix[kerY][kerX] = 3;

            this.x = kerX;
            this.y = kerY;

            for (var i in grassEatArr) {
                if (kerX == grassEatArr[i].x && kerY == grassEatArr[i].y) {
                    grassEatArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 20) {
                this.mul();
            }

        }
        else {
            this.move();
        }
    }


    mul() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);


        if (newCell) {
            this.energy = 8;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            for (var i in grassArr) {
                if (grassArr.x == newX && grassArr.y == newY) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            var newGishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newGishatich);
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (gishatichArr.x == this.x && gishatichArr.y == this.y) {
                gishatichArr.splice(i, 1);
                break;
            }
        }
    }
}