var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});



var grass = require("./class/class.grass");
var grasseater = require("./class/class.grasseater");
var gishatich = require("./class/class.gishatich");
var amenaker = require("./class/class.gishatich");
var bomb = require("./class/class.bomb");
var sevuk = require("./class/class.sevuk");

setInterval(function () { p5func() }, 3000);

function p5func() {

    var xQanak = 20;
    var yQanak = 40;
    var matrix = [];
    var n = 30;
    var side = 30;
    var grassArr = [];
    var grassEatArr = [];
    var gishatichArr = [];
    var amenakerArr = [];
    var bombArr = [];
    var sevArr = [];

    for (var y = 0; y < yQanak; y++) {
        matrix[y] = [];
        for (var x = 0; x < xQanak; x++) {
            matrix[y][x] = Math.round(Math.random() * 6);

        }
    }
    matrix = [
        [0, 0, 2, 0, 1, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 5, 0],
        [0, 0, 0, 0, 3, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 0]
    ];
    for (var j = 0; j < matrix.length; j++) {
        for (var i = 0; i < matrix[0].length; i++) {
            if (matrix[j][i] == 1) {
                var gr = new Grass(i, j, 1);
                grassArr.push(gr);
            }

            else if (matrix[j][i] == 5) {
                var bum = new Bomb(i, j, 1);
                bombArr.push(bum);

            }
            else if (matrix[j][i] == 4) {
                var amen = new Amenaker(i, j, 2);
                amenakerArr.push(amen);

            }
            else if (matrix[j][i] == 2) {
                var gret = new GrassEater(i, j, 1);
                grassEatArr.push(gret);

            }

            else if (matrix[j][i] == 3) {
                var gish = new Gishatich(i, j, 1);
                gishatichArr.push(gish);

            }
        }
    }


    for (var i in grassArr) {
        grassArr[i].mul();

    }

    for (var i in amenakerArr) {
        amenakerArr[i].eat();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat();

    }

    for (var i in grassEatArr) {
        grassEatArr[i].eat();

    }

    for (var i in bombArr) {
        bombArr[i].kill();

    }
}
