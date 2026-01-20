let targetAn =width/2, height/2;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  targetAn++;
  tagetrAn = targetAnn % 25;
  background(220, 0, 0);

  drawTarget(targetAn);
}

function drawTarget (x, y){
ellipse (50, 50, 80, 80);
ellipse ( 255, 255, 60, 60);
ellipse (50, 50, 40, 40);
ellipse (255, 255, 20, 20);
}
