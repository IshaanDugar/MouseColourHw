
var r = 0;
var g = 50;
var b=255;

var circle;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,900);

  circle = createSprite(200, 200, 10, 10);
  circle.draw = function() { ellipse(0,0,100,100) }
}


function draw(){

  background("white");

  circle.x = mouseX;
  circle.y = mouseY;

  if(circle.y > 0 && circle.y < 300){
    background("red");
  }

  if(circle.y > 300 && circle.y < 600 ){
    background("green");
  }

  if(circle.y > 600 && circle.y < 900){
    background("blue");
  }

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  
  drawSprites();
}