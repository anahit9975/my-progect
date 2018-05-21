var kendaniEak = require("./class.kendaniEak");
module.exports = class Bomb extends kendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
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
        return super.chooseCell(character);
    }



    kill() {
        var emptyCells = this.chooseCell(4);

        var kord = Math.floor(Math.random() * emptyCells.length);
        var bumcell = emptyCells[kord];
        if (bumcell) {

            this.getNewCoordinates();


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
            if (bombArr.x == this.x && bombArr.y == this.y) {
                bombArr.splice(i, 1);
                break;
            }
        }

    }
}
