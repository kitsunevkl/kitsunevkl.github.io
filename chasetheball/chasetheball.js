//catch the ball
var ballx = 300;
var bally = 300;
var ballSize =40;
var score =0;
var gameState = "L1";
var img1,img2,img3;

function preload(){
  
  img1=loadImage("https://kitsunevkl.github.io/images/smuginnocent.png");
  img2=loadImage("https://kitsunevkl.github.io/images/foxtransparent.png");
  img3=loadImage("https://kitsunevkl.github.io/images/crab.png");
}

function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
} // end setup


function draw() {
background(230);
if (gameState == "L1"){
levelOne();
}
if (gameState == "L2"){
  levelTwo();
}
if (gameState == "L3"){
  levelThree();
}
if (gameState == "L4"){
  levelFour();
}
text(("Score:" + score),width/2,40);
} //end draw

function levelOne(){
  text("Level One", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
 ballx =random(width -20);
 bally =random(height -20);
 score = score+1;
  }
    
 //ellipse(ballx,bally,ballSize,ballSize);
  image(img1, ballx -ballSize/2,bally -ballSize/2, ballSize, ballSize);
  line(ballx,bally,mouseX,mouseY);
  if(score>9){
  gameState= "L2"
  }
} //end level 1

function levelTwo(){
  background (247, 186, 30);
  text("Level Two", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
 ballx =random(width -20);
 bally =random(height -20);
 score = score+1;
  }
    
  //ellipse(ballx,bally,ballSize,ballSize);
  image(img1, ballx -ballSize/2,bally -ballSize/2, ballSize, ballSize);
  if(score>19){
  gameState= "L3"
  }
} //end level 2

function levelThree(){
  background (133, 237, 216);
  image(img2, 100, 100);
  text("Level Three", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
 ballx =random(width -20);
 bally =random(height -20);
 score = score+1;
 ballSize = ballSize -1;
  }
    
  //ellipse(ballx,bally,ballSize,ballSize);
  image(img1, ballx -ballSize/2,bally -ballSize/2, ballSize, ballSize);
  if(score>29){
  gameState= "L4"
  }
} //end level 3

function levelFour(){
  background (200, 135, 232);
  image(img3,100,150)
  text("You Win!!!", width/2, height-20);
} //end level 3
