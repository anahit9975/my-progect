var socket = io.connect('http://localhost:3000');

socket.on('matrix', gcel)
function setup() {
     n = 30;
     side = 30;
    frameRate(2);
    createCanvas(n * side, n * side);
    background('#acacac');
}

function gcel(matrix) {

    for (var j = 0; j < matrix.length; j++) {
        for (var i = 0; i < matrix[0].length; i++) {

            if (matrix[j][i] == 1) {
                fill("green");
                rect(i * side, j * side, side, side);
            }


            else if (matrix[j][i] == 2) {
                fill("yellow");
                rect(i * side, j * side, side, side);
            }

            else if (matrix[j][i] == 0) {
                fill('#acacac');
                rect(i * side, j * side, side, side);
            }

            else if (matrix[j][i] == 3) {
                fill("red");
                rect(i * side, j * side, side, side);
            }

            else if (matrix[j][i] == 4) {
                fill("blue");
                rect(i * side, j * side, side, side);
            }


            else if (matrix[j][i] == 5) {
                fill("purple");
                rect(i * side, j * side, side, side);
            }

            else if (matrix[j][i] == 6) {
                fill("black");
                rect(i * side, j * side, side, side);
            }
        }
    }
}

