var player,playerKnifeImg,bgImg;
var edges,flag="closed";
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var engine,battery,tools,workShop,dockInstructionImg;
var count=0;
var gameState="level2";
var called=0;
var gs=1;
function preload()
{
    bgImg=loadImage("Images/other-assets/floor.jpg");
    playerKnifeImg=loadImage("Images/player/player-knife.png");
    shipImg=loadImage("Images/Space-ships/spacecraft.png");
    bgImg2=loadImage("Images/other-assets/space.jpg");
    stationImg=loadImage("Images/Space-ships/Spacestation.png");
    dockInstructionImg=loadImage("Images/other-assets/Dock-text.png");

}

function setup()
{
    createCanvas(1300,600);
  //  console.log(width,height);
    
    player=createSprite(1290,550,60,50);
    player.addImage(playerKnifeImg,"plr");
    player.scale=0.3;
 
//  level1();
    if(gameState==="level1")
    {
        
        wall1=createSprite(150,90,10,180); //first vertical top
        wall1.rotation=0;

        wall2=createSprite(260,390,320,10); //first downward slanted mid
        wall2.rotation=45;

        wall3=createSprite(80,280,150,10); //second horizontal mid
        wall3.rotation=0;

        wall4=createSprite(150,510,10,180);//first vertical bottom
        wall4.rotation=0;

        wall5=createSprite(430,229,200,10); //second upward slanted
        wall5.rotation=145;

        wall6=createSprite(550,590,600,10); //first horizontal bottom
        wall6.rotation=0;

        wall7=createSprite(670,500,600,10);//second horizontal bottom
        wall7.rotation=0;

        wall8=createSprite(350,90,10,400); //second vertical top
        wall8.rotation=0;

        wall9=createSprite(510,90,10,180); //third vertical top
        wall9.rotation=0;


        wall10=createSprite(805,90,10,400); //fourth vertical top
        wall10.rotation=0;

        wall11=createSprite(950,290,300,10); //third horizontal middle 
        wall11.rotation=0;

        wall12=createSprite(1095,90,10,400); //fourth vertical top
        wall12.rotation=0;

        engine=createSprite(100,500,50,50); 
        battery=createSprite(200,500,50,50);
        tools=createSprite(300,300,50,50);
        gun=createSprite(100,100,50,50);

        workShop=createSprite(1005,150,20,20)
    }
    if(gameState==="level2")
    {
        background("red");
        bg=createSprite(windowWidth/2,windowHeight/2,100,100);
        bg.addImage(bgImg2,"background");
        bg.scale=0.4;
        
        
        ship=createSprite(windowWidth-windowWidth/1.2,windowHeight/2,50, 50);
        ship.addImage(shipImg,"spacecraft");
        ship.scale=0.5;
        //ship.debug=true;
      
        station=createSprite(windowWidth/2+300,windowHeight/2-50,10,10);
        station.addImage(stationImg,"spaceStation");
        station.scale=2.0;
                
        //station.debug=true;
        
        landing= createSprite(windowWidth/2+500,windowHeight/2-50,10,10);
        landing.visibility=false;
        //landing.debug=true;
        called=1; 
        img=createSprite(900,200);
        img.addImage("dock",dockInstructionImg);
        //img.debug=true;
       
      }
  }

function draw()
{
    background(0);  
    edges=createEdgeSprites();

    player.velocityX=0;
    player.velocityY=0;

    if(gameState==="level1")
    {
      level1();
   
      if(player.isTouching(workShop))
      {
          gameState="level2";
          if(called===0)
          {
                 setup();
          }
            level2();
      }
    }
 

    
  
    //text(mouseX+" "+mouseY,mouseX,mouseY);
    drawSprites();
    // textSize(14);
    // fill('white');
    // text("Level 1: Gather all the equipments needed and get to the workshop",10,20);
    // text("Level 2: Search a good place for docking on the enemy space craft. Just a tip soldier roof is a good place to dock instead of somewhere else.",10,40);
    // text("Level 3: Infeltrate the enemy ship and bring glory. you will have to fight bad guy. So get ready.",10,60);
    
//    text(count,20,20);
//    text("Workshop",940,160);
}

function level1()
{

    //camera.x=player.x;
    //camera.y=player.y; //level2
    fill('white');
    
    if(keyDown("RIGHT_ARROW")){
      player.velocityX+=8;
    }

    if(keyDown("LEFT_ARROW")){
      player.velocityX-=8;
    }

    if(keyDown("UP_ARROW")){
      player.velocityY-=8;
    }

    if(keyDown("DOWN_ARROW")){
      player.velocityY+=8;
    }

    if(player.isTouching(engine))
    {
      engine.destroy();
      count++;
    }
    if(player.isTouching(battery))
    {
      battery.destroy();
      count++;
    }
    if(player.isTouching(tools))
    {
      tools.destroy();
      count++;
    }
    if(player.isTouching(gun))
    {
      gun.destroy();
      count++;
    }
    if(count===4 && player.x>1000 &&player.y<350)
    {
      wall11.y=wall11.y-50;
    }

    player.bounceOff(wall1);
    player.bounceOff(wall2);
    player.bounceOff(wall3);
    player.bounceOff(wall4);
    player.bounceOff(wall5);
    player.bounceOff(wall6);
    player.bounceOff(wall7);
    player.bounceOff(wall8);
    player.bounceOff(wall9);
    player.bounceOff(wall10);
    player.bounceOff(wall11);
    player.bounceOff(wall12);
    player.bounceOff(edges);

}

function level2()
{
  // background("blue");
    text("Welcome to level2",350,250);
    
    //image(dockInstructionImg,ship.x,ship.y,100,100);
    if(gs===1)
    {
      ship.visibility=true;

    
        if (ship.x<0 || ship.x>1990 || ship.y<50 || ship.y>750)
        {
          textSize(24);
          fill('white')
          text("Return to area or you will expload",ship.x,ship.y);
          
        }
            //console.log(ship.y);
        
        if(keyDown("RIGHT_ARROW")){
          ship.x=ship.x+5;
        }
        if(keyDown("LEFT_ARROW")){
          ship.x=ship.x-5;
        }
        if(keyDown("UP_ARROW")){
          ship.y=ship.y-5;
        }
        if(keyDown("DOWN_ARROW")){
          ship.y=ship.y+5;
        }
        if(ship.isTouching(landing)){
          gs=2
        }

     }
    if (gs===2)
    {
        fill('white');
        text("level accomplished",ship.X,ship.Y);
     }

}
