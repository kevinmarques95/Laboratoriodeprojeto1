//Projeto realizado por Kevin Marques, Vasco Eusébio e André Fernandes
//Briefing DataViz, projeto "Mapeamento de video"

var video, jump;//Criação das variaveis

function preload() 
{
  video = createVideo ("video/video.mov");//Import do video para o Browser
  video.hide();//Esconde o video
  video.loop();//Reproduz o video em repetição
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  jump = 5;//tamanho dos quadrados desenhados
}

function draw() 
{
  background(0);//cor de fundo

  video.loadPixels();//Função de analise dos pixeis
  

  //Ciclo de repetição que faz a analise dos pixeis
  for (var y=0; y<video.height; y+=jump) 
  {
    for (var x=0; x<video.width; x+=jump) 
    {
      var i = y * video.width + x;
    
      var pixel = (video.pixels[i] + video.pixels[i+1] + video.pixels[i+2])/3;
      
      if (pixel>180)//condição que define quando os quadrados são desenhados em função do espetro de cor
      {
        noStroke();
        fill (53, 255, 252);//atribuição da cor ao circulo
        ellipse(x, y, jump, jump);// desenho dos circulos
      }
    }
  }

  //Ciclo de repeticao que faz a analise dos pixeis
  for (var y=0; y<video.height; y+=jump) 
  {
    for (var x=0; x<video.width; x+=jump) 
    {
      var i = y * video.width + x;
    
      var pixel = (video.pixels[i] + video.pixels[i+1] + video.pixels[i+2])/3;
      
      if (pixel>230)//condição que define quando os quadrados são desenhados em função do espetro de cor
      {
        noStroke();
        fill (255, 129, 0);//atribuição da cor ao quadrado
        rect (x, y, jump, jump);//desenho do quadrado 
    }
  }
 }
}

function keyPressed() 
{
  video.pause();
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}