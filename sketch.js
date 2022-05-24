var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsbottom1, obsbottom1img, obsbottom2, obsbottom2img, obsbottom3, obs3bottomimg;
var obstop1, obstopimg1, obstop2, obstopimg2,edges; //added this edges

function preload(){
bgImg = loadImage("assets/bg.png")
obsbottom1img = loadImage("assets/obsBottom1.png")
obsbottom2img = loadImage("assets/obsBottom2.png")
obs3bottomimg = loadImage("assets/obsBottom3.png")
obstopimg1 = loadImage("assets/obsTop1.png")
obstopimg2 = loadImage("assets/obsTop2.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(600,600)

//background image
bg = createSprite(0,0,width,height);
bg.addImage(bgImg);
bg.scale = 1;
console.log(displayWidth);
console.log(windowWidth);

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

edges=createEdgeSprites() //added this
}

function draw() {
  
  background(bgImg);
          createBuilding();
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   balloon.collide(edges) //added this
        drawSprites();
        
}

function createBuilding(){
  if(frameCount%100==0){
    obsbottom1 = createSprite(600,550,100,200)
    obsbottom1.addImage(obsbottom1img);
    obsbottom1.velocityX = -2; 
    obsbottom1.scale = 0.1;
  }
}

function createBird(){
  if(frameCount%49==0){
    obstop2 = createSprite(600,550,100,200)
    obstop2.addImage(obstop2img);
    obstop2.velocityX = -2; 
    obstop2.scale = 0.1;
  }
}

function createStreetLamp(){
  if(frameCount%120==0){
    obsbottom2 = createSprite(600,550,100,200)
    obsbottom2.addImage(obsbottom2img);
    obsbottom2.velocityX = -2; 
    obsbottom2.scale = 0.1;
  }

}

function createBuilding2(){
  if(frameCount%37==0){
    obsbottom3 = createSprite(600,550,100,200)
    obsbottom3.addImage(obsbottom3img);
    obsbottom3.velocityX = -2; 
    obsbottom3.scale = 0.1;
  }
}

function createBalloon(){
  if(frameCount%75==0){
    obstop2 = createSprite(600,550,100,200)
    obstop2.addImage(obsbottom1img);
    obstop2.velocityX = -2; 
    obstop2.scale = 0.1;
  }
}