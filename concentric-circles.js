function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 5; i <= 390; i = i +5) {
    ellipse(200,200, i);
  }
}
