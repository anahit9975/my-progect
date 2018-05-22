var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(3000);



var Grass = require("./class/class.grass");
var GrassEater = require("./class/class.grasseater");
var Gishatich = require("./class/class.gishatich");
var Amenaker = require("./class/class.amenaker");
var Bomb = require("./class/class.bomb");
var sevuk = require("./class/class.sevuk");

var xQanak = 20;
var yQanak = 40;
matrix = [];
var n = 30;
var side = 30;
grassArr = [];
grassEatArr = [];
gishatichArr = [];
amenakerArr = [];
bombArr = [];
//sevArr = [];

for (var y = 0; y < yQanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < xQanak; x++) {
        matrix[y][x] = Math.floor(Math.random() * 6);

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
            var amen = new Amenaker(i, j, 1);
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


//server

io.on('connection', function (socket) {
    setInterval(p5func, 2000);
});

function p5func() {

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
    

    io.sockets.emit("matrix", matrix);
}



