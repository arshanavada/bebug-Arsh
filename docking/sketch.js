var gameState=1,ship,shipImg,bgImg,bg,station,stationImg;
var collider;
function preload(){
  shipImg=loadImage("Images/spacecraft.png");
  bgImg=loadImage("Images/space.jpg");
  stationImg=loadImage("Images/Spacestation.png");
}

function setup() {
  createCanvas(windowWidth*2-100,windowHeight);
 
  bg=createSprite(windowWidth/2,windowHeight/2,100,100);
  bg.addImage(bgImg,"background");
  bg.scale=0.4;
  
  
  ship=createSprite(windowWidth-windowWidth/1.2,windowHeight/2,50, 50);
  ship.addImage(shipImg,"spacecraft");
  ship.scale=0.5;
  ship.visibility=false;

  station=createSprite(windowWidth/2+500,windowHeight/2-50,10,10);
  station.addImage(stationImg,"spaceStation");
  station.scale=2.5;
  station.debug=true;
  
  collider= createSprite(windowWidth/2+500,windowHeight/2-50,10,10);
  collider.visibility=false;
  collider.debug=true;

  
}
function draw() {
  background(255,55,60);  
  ship.velocityX=0;
  ship.velocityY=0;
 
  if(gameState===1){
    ship.visibility=true;
    camera.x=ship.x;
    camera.y=ship.y
  }
  
  if(keyDown("RIGHT_ARROW")){
    ship.velocityX+=5;
  }
  if(keyDown("LEFT_ARROW")){
    ship.velocityX-=5;
  }
  if(keyDown("UP_ARROW")){
    ship.velocityY-=5;
  }
  if(keyDown("DOWN_ARROW")){
    ship.velocityY+=5;
  }
  if(ship.isTouching(collider)){
    gameState=2
  }
  else {
    textSize(60); 
    text("Docking successfull",windowWidth/2,windowHeight/2);
  }
  drawSprites();
}