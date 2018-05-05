
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
            if (bombArr.x == this.x && bombArr.y == this.y) {
                bombArr.splice(i, 1);
                break;
            }
        }

    }
}
