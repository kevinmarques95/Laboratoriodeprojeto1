
var x, y, t;

function setup() 
{
  createCanvas (windowWidth, windowHeight);
}


function draw() 
{
  x = width/2;
  y = height/2;
  t = height/2;

  if (mouseX>=x-(t/2) && mouseX<=x+(t/2) && mouseY>=y-(t/2) && mouseY<=y+(t/2) && mouseIsPressed === true)
  {
    noStroke();
    fill(0,255, 96);
  }
  else{
    fill(231, 76, 60);
  }

  noStroke();
  rectMode(CENTER);
  rect(x, y, t, t);
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
