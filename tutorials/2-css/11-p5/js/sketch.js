let canvas;
let xPas = 0;
let yPas = 0;
let easing = .5;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style("z-index", -2)
}

function windowResized() {
    console.log("bigger! smaller!");
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    clear()

    xPas = xPas + ((mouseX - xPas) * easing);
    yPas = yPas + ((mouseY - yPas) * easing);

    drawThing(xPas, yPas);

}

function drawThing(_x, _y) {
    //draw eyeballs
    fill(255);
    ellipse(_x, _y, 30, 30);
    ellipse(_x - 20, _y + 5, 30, 30);

    //draw pupils
    fill(0);
    ellipse(_x + 10, _y, 5, 5)
    ellipse(_x - 10, _y + 5, 5, 5)
}