var base;
function setup() {
  createCanvas(800,400);
  base = new Ground (400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  base.display;
  drawSprites();
}