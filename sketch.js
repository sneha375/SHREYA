var edges;
var ob1,wall1,obimage,wallimg;
function preload(){
obimage=loadImage("download.png");
wallimg=loadImage("jerry.png");
}
function setup(){
    createCanvas(700,500);
    ob1=createSprite(200,200,100,50);
    ob1.addImage(obimage);
    ob1.scale=0.5;
    ob1.shapeColor=color(255,0,0);

    wall1=createSprite(550,350,90,50);
    wall1.addImage(wallimg);
  // ob1.velocityY=4;
   // ob1.velocityX=2;
}
function draw(){
    background("lightPink");
   edges= createEdgeSprites();
   ob1.collide(edges[3]);
   if(keyDown("space")){
    ob1.velocityY=-13; 
   }
   ob1.velocityY=ob1.velocityY+0.5; 

   if(keyDown("left")){
       ob1.x=ob1.x-2
   }
   if(keyDown("right")){
     //  ob1.x=ob1.x+2
     ob1.velocityX=3;
   }
   if(keyDown("up")){
    ob1.y=ob1.y-2
}
/*if(ob1.isTouching(wall1))
{
ob1.destroy();
} */
if(ob1.collide(wall1)){
    ob1.velociyX=0;
}  
// ob1.x=mouseX;
    //ob1.y=mouseY
drawSprites();
}