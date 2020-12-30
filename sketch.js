var fixedRect,movingRect;
var rect1,rect2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect1= createSprite(750,140,50,50);
  rect2= createSprite(50,140,50,50);
  rect1.velocityX=-1;
  rect2.velocityX=1;
}
 
function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if(collided(fixedRect,movingRect)){
  rect1.shapeColor="black";
  rect2.shapeColor="blue";
 }
  else{
    rect1.shapeColor="green";
    rect2.shapeColor="yellow";
  }
  bounceOff(rect1,rect2);
  drawSprites();
}
