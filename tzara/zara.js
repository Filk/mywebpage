var markov, data1, data2;
var wordsCentro;
var pode;

function preload() {
  data1 = loadStrings('data/camoes.txt');
  data2 = loadStrings('data/carvalho.txt');
}

function setup() {
  noCanvas();
  markov = new RiMarkov(2);
  markov.loadText(data1.join(' '));
  markov.loadText(data2.join(' '));
  pode=false;
}

function keyTyped()
{
  //texto centro
  if(key === 'g' && pode)
  {
    let lines = markov.generateSentences(4);
    document.getElementById('textoCentro').innerHTML = lines ;
  }
}

function trigga()
{
  var fecha = document.getElementById("desaparece");
  console.log(fecha);
  fecha.style.opacity= "0";
  setTimeout(function(){ fecha.style.display = "none"; }, 600);
  pode=true;
}





