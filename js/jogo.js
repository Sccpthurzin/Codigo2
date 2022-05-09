class jogo {
  constructor() {
  
  }

  start() {
    formulario1 = new formulario();
    formulario1.display();
    jogador1 = new jogador();
    quantidadesdejogadores=jogador1.pegarquantidadedejogadores();
  }

  alteraroestadodejogo(){
  
  var referenciadoestadodejogo=database.ref("Estado")
  //Ref e usado para referencia, e on é ouvinte
  referenciadoestadodejogo.on("value",function (data){
  Estado1=data.val();

  })

  }
}
