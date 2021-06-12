//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
var ball,ground,log1,log2,log3,log4,stone1,stone2,stone3,backgroundIMG,woodIMG,star1,star2,star3,star4,star5,star6,starIMG,start,roof
var gameState="play"
var gameState="start"
var engine, world;
var ball
var ground
var count=0
var hero,heroIMG
var jungle1,Vright
var hero1,hero1_running
var fox1,fox1IMG
var fox2,fox2IMG,rod1,rod2
var gun,gunIMG
var gold,goldIMG
var cage1,cage1IMG
var cage2,cage2IMG,cube
var iron1,iron2,iron3
var bts,btsIMG
var gate,gateIMG,robber,robberIMG
var robber2,robber3
var metal1,metal2,metal3
var song


function preload(){
  background2IMG=loadImage("background2.jpg")
  background1IMG=loadImage("backgroundj.jpg")
  background3IMG=loadImage("grey.jpg")
  background4IMG=loadImage("btst.jpg")
  startIMG=loadImage("start.png") 
  heroIMG =loadImage("hero.png")
  fox1IMG =loadImage("fox1.png")
  fox2IMG=loadImage("fox2.png")
  gunIMG=loadImage("Gun.png")
  goldIMG=loadImage("gold.png")
  cage1IMG=loadImage("cage1.png")
  cage2IMG=loadImage("cage2.png")
  btsIMG=loadImage("bts.png")
  gateIMG=loadImage("gate.png")
  robberIMG=loadImage("robber.png")
 

 // hero1_running=loadAnimation("vright.jpg")
}

function setup() {
  createCanvas(1600,700);
  rectMode(CENTER);

    
   
   
    hero=createSprite(200,300,20,20)
    hero.addImage(heroIMG)
    hero.scale=0.2

    gold=createSprite(1200,600,20,20)
    gold.addImage(goldIMG)
    gold.scale=0.2

    

    

    iron1=createSprite(400,600,20,100)
    iron1.visible=false
    iron2=createSprite(500,600,20,100)
    iron2.visible=false
    iron3=createSprite(450,550,100,20)
    iron3.visible=false
    
    gate=createSprite(1310,200,20,360)
    gate.addImage(gateIMG)
    gate.scale=0.6
    
    ground=createSprite(width/2,670,width,20);
    ground.shapeColor="#1A4314";
    roof=createSprite(width/2,10,width,20)
    roof.shapeColor="#1A4314";
    log1=createSprite(150,510,290,300)
    log1.shapeColor="brown";
    log2=createSprite(1150,450,width/7,20)
    log2.shapeColor="brown";
    log3=createSprite(590,250,width/7,20)
    log3.shapeColor="brown";
    log4=createSprite(1450,510,290,300)
    log4.shapeColor="brown";
    rod1=createSprite(10,270,20,800);
    rod1.shapeColor="#1A4314";
    rod2=createSprite(1590,270,20,800);
    rod2.shapeColor="#1A4314";

    


    bts=createSprite(1450,270,20,20)
    bts.addImage(btsIMG)
    bts.scale=0.5
    
    robber=createSprite(1460,270,20,20)
    robber.addImage(robberIMG)
    robber.scale=0.2

    robber2=createSprite(1350,280,20,20)
    robber2.addImage(robberIMG)
    robber2.scale=0.2

    robber3=createSprite(1540,280,20,20)
    robber3.addImage(robberIMG)
    robber3.scale=0.2
    
  
    cube=createSprite(-100,200,20,20)
    cube.visible=true

    fox1=createSprite(400,600,20,20)
    fox1.addImage(fox1IMG)   
    fox1.scale=0.7

    gun=createSprite(590,220,20,20)
    gun.addImage(gunIMG)
    gun.scale=0.2

    fox2=createSprite(1200,600,20,20)
    fox2.addImage(fox2IMG)
    fox2.scale=0.7

    metal1=createSprite(1400,250,20,200)
    metal1.visible=false
    metal2=createSprite(1500,250,20,200)
    metal2.visible=false

    metal3=createSprite(1460,200,100,20)
    metal3.visible=false
   
    
    fox1.velocityX=+10
    fox2.velocityX=-10
  
  
 
}

