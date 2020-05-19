var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50,200,70,25);
  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor="green";
  bullet.shapeColor="white";

  bullet.velocityX=3;

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

}

function draw() {
  background(0);

  damage = 0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness;

  if(bullet.collide(wall)){
    bullet.velocityX = 0;
    if(damage<10){
      wall.shapeColor="green";
    }
    if(damage>10){
       wall.shapeColor="red";
    }
   
  }
  drawSprites();
}
