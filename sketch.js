var Fundo;
var database;
var formulario1, jogador1;
var jogo1;
var Estado1
var quantidadesdejogadores

function preload() {
  Fundo = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  jogo1 = new jogo();
  jogo1.start();
  
  jogo1.alteraroestadodejogo();
}

function draw() {
  background(Fundo);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
