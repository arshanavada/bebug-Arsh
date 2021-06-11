var gameState=1,ship,shipImg,bgImg,bg,station,stationImg;
var landing,edges;

function preload(){
  shipImg=loadImage("Images/spacecraft.png");
  bgImg=loadImage("Images/space.jpg");
  stationImg=loadImage("Images/Spacestation.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  bg=createSprite(windowWidth/2,windowHeight/2,100,100);
  bg.addImage(bgImg,"background");
  bg.scale=0.4;
  
  
  ship=createSprite(windowWidth-windowWidth/1.2,windowHeight/2,50, 50);
  ship.addImage(shipImg,"spacecraft");
  ship.scale=0.5;
  ship.debug=true;

  station=createSprite(windowWidth/2+300,windowHeight/2-50,10,10);
  station.addImage(stationImg,"spaceStation");
  station.scale=2.0;
  station.debug=true;
  
  landing= createSprite(windowWidth/2+500,windowHeight/2-50,10,10);
  landing.visibility=false;
  landing.debug=true;
 
  
  
}
function draw() {
  background(255,55,60);  
  ship.velocityX=0;
  ship.velocityY=0;
  
  if(gameState===1){
    ship.visibility=true;
    camera.x=ship.x;
    camera.y=ship.y
  
  if (ship.x<0 || ship.x>1990 || ship.y<50 || ship.y>750){
    textSize(24);
    fill('white')
    text("return to area or you will expload",ship.x,ship.y);
    
  }
  console.log(ship.y);
  
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
  if(ship.isTouching(landing)){
    gameState=2
  }

  if(ship.isTouching(landing))
{
  gameState=2
}
  }
  if (gameState===2){
    fill('white');
    text("level accomplished",ship.X,ship.Y);
  }

  console.log(gameState);
  drawSprites();
  fill('white');
  text(mouseX+" "+mouseY,mouseX,mouseY);
}
