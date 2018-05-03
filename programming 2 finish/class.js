class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

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

    chooseCall(character) {
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


    mul() {
        this.multiply+=2;
        var emptyCells = this.chooseCall(0);
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

            if (this.energy >= 10) {
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



var found = [];
class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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
            this.energy-=2;
            var norX = emptyCoord[0];
            var norY = emptyCoord[1];

            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 4;

            this.x = norX;
            this.y = norY;

            if (this.energy <= 0) {
                this.die();
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

        else    if (rnd) {
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
   
        else if (this.energy >= 30) {
            this.mull();
        }

        else  {
             this.move();
         }

    }

    mul() {
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

class Sevuk {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
}



class Bomb {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }

    bumCoord() {
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
        this.bumCoord();
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



    kill() {

        var bumcell = random(this.chooseCell(4));
        if (bumcell) {
         
            this.bumCoord();
    

            for (var i in this.directions) {

                var norx = this.directions[i][0];
                var nory = this.directions[i][1];
                
                if (norx >= 0 && norx < matrix[0].length && nory >= 0 && nory < matrix.length) {

                      if (matrix[nory][norx] == 4) { 
                          matrix[nory][norx] = 6;
                        var sev = new Sevuk(norx, nory);
                        sevArr.push(sev);
                         matrix[this.y][this.x] = 0;
                    for (var i in amenakerArr) {
                        if (amenakerArr.x == this.x && amenakerArr.y == this.y) {
                             amenakerArr.splice(i, 1);
                             break;
            }
        } 
      }

                    else if (matrix[nory][norx] == 1) {
                        matrix[nory][norx] = 6;
                        var sev = new Sevuk(norx, nory);
                        sevArr.push(sev);
                        matrix[this.y][this.x] = 0;
                        for (var i in grassArr) {
                            if (grassArr.x == this.x && grassArr.y == this.y) {
                                grassArr.splice(i, 1)
                                break;
                            }
                        }
                    }
                    else if (matrix[nory][norx] == 2) {
                        matrix[nory][norx] = 6;
                        var sev = new Sevuk(norx, nory);
                        sevArr.push(sev);
                          matrix[this.y][this.x] = 0;
                        for (var i in grassEatArr) {
                            if (grassEatArr.x == this.x && grassEatArr.y == this.y) {
                                grassEatArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[nory][norx] == 3) {
                        matrix[nory][norx] = 6;
                        var sev = new Sevuk(norx, nory);
                        sevArr.push(sev);
                          matrix[this.y][this.x] = 0;
                        for (var i in gishatichArr) {
                            if (gishatichArr.x == this.x && gishatichArr.y == this.y) {
                                gishatichArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    this.die();

                }

            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in bombArr) {
            if (bombArr[i].x == this.x && bombArr[i].y == this.y) {
                bombArr.splice(i, 1);
                break;
            }
        }

    }
}





