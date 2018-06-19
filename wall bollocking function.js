var spr1;
var spr2;
function setup() {
  createCanvas(400, 400);
  spr1 = createSprite(
    width/2, height/2, 100, 100);
  spr1.shapeColor = color(0);
  spr2 = createSprite(0, 0, 50, 50);
  spr2.shapeColor = color(128);
}
function draw() {
  background(50);
  spr2.velocity.x = (mouseX-spr2.position.x)*0.2;
  spr2.velocity.y = (mouseY-spr2.position.y)*0.2;
  spr2.collide(spr1);
  drawSprites();
}