function draw() {
 background('white')
 background (background1IMG);
  

  

 
 
  

  if(gameState==="start"){
    background(background2IMG)
     start=createSprite(500,300,20,20)
     start.addImage(startIMG)
     start.scale=0.9
     start.display()
     start.visible=false;
     ground.visible=false;
     roof.visible=false;
     log1.visible=false;
     log2.visible=false;
     log3.visible=false;
     log4.visible=false;
    hero.visible=false
     fox1.visible=false
     fox2.visible=false
     gold.visible=false
     robber.visible=false
     robber2.visible=false
     robber3.visible=false
     gun.visible=false
     gate.visible=false
     bts.visible=false
     rod1.visible=false
     rod2.visible=false
     
  }

 if(gameState==="play"){
 
  ground.display()
  ground.visible=true;
     roof.visible=true;
     log1.visible=true;
     log2.visible=true;
     log3.visible=true;
     log4.visible=true;
     hero.visible=true
     fox1.visible=true
     fox2.visible=true
     gold.visible=true
     robber.visible=true
     robber2.visible=true
     robber3.visible=true
     gun.visible=true
     gate.visible=true
     bts.visible=true
     rod1.visible=true
     rod2.visible=true
     hero.collide(ground)
     hero.collide(roof)
     hero.collide(log1)
     hero.collide(log2)
     hero.collide(log3)
     hero.collide(log4)
     hero.collide(rod1)
     hero.collide(rod2)

    
     
    
     
  
  if(keyDown("UP_ARROW")&& hero.y>=250){
    hero.velocityY = -12;
    
      }
      hero.velocityY = hero.velocityY + 0.8

     

      if(keyDown(RIGHT_ARROW)){
        hero.x+=5
      // hero1.changeImage("Vright")
      }
      if(keyDown(LEFT_ARROW)){
        hero.x-=5
       
      }

    
    
      fox1.visible=true
      fox2.visible=true
      

    //createEdgeSprites;
    fox1.bounceOff(log4);
    fox1.bounceOff(log1);
    fox2.bounceOff(log4);
    fox2.bounceOff(log1);


    if(hero.isTouching(gun)){
      gun.x=hero.x
      gun.y=hero.y
      gun.scale=0.2
    }

    if(hero.isTouching(fox1)&& gun.isTouching(fox1)){
      fox1.velocityX=0
      fox1.velocityY=0
      fox1.x=-100
      fox1.y=200
     

     
    }

    if(hero.isTouching(fox2)&& gun.isTouching(fox2)){
      fox2.velocityX=0
      fox2.velocityY=0
      fox2.x=-100
      fox2.y=200
    }
     

    if(fox1.isTouching(cube)&& fox2.isTouching(cube)){
      fox1.visible=false
      fox2.visible=false
      textSize(40)
      fill("black")
      text("NO MORE FOXES BUT STILL ROBBERS!!!",450,600)
      gun.x=590
      gun.y=220
      gun.visible=false
    
      

    }


  if(hero.isTouching(gold)){
    gold.x=hero.x
    gold.y=hero.y
    gold.scale=0.1
  }

  if(hero.isTouching(fox1)|| hero.isTouching(fox2)){
   background(background3IMG)
    textSize(40)
    fill("black")
    stroke(15)
    text("NOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!",400,100)
    text("😱😱😱😡😡😡😡",600,150)
    fill("black")
    stroke(30)
    text("WHY?!",400,250)
    fill("black")
    stroke(30)
    textSize(50)
    text("WHY?!",600,250)
    stroke(30)
    textSize(100)
    text("WHY?!",800,250)
    textSize(300)
    fill("black")
    stroke(30)
    text("U!",600,600)
    textSize(40)
    fill("black")
    stroke(30)
    text("injured!!!!!",900,600)
    textSize(60)
    fill("black")
    stroke(30)
    text("V!!!😭😭😭",1100,600)


   


  
   ground.visible=false;
     roof.visible=false;
     log1.visible=false;
     log2.visible=false;
     log3.visible=false;
     log4.visible=false;
    
     fox1.visible=false
     fox2.visible=false
     fox1.velocityX=0
     fox1.velocityY=0
     fox2.velocityX=0
     fox2.velocityY=0
     hero.visible=false
     gate.visible=false
     bts.visible=false
    
     gun.visible=false
     gold.visible=false

     fox1.x=400
     fox1.y=600
     
     fox2.x=400          
     fox2.y=800

     hero.x=450
     hero.y=550
      
     hero.collide(iron1)
     hero.collide(iron2)
     hero.collide(iron3)

  }

  hero.collide(gate)
    
  if(hero.isTouching(gold)){
    gate.velocityY=-3
  }
   

if(hero.isTouching(robber)&& gold.isTouching(robber)){
  background(background4IMG)
  ground.visible=false;
     roof.visible=false;
     log1.visible=false;
     log2.visible=false;
     log3.visible=false;
     log4.visible=false;
    
     fox1.visible=false
     fox2.visible=false
     fox1.velocityX=0
     fox1.velocityY=0
     fox2.velocityX=0
     fox2.velocityY=0
     hero.visible=false
     gate.visible=false
     bts.visible=false
    
     gun.visible=false
     gold.visible=false
     robber.visible=false
     robber2.visible=false
     robber3.visible=false
     hero.collide(metal1)
     hero.collide(metal2)
     hero.collide(metal3)
    textSize(100)
    fill("#3c005a")
    text("I PURPLE YOU",400,100)
    textSize(40)
    fill("#3c005a")
    text("OH GOODNESS, YOU SAVED BTS",400,150)
    text("AND YOU GOT A HUG FROM THEM 💜🤗🤗🤗",400,200)
}
     

 }

          
  


 if(mousePressedOver(start)){
  
  gameState="play"
 
 }

 
  
  
  drawSprites()
}

