var box ;
function setup() {
  createCanvas(400,400);
  box=createSprite(100,100,10,10)
}

function draw() 
{
  background(30);
if (keyDown("RIGHT_ARROW")){
  box.position.x=box.position.x+5
}
drawSprites()
if(keyDown("LEFT_ARROW")){
  box.position.x=box.position.x-5
}
}




