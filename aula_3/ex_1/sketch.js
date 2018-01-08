

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 50, 75);
}


function draw() 
{
  stroke(map(mouseX, 0, width, 0, 360) , 50, 100);
  strokeWeight( abs(mouseX-pmouseX)+abs(mouseY-pmouseY));
  line(mouseX, mouseY, pmouseX, pmouseY);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
