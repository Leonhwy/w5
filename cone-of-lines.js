function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 5; i <= 390; i = i +5) {
    line(width/2, 10, i ,390)
  }
}
