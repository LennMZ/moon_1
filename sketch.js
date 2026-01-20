let targetAn = 1;
let Speed = 0.2
function setup() {
  createCanvas (400, 400);

}

function draw() {
  if (targetAn >= 25 || targetAn <=0){
    Speed = Speed *-1;
  }
  // targetAn = targetAn % 25;
  targetAn  += Speed;
  background(225, 225, 255);

  drawTarget(targetAn);
}

function drawTarget(target) {
  let xLoc = map(target, 0, 25, 0, width);
fill (255, 0, 0)
ellipse(xLoc, height/2, 100, 100);
fill (255, 255, 255);
ellipse (xLoc, height/2, 80, 80);
fill (255, 0, 0);
ellipse (xLoc, height/2, 60, 60);
fill (255, 255, 255);
ellipse (xLoc, height/2, 40, 40);
fill (255, 0, 0);
ellipse (xLoc, height/2, 20, 20);
}
