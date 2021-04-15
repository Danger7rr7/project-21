
var platform1, platform2, platform3, platform4;
var box;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    box=createSprite(random(10,750),300,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=-3;

   
    platform1=createSprite(100,590,180,20);
    platform1.shapeColor="purple";

    platform2=createSprite(300,590,180,20);
    platform2.shapeColor="orange";

    platform3=createSprite(500,590,180,20);
    platform3.shapeColor="blue";

    platform4=createSprite(700,590,180,20);
    platform4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10));
   
    if(box.x<0){
      music.stop()
        box.velocityX=3
    }
    else if(box.x>800){
      music.stop()
        box.velocityX=-3
    }
   
  if(isTouching(box,platform4)){
    music.play()
    box.shapeColor="yellow";
    bounceOff(box,platform4)
    
  }
  
  else if(isTouching(box,platform3)){
    music.stop()
    box.shapeColor="blue";
    bounceOff(box,platform3)
   
  }
    
  else if(isTouching(box,platform2)){
    music.stop()
    box.shapeColor="orange";
    bounceOff(box,platform2)
    box.velocityX=0;
    box.velocityY=0;
  }
  
  else if(isTouching(box,platform1)){
    music.stop()
    box.shapeColor="purple";
    bounceOff(box,platform1)
  }

  if (box.y<0){
    music.stop()
    box.velocityY=3
  }

  drawSprites();
   
    
}
