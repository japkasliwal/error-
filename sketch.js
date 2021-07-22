var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var r
var score = 0;
var balloonGroup
var arrowGroup
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  
  blue_balloonImage = loadImage("blue_balloon0.png")
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  balloonGroup = new Group()
  arrowGroup = new Group()
}

function draw() {
 background(0);
 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();





    }
  }
  r = Math.round(random(1,3))
  
  drawSprites();

textSize(25)
fill("white")
  text("Score : "+ score,280,50)





}











// Creating  arrows for bow
 function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  

if (arrow.isTouching(balloonGroup)){

score=score+1
balloonGroup.destroyEach()
arrowGroup.destroyEach()


}
arrowGroup.add(arrow)
  
}


function redBalloon() {
  var red = createSprite(20, Math.round(random(30,300)), 10, 10);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  Math.round(random(20, 370))

  switch (r){

    case 1: red.addImage(red_balloonImage)
    break
      case 2: red.addImage(green_balloonImage)
        break
        case 3: red.addImage(blue_balloonImage)
          break
            default :
    










}



balloonGroup.add(red)


}

