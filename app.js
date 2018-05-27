var express = require("express");
var app = express();
var fs = require('fs');
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', process.env.PORT || 3000);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(app.get('port'));



var Grass = require("./class/class.grass");
var GrassEater = require("./class/class.grasseater");
var Gishatich = require("./class/class.gishatich");
var Amenaker = require("./class/class.amenaker");
var Bomb = require("./class/class.bomb");
var sevuk = require("./class/class.sevuk");


grassmul = 0;
grasseatmove = 0;
gishaticheat = 0;
amenakerdie = 0;

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
        matrix[y][x] = Math.floor(Math.random() * 5);

    }
}
/*matrix = [
    [0, 0, 2, 0, 1, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 5, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0]
];*/


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
            var amen = new Amenaker(i, j, 10);
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
wether = 'dzmer';
count = 0;
takter = 0;
setInterval(p5func, 500);
var obj = {
    "xotbazm": [],
    "xotakersharj": [],
    "gishtichutel": [],
    "amenakermernel": []
};

function p5func() {
    count++;
    takter++;
    if (count % 80 == 0) {
        wether = 'dzmer';
    }
    if (count % 80 == 20) {
        wether = 'garun';
    }
    if (count % 80 == 40) {
        wether = 'amar';
    }
    if (count % 80 == 60) {
        wether = 'ashun';
    }


    for (var i in grassArr) {
        if (wether != 'dzmer') {
            grassArr[i].mul();
        }


    }

    for (var i in amenakerArr) {
        amenakerArr[i].eat();
    }

    for (var i in gishatichArr) {
        if (wether != 'amar') {
            gishatichArr[i].eat();
        }



    }

    for (var i in grassEatArr) {
        grassEatArr[i].eat();

    }

    for (var i in bombArr) {
        bombArr[i].kill();

    }


    io.sockets.emit("matrix", matrix);
    io.sockets.emit("nerkir", wether);


    var myJson = JSON.stringify(obj, null, ' ');
    if (takter % 10 == 0) {
        console.log(takter, takter % 10);

        obj.xotbazm.push(grassmul);
        obj.xotakersharj.push(grasseatmove);
        obj.gishtichutel.push(gishaticheat);
        obj.amenakermernel.push(amenakerdie);
        console.log(myJson);
        fs.writeFile("hello.json", myJson, function (err) {
            console.log("fs.writeFile ended");
        });

        //console.log(obj);
    }
}


io.on('connection', function (socket) {

});




