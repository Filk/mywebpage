var imagem= document.getElementById("mapa");
var amb = document.getElementById("somAmbiente");
var quarto1 = document.getElementById("quarto1");
var quarto2 = document.getElementById("quarto2");
var quarto3 = document.getElementById("quarto3");

function preload() {
  amb.load();
  amb.autoplay = true;
}

function setup() {
  noCanvas();
}

function myCoordinates(event) {
  document.getElementById("mapa").style.cursor = 'url("data/mosca.png"), auto';
  var cx = event.offsetX;
  var cy = event.offsetY;
  var tamanhoXImagem=imagem.width;
  var spotX1= tamanhoXImagem*0.26;
  var spotX2= tamanhoXImagem*0.6;
  var spotX3= tamanhoXImagem*0.97;
  var spotY=330;

  let dSpot1 = floor(dist(spotX1, spotY, cx, cy));
  let dSpot2 = floor(dist(spotX2, spotY, cx, cy));
  let dSpot3 = floor(dist(spotX3, spotY, cx, cy));

  let threshold= tamanhoXImagem*0.2;

  //room 1
  if(dSpot1<threshold)
  {
    let vol1= abs(map(dSpot1, 0, threshold, 0.9, 0.01));
    quarto1.volume=vol1;
  }
  else {
    quarto1.volume=0;
  }

  //room 2
  if(dSpot2<threshold)
  {
    let vol2= abs(map(dSpot2, 0, threshold, 0.9, 0.01));
    quarto2.volume=vol2;
  }
  else {
    quarto2.volume=0;
  }

  //room 3
  if(dSpot3<threshold)
  {
    let vol3= abs(map(dSpot3, 0, threshold, 0.9, 0.01));
    quarto3.volume=vol3;
  }
  else {
    quarto3.volume=0;
  }
}


function startSound() {
  document.getElementById("mapa").style.display="block";
  amb.play();
  amb.volume=0.7;
  quarto1.volume=0.01;
  quarto1.play();
  quarto2.volume=0.01;
  quarto2.play();
  quarto3.volume=0.01;
  quarto3.play();
  document.getElementById("botaoComeca").style.display="none";
}

function soAmbiente() {
  document.getElementById("mapa").style.cursor = "default";
  quarto1.volume=0.0;
  quarto2.volume=0.0;
  quarto3.volume=0.0;
}

function meuAviso() {
  alert("Best experienced using headphones!")
}
